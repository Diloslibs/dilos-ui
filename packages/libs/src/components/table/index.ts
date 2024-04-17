import { chunkArray, debounce } from "../../utils";
import { ITable } from "./interface";
import { DTableOptions, Columns } from "./types";

class DTable implements ITable {
  _tEl: HTMLTableElement;
  _tOptions: DTableOptions = {
    columns: [],
    data: [],
    showNumbering: true,
    showCheckbox: false,
  };
  _tData: any[];
  _tDataShadow: any[];
  _tDataFiltered: any[];
  _tDataFilteredShadow: any[];
  _checkBoxEl: HTMLInputElement;
  _tPagination: {
    perPage: number,
    currentPage: number,
    totalPage: number,
    isFilteringActive: boolean,
  } = {
      perPage: 10,
      currentPage: 1,
      totalPage: 0,
      isFilteringActive: false,
    };

  constructor(tableId: string, options: DTableOptions) {
    this.checkParams(tableId, options);

    this._tEl = document.getElementById(tableId) as HTMLTableElement;
    this._tOptions = { ...this._tOptions, ...options };

    // Chunk data to make pagination
    const chunkedData: string[][] = chunkArray(this._tOptions.data, options.pagination.perPage);

    // Set initial data to be displayed
    if (chunkedData.length > 0) {
      this._tData = chunkedData[0];
      this._tDataShadow = this._tOptions.data;
      this._tPagination.totalPage = chunkedData.length > 0 ? chunkedData.length : 1;
    }

    this.init();
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

    // console current page
    const currentPage = this._tPagination.currentPage;
    console.log('Current Page: ', currentPage);

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
      this._tData.forEach((row: string) => {
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


        this._tOptions.columns.forEach((_, i: number) => {
          const td = document.createElement('td');
          td.textContent = row[i];
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

  renderInputSearch(): void {
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');

    const select = document.createElement('select');
    select.id = 'select-per-page';
    select.innerHTML = `
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    `;

    select.addEventListener('change', this.handleChangePerPage.bind(this));

    const input = document.createElement('input');

    input.type = 'text';
    input.placeholder = 'Search...';

    const handleInput = debounce(() => {
      const searchText: string = input.value.toLowerCase();
      this._tDataFilteredShadow = this._tDataShadow.filter((row: any[]) =>
        row.some((item: string | number) =>
          typeof item === 'string'
            ? item.toLowerCase().includes(searchText)
            : typeof item === 'number' && (item as number).toString().includes(searchText)
        )
      )
      this._tDataFiltered = chunkArray(this._tDataFilteredShadow, this._tPagination.perPage);

      this._tPagination.currentPage = 1;
      this._tData = this._tDataFiltered[this._tPagination.currentPage - 1] ?? [];
      this._tPagination.totalPage = this._tDataFiltered.length > 0 ? this._tDataFiltered.length : 1;
      this.render();
      this.renderPageButton();
      this.handleChangePage();


      if (!searchText) {
        this._tPagination.isFilteringActive = false;
        this._tPagination.currentPage = 1;
        this._tData = chunkArray(this._tOptions.data, this._tPagination.perPage)[this._tPagination.currentPage - 1];
        this.reRenderPaginationDescription();
        return;
      }
      else {
        this._tPagination.isFilteringActive = true;
        this.reRenderPaginationDescription(this._tData.length === 0);
      }
    }, 300);

    input.addEventListener('input', handleInput);

    div.appendChild(select);
    div.appendChild(input);
    this._tEl.parentElement.insertBefore(div, this._tEl);
  }

  renderPagination(): void {
    const pagination = document.createElement('div');
    pagination.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');

    const description = document.createElement('span');
    description.id = 'pagination-description';
    description.textContent = `Loading`;

    const panel = document.createElement('div');
    panel.setAttribute('data-table-pagination-panel', '');
    panel.classList.add('flex', 'items-center', 'space-x-2');

    const handleNextPage = () => {
      this._tPagination.currentPage++;
      this._tData = chunkArray(this._tOptions.data)[this._tPagination.currentPage - 1];
      this.render();
      this.reRenderPaginationDescription();
      this.handleChangePage();
    }

    const handlePrevPage = () => {
      this._tPagination.currentPage--;
      this._tData = chunkArray(this._tOptions.data)[this._tPagination.currentPage - 1];
      this.render();
      this.reRenderPaginationDescription();
      this.handleChangePage();
    }

    const firstPage = document.createElement('button');
    firstPage.setAttribute('data-table-first-page', '');
    firstPage.textContent = '<<';
    firstPage.addEventListener('click', () => {
      this._tPagination.currentPage = 1;
      this._tData = chunkArray(this._tOptions.data)[this._tPagination.currentPage];
      this.render();

      this.reRenderPaginationDescription();
      this.handleChangePage();
    });

    const lastPage = document.createElement('button');
    lastPage.setAttribute('data-table-last-page', '');
    lastPage.textContent = '>>';
    lastPage.addEventListener('click', () => {
      this._tPagination.currentPage = this._tPagination.totalPage;
      this._tData = chunkArray(this._tOptions.data)[this._tPagination.currentPage - 1];
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

    const currentPage = this._tPagination.currentPage;
    const totalPage = this._tPagination.totalPage;
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

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

  handleClickPage(i: number): void {
    this._tPagination.currentPage = i;

    if (this._tPagination.isFilteringActive) {
      this._tData = this._tDataFiltered[i - 1];
    }
    else {
      this._tData = chunkArray(this._tOptions.data, this._tPagination.perPage)[i - 1];
    }

    this.render();
    this.handleChangePage();
    this.renderPageButton();
    this.reRenderPaginationDescription();
  }

  handleChangePage(): void {
    const { currentPage, totalPage } = this._tPagination;

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
    if (currentPage === totalPage) {
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
    if (currentPage === totalPage) {
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
    this._tPagination.currentPage = 1;

    this._tPagination.perPage = Number(e.target.value);

    let chunkedData: any[][];

    if (this._tPagination.isFilteringActive) {
      chunkedData = chunkArray(this._tDataFilteredShadow, this._tPagination.perPage);
    }
    else {
      chunkedData = chunkArray(this._tOptions.data, this._tPagination.perPage);
    }

    // Set initial data to be displayed
    if (chunkedData.length > 0) {
      this._tData = chunkedData[0];
      this._tDataShadow = chunkedData[0];
      this._tPagination.totalPage = chunkedData.length > 0 ? chunkedData.length : 1;
    }

    this.render();
    this.renderPageButton();
    this.handleChangePage();
  }

  reRenderPaginationDescription(hasNoData?: boolean): void {
    const description: HTMLSpanElement = document.querySelector('#pagination-description');

    const totalItemCount: number = this._tOptions.data.length;
    const firstEntryIndex: number = (this._tPagination.currentPage - 1) * this._tPagination.perPage + 1;
    const lastEntryIndex: number = Math.min(this._tPagination.currentPage * this._tPagination.perPage, totalItemCount);

    if (hasNoData) {
      description.textContent = `Showing 0 to 0 (filtered from ${this._tOptions.data.length} total entries)`;
      return;
    }

    if (this._tPagination.isFilteringActive) {
      description.textContent = `Showing ${firstEntryIndex} to ${lastEntryIndex} of ${this._tDataFiltered.reduce((acc, curr) => acc + curr.length, 0)} entries
      (filtered from ${totalItemCount} total entries)`

      return;
    }

    description.textContent = `Showing ${firstEntryIndex} to ${lastEntryIndex} of ${totalItemCount} entries`;
  }
}

export default DTable;