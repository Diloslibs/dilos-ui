import { chunkArray, debounce } from "../../utils";
import { ITable } from "./interface";
import { DTableOptions, Columns, TableState } from "./types";

class DTable implements ITable {
  _tEl: HTMLTableElement;
  _tOptions: DTableOptions = {
    columns: [],
    data: [],
    pagination: {},
    showNumbering: false,
    showCheckbox: false,
    serverSide: false,
  };
  _tData: any[];
  _tDataShadow: any[];
  _tDataFiltered: any[];
  _tDataFilteredShadow: any[];
  _tState: TableState = {
    totalData: 0,
    currentPage: 1,
    totalPages: 0,
    limit: 10,
    q: '',
  }
  _checkBoxEl: HTMLInputElement;

  constructor(tableId: string, options: DTableOptions) {
    this.checkParams(tableId, options);

    this._tEl = document.getElementById(tableId) as HTMLTableElement;
    this._tOptions = { ...this._tOptions, ...options };

    // Check if server side pagination is enabled
    this._tOptions.serverSide = options.serverSide ?? false;

    if (this._tOptions.serverSide) {

      this._tOptions.fetchData = options?.fetchData;
      if (this._tOptions.fetchData) {

        this._tState.limit = options.pagination.limit;
        this.initTable();
      }
      else {
        console.error('Dilos: please provide fetchData function for server side pagination');
      }
    }

    else {
      // Chunk data to make pagination
      const chunkedData: string[][] = chunkArray(this._tOptions.data, options.pagination.limit);

      // Set initial data to be displayed
      if (chunkedData.length > 0) {
        this._tData = chunkedData[0];
        this._tDataShadow = this._tOptions.data;
        this._tState.totalPages = chunkedData.length > 0 ? chunkedData.length : 1;
      }
    }

    this.init();
  }

  async initTable() {
    const res = await this._tOptions.fetchData(this._tState);
    this.setState(res.data, {
      totalData: res.totalData,
    });
  }

  private setState(data: [], state: TableState): void {
    this._tState = {
      ...this._tState,
      totalData: state.totalData,
      totalPages: state.totalData > 0 ? Math.ceil(state.totalData / this._tState.limit) : 1,
    }

    this._tData = data;
    this.render();
    this.reRenderPaginationDescription();
    this.renderPageButton();
  }

  checkParams(id: string, options: DTableOptions): void {
    if (!id) {
      console.error('Dilos: please provide table id');
    }

    if (!options.columns) {
      console.error('Dilos: please provide columns for the table');
    }

    if (!options.data) {
      console.error('Dilos: please provide data for the table');
    }
  }

  init(): void {
    this.render();
    this.renderInputSearch();
    this.renderPagination();
    this.toggleCheckboxRow();
    this.renderPageButton();
  }

  reinit(): void {
    this.toggleCheckboxRow();
  }

  render(): void {
    // clear table
    this._tEl.innerHTML = '';

    // create table header
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    if (this._tOptions.showCheckbox) {
      const th = document.createElement('th');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('data-table-checkall', '');
      th.appendChild(input);
      tr.appendChild(th);
    }

    if (this._tOptions.showNumbering) {
      const th = document.createElement('th');
      th.textContent = '#';
      tr.appendChild(th);
    }

    this._tOptions.columns.forEach((col: Columns) => {
      const th = document.createElement('th');
      th.textContent = col.title;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    this._tEl.innerHTML += thead.outerHTML;

    // create table body
    const tbody = document.createElement('tbody');
    if (this._tData) {
      this._tData.forEach((row: {}) => {
        const tr = document.createElement('tr');

        if (this._tOptions.showCheckbox) {
          const td = document.createElement('td');
          const input = document.createElement('input');
          input.type = 'checkbox';
          input.setAttribute('data-checkbox-row', '');
          td.appendChild(input);
          tr.appendChild(td);
        }

        if (this._tOptions.showNumbering) {
          const td = document.createElement('td');
          td.innerHTML = String(this._tOptions.data.indexOf(row) + 1);
          tr.appendChild(td);
        }

        this._tOptions.columns.forEach((col, i: number) => {
          const td = document.createElement('td');
          td.textContent = row[col.selector];
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });
    }
    this._tEl.innerHTML += tbody.outerHTML;
  }

  toggleCheckboxRow(): void {
    // get table checkall
    this._checkBoxEl = document.querySelector('[data-table-checkall]');

    if (this._checkBoxEl) {
      this._checkBoxEl.addEventListener('change', (e) => {
        const isChecked = this._checkBoxEl.checked;
        const checkBoxes = document.querySelectorAll('[data-checkbox-row]');

        checkBoxes.forEach((el: HTMLInputElement) => {
          el.checked = isChecked;
        });
      });
    }
  }

  async renderInputSearch() {
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');

    const select = document.createElement('select');

    const options: number[] = [10, 25, 50, 100];

    const newLimit = this._tOptions.pagination.limit;

    if (newLimit !== undefined && !options.includes(newLimit)) {
      options.push(newLimit)
      options.sort((a: number, b:number) => a - b);
    }

    select.id = 'select-per-page';

    // mapping content
    options.map((option) => {
      const opt = document.createElement('option');
      opt.value = String(option);
      opt.textContent = String(option);
      select.appendChild(opt);
    });

    if (newLimit !== undefined) {
      select.value = String(this._tOptions.pagination.limit);
    }

    select.addEventListener('change', this.handleChangePerPage.bind(this));

    const input = document.createElement('input');

    input.type = 'text';
    input.placeholder = 'Search...';

    const handleInput = debounce(async () => {
      const searchText: string = input.value.toLowerCase();

      if (this._tOptions.serverSide) {
        this._tState.q = searchText;
        this._tState.currentPage = 1;

        const res = await this._tOptions.fetchData(this._tState);

        this._tDataFiltered = res.data;
        this._tState.currentPage = 1;

        this.setState(res.data, {
          totalData: res.totalData,
        });

      }
      else {
        this._tDataFilteredShadow = this._tDataShadow.filter((row: any[]) =>
          row.some((item: string | number) =>
            typeof item === 'string'
              ? item.toLowerCase().includes(searchText)
              : typeof item === 'number' && (item as number).toString().includes(searchText)
          )
        )
        this._tDataFiltered = chunkArray(this._tDataFilteredShadow, this._tState.limit);

        this._tState.currentPage = 1;
        this._tData = this._tDataFiltered[this._tState.currentPage - 1] ?? [];
        this._tState.totalPages = this._tDataFiltered.length > 0 ? this._tDataFiltered.length : 1;
      }

      this.render();
      this.reRenderPaginationDescription();
      this.handleChangePage();

      if (!searchText) {
        this._tState.currentPage = 1;
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage - 1];
        this.reRenderPaginationDescription();
        return;
      }
      else {
        this.reRenderPaginationDescription(this._tData.length === 0);
      }
    }, 300);

    input.addEventListener('input', handleInput);

    div.appendChild(select);
    div.appendChild(input);
    this._tEl.parentElement.insertBefore(div, this._tEl);
  }

  async renderPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');

    const description = document.createElement('span');
    description.id = 'pagination-description';
    description.textContent = `Loading`;

    const panel = document.createElement('div');
    panel.setAttribute('data-table-pagination-panel', '');
    panel.classList.add('flex', 'items-center', 'space-x-2');

    const handleNextPage = async () => {
      if (this._tOptions.serverSide) {
        this._tState.currentPage++;

        const res = await this._tOptions.fetchData(this._tState);

        this.setState(res.data, {
          totalData: res.totalData,
        });
      }
      else {
        this._tState.currentPage++;
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage - 1];
      }

      this.render();
      this.reRenderPaginationDescription();
      this.handleChangePage();
    }

    const handlePrevPage = async () => {
      if (this._tOptions.serverSide) {
        this._tState.currentPage--;

        const res = await this._tOptions.fetchData(this._tState);

        this.setState(res.data, {
          totalData: res.totalData,
        });
      }
      else {
        this._tState.currentPage--;
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage - 1];

      }
      this.render();
      this.reRenderPaginationDescription();
      this.handleChangePage();
    }

    const firstPage = document.createElement('button');
    firstPage.setAttribute('data-table-first-page', '');
    firstPage.textContent = '<<';
    firstPage.addEventListener('click', () => {

      if (this._tOptions.serverSide) {
        this._tState.currentPage = 1;

        new Promise(async () => {
          const res = await this._tOptions.fetchData(this._tState);

          this.setState(res.data, {
            totalData: res.totalData,
          });
        });
      }

      else {
        this._tState.currentPage = 1;
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage];
      }

      this.render();

      this.reRenderPaginationDescription();
      this.handleChangePage();
    });

    const lastPage = document.createElement('button');
    lastPage.setAttribute('data-table-last-page', '');
    lastPage.textContent = '>>';
    lastPage.addEventListener('click', () => {

      if (this._tOptions.serverSide) {
        this._tState.currentPage = this._tState.totalPages;

        new Promise(async () => {
          const res = await this._tOptions.fetchData(this._tState);

          this.setState(res.data, {
            totalData: res.totalData,
          });
        });
      }

      else {
        this._tState.currentPage = this._tState.totalPages;
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage - 1];
      }

      this.render();

      this.reRenderPaginationDescription();
      this.handleChangePage();
    });

    const prev = document.createElement('button');
    prev.id = 'prev-page';
    prev.textContent = '<';
    prev.addEventListener('click', handlePrevPage);

    const next = document.createElement('button');
    next.id = 'next-page';
    next.textContent = '>';
    next.addEventListener('click', handleNextPage);

    panel.append(firstPage, prev, next, lastPage);
    pagination.append(description, panel);
    this._tEl.parentElement.appendChild(pagination);

    this.reRenderPaginationDescription();
    this.handleChangePage();
  }

  renderPageButton(): void {
    const div = document.createElement('div');
    div.setAttribute('data-table-page-button', '');
    div.classList.add('flex', 'justify-between', 'items-center', 'space-x-2', 'transition-all', 'duration-300');

    if (this._tOptions.serverSide) {
      const currentPage = this._tState.currentPage;
      const totalPages = this._tState.totalPages;
      const maxPagesToShow = 5; 1

      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      // Adjust startPage if endPage is at the maximum limit
      startPage = Math.max(1, endPage - maxPagesToShow + 1);

      if (this._tData) {
        for (let i = startPage; i <= endPage; i++) {
          const button = document.createElement('button');
          button.textContent = String(i);

          if (i === currentPage) {
            button.classList.add('bg-blue-500', 'text-white');
          }

          button.addEventListener('click', () => {
            this.handleClickPage(i);
          });
          div.appendChild(button);
        }
      }
    }
    else {
      const currentPage = this._tState.currentPage;
      const totalPages = this._tState.totalPages;
      const maxPagesToShow = 5;

      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      // Adjust startPage if endPage is at the maximum limit
      startPage = Math.max(1, endPage - maxPagesToShow + 1);

      if (this._tData) {
        for (let i = startPage; i <= endPage; i++) {
          const button = document.createElement('button');
          button.textContent = String(i);

          if (i === currentPage) {
            button.classList.add('bg-blue-500', 'text-white');
          }

          button.addEventListener('click', () => {
            this.handleClickPage(i);
          });
          div.appendChild(button);
        }
      }
    }

    const container = document.querySelector('[data-table-pagination-panel]');
    const childCount = container.childElementCount;
    const middleIndex = Math.floor(childCount / 2);

    const divs = document.querySelectorAll('[data-table-page-button]');

    if (divs.length > 0) {
      divs.forEach((div) => {
        div.remove();
      });
    }

    container.insertBefore(div, container.children[middleIndex]);
  }

  async handleClickPage(i: number) {
    this._tState.currentPage = i;

    if (this._tOptions.serverSide) {
      this._tState.currentPage = i;

      const res = await this._tOptions.fetchData(this._tState);

      this.setState(res.data, {
        totalData: res.totalData,
      });
    }
    else {
      if (this._tState.q) {
        this._tData = this._tDataFiltered[i - 1];
      }
      else {
        this._tData = chunkArray(this._tOptions.data, this._tState.limit)[i - 1];
      }
    }

    this.render();
    this.handleChangePage();
    this.renderPageButton();
    this.reRenderPaginationDescription();
  }

  handleChangePage(): void {
    const { currentPage, totalPages } = this._tState;

    // disable prev button
    if (currentPage <= 1) {
      const prev = document.getElementById('prev-page');
      prev.setAttribute('disabled', '');
      prev.classList.add('cursor-not-allowed');
    }
    // enable prev button
    else {
      const prev = document.getElementById('prev-page');
      prev.removeAttribute('disabled');
      prev.classList.remove('cursor-not-allowed');
    }

    // disable next button
    if (currentPage === totalPages) {
      const next = document.getElementById('next-page');
      next.setAttribute('disabled', '');
      next.classList.add('cursor-not-allowed');
    }
    // enable next button
    else {
      const next = document.getElementById('next-page');
      next.removeAttribute('disabled');
      next.classList.remove('cursor-not-allowed');
    }

    // disable first page button
    if (currentPage === 1) {
      const firstPage = document.querySelector('[data-table-first-page]');
      firstPage.setAttribute('disabled', '');
      firstPage.classList.add('cursor-not-allowed');
    }
    // enable first page button
    else {
      const firstPage = document.querySelector('[data-table-first-page]');
      firstPage.removeAttribute('disabled');
      firstPage.classList.remove('cursor-not-allowed');
    }

    // disable last page button
    if (currentPage === totalPages) {
      const lastPage = document.querySelector('[data-table-last-page]');
      lastPage.setAttribute('disabled', '');
      lastPage.classList.add('cursor-not-allowed');
    }
    // enable last page button
    else {
      const lastPage = document.querySelector('[data-table-last-page]');
      lastPage.removeAttribute('disabled');
      lastPage.classList.remove('cursor-not-allowed');
    }

    this.renderPageButton();
  }


  handleChangePerPage = (e: any): void => {
    // reset pagination current page
    this._tState.currentPage = 1;

    this._tState.limit = Number(e.target.value);

    if (this._tOptions.serverSide) {
      this._tState.limit = this._tState.limit;
      this._tState.currentPage = 1;

      new Promise(async () => {
        const res = await this._tOptions.fetchData(this._tState);

        this.setState(res.data, {
          totalData: res.totalData,
        });
      });
    }
    else {
      let chunkedData: any[][];

      if (this._tState.q) {
        chunkedData = chunkArray(this._tDataFilteredShadow, this._tState.limit);
      }
      else {
        chunkedData = chunkArray(this._tOptions.data, this._tState.limit);
      }

      // Set initial data to be displayed
      if (chunkedData.length > 0) {
        this._tData = chunkedData[0];
        this._tDataShadow = chunkedData[0];
        this._tState.totalPages = chunkedData.length > 0 ? chunkedData.length : 1;
      }
    }

    this.render();
    this.renderPageButton();
    this.handleChangePage();
    this.reRenderPaginationDescription();
  }

  reRenderPaginationDescription(hasNoData?: boolean): void {
    const description: HTMLSpanElement = document.querySelector('#pagination-description');

    const totalItemCount: number = this._tState.totalData;
    const firstEntryIndex: number = (this._tState.currentPage - 1) * this._tState.limit + 1;
    const lastEntryIndex: number = Math.min(this._tState.currentPage * this._tState.limit, totalItemCount);

    if (hasNoData) {
      description.textContent = `Showing 0 to 0 (filtered from ${totalItemCount} total entries)`;
      return;
    }

    if (this._tState.q) {
      let totalItem = 0;

      if (this._tOptions.serverSide) {
        totalItem = totalItemCount;
      }
      else {
        totalItem = this._tDataFiltered.reduce((acc, curr) => acc + curr.length, 0);
      }

      description.textContent = `Showing ${firstEntryIndex} to ${lastEntryIndex} of ${totalItem} entries
      (filtered from ${totalItemCount} total entries)`

      return;
    }

    description.textContent = `Showing ${firstEntryIndex} to ${lastEntryIndex} of ${totalItemCount} entries`;
  }
}

export default DTable;