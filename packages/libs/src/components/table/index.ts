import { chunkArray, debounce } from "../../utils";
import { ITable } from "./interface";
import { DTableOptions, Columns, TableState, TableStateSort, fetchData } from "./types";

class DTable implements ITable {
  _tId: string;
  _tWrapper: HTMLElement;
  _tWrapHeader: HTMLElement;
  _tWrapFooter: HTMLElement;
  _tEl: HTMLTableElement;
  _tHead: HTMLTableSectionElement;
  _tBody: HTMLTableSectionElement;
  _tOptions: DTableOptions = {
    columns: [],
    data: [],
    pagination: {},
    showNumbering: false,
    showCheckbox: false,
    serverSide: false,
    showLimit: true,
    showSearch: true,
    showEntries: true,
    showPagination: true,
  };
  _tData: any[];
  _tDataFiltered: any[];
  _tDataFilteredShadow: any[];
  _tState: TableState = {
    totalData: 0,
    currentPage: 1,
    totalPages: 0,
    limit: 10,
    q: '',
    sort: [],
  }
  _tLoading: boolean = false;
  _checkBoxEl: HTMLInputElement;

  constructor(tableId: string, options: DTableOptions) {
    try {
      this._checkParams(tableId, options);

      // set table id
      this._tId = tableId;

      this._tOptions = { ...this._tOptions, ...options };

      // Check if server side pagination is enabled
      this._tOptions.serverSide = options.serverSide ?? false;

      // set limit per page
      this._tState.limit = options?.pagination?.limit ?? 10;

      if (this._tOptions.serverSide) {
        this._tOptions.fetchData = options?.fetchData;
      }

      this._init();
    }
    catch (error) {
      console.error(error);
    }
  }

  _checkParams(id: string, options: DTableOptions): void {
    if (!id) {
      throw new Error('Missing table id');
    }

    if (!options?.columns) {
      throw new Error('Missing columns');
    }

    if (!options?.data) {
      throw new Error('Missing data');
    }

    if (options?.serverSide) {
      if (!options?.fetchData) {
        throw new Error('Missing fetchData function for server side pagination');
      }
    }
  }

  async _init(): Promise<void> {
    this._render();
    if (this._tOptions.serverSide) {
      await this._fetchData();
    } else {

      // Chunk data to make pagination
      const chunkedData: string[][] = chunkArray(this._tOptions.data, this._tState.limit);

      // Set initial data to be displayed
      if (chunkedData.length > 0) {
        const data: any[] = chunkedData[0];

        this._update(data, this._tOptions.data.length);
      }
    }
  }

  _setLoading(loading: boolean): void {
    // get dls-wrap-d-table
    const wrapTable: HTMLElement = document.querySelector(`[dls-load-${this._tId}]`);

    if (loading) {
      wrapTable.classList.remove('hidden');
    } else {
      wrapTable.classList.add('hidden');
    }

    this._tLoading = loading;
  }

  _fetchData = async (): Promise<void> => {
    try {
      this._setLoading(true);
      const res = await this._tOptions.fetchData(this._tState);
      this._update(res.data, res.totalData);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      this._setLoading(false);
    }
  }

  _update(data: any[], totalData: number): void {
    this._tData = data;

    this._setState({
      totalData,
      totalPages: totalData > 0 ? Math.ceil(totalData / this._tState.limit) : 1,
    })

    this._renderTableBody();
    this._updatePagination();
    this._updatePageButton();
    this._updatePageNavigator();
  }

  _setState(state: TableState): void {
    this._tState = { ...this._tState, ...state };
  }

  destroy(): void {
    if (this._tEl) {
      this._tEl.innerHTML = '';
    }
  }

  _render(): void {
    this._renderTableStructure();
    this._renderWrapHeader();
    this._renderTableHeader();
    this._renderWrapFooter();
    this._renderRowCheckbox();
  }

  /**
    * Renders the table structure by wrapping the table with a div for styling purposes,
    * setting up table header and body elements, and appending them to the table.
  */
  _renderTableStructure(): void {
    // Get the table element
    this._tEl = document.getElementById(this._tId) as HTMLTableElement;

    // Wrap the table with a div
    this._tWrapper = document.createElement('div');

    // Set data attributes to the wrapper
    this._tWrapper.setAttribute(`dls-wrap-${this._tId}`, '');
    this._tWrapper.style.overflowX = 'auto';
    this._tWrapper.style.position = 'relative';

    // Add custom classes to the wrapper
    const div: HTMLDivElement = document.createElement('div');
    const span: HTMLSpanElement = document.createElement('span');

    div.setAttribute(`dls-load-${this._tId}`, '');
    div.classList.add("absolute", "top-0", "min-h-full", "min-w-full", "flex", "justify-center", "items-center", "z-10", "bg-gray-100", "bg-opacity-40", "hidden");
    span.classList.add("d-loader");

    div.appendChild(span);
    this._tWrapper.appendChild(div);

    // Insert the wrapper before the table in the DOM
    this._tEl.parentElement.insertBefore(this._tWrapper, this._tEl);

    // Append the table to the wrapper
    this._tWrapper.appendChild(this._tEl);

    // Create and set the table header element
    const thead = document.createElement('thead');
    this._tHead = thead;

    // Create and set the table body element
    const tbody = document.createElement('tbody');
    this._tBody = tbody;

    // Append the table header and body to the table
    this._tEl.appendChild(thead);
    this._tEl.appendChild(tbody);
  }

  /**
   * Renders the table header based on the specified options and columns.
   * Includes checkboxes, numbering, column titles, and sorting icons if applicable.
  */
  _renderTableHeader(): void {
    // create table header
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
      const wrapper = document.createElement('div');
      wrapper.classList.add('flex', 'justify-between', 'items-center');

      const span = document.createElement('span');
      span.textContent = col.title
      wrapper.appendChild(span);

      const isSortable = this._tOptions.columns.find((c) => c.selector === col.selector)?.sortable ?? false;
      if (isSortable) {
        th.classList.add('cursor-pointer');
        // add sort icon
        const sortIcon = document.createElement('span');
        sortIcon.classList.add('ml-2');
        wrapper.appendChild(sortIcon);

        // set data attributes
        wrapper.setAttribute(`dls-${this._tId}-th`, col.selector);
        th.addEventListener('click', this._handleSort.bind(this, col.selector));
      }
      th.appendChild(wrapper);
      tr.appendChild(th);
    });

    // append table header to table
    this._tHead.appendChild(tr);
  }

  /**
   * Renders the table body based on the provided data.
   * Includes rows with checkboxes, numbering, and column values.
  */
  _renderTableBody(): void {
    // clear table body
    this._tBody.innerHTML = '';

    if (this._tData) {
      this._tData.forEach((row: {}, i: number) => {
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
          tr.appendChild(td);
          td.innerHTML = String(this._tState.currentPage * this._tState.limit - this._tState.limit + i + 1);
        }

        this._tOptions.columns.forEach((col, i: number) => {
          const td = document.createElement('td');
          td.textContent = row[col.selector];
          tr.appendChild(td);
        });

        this._tBody.appendChild(tr);
      });
    }
  }

  /**
   * Renders the row checkbox functionality.
   * Listens for changes in the table checkall checkbox and updates all row checkboxes accordingly.
   */
  _renderRowCheckbox(): void {
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

  async _renderWrapHeader() {
    const div = document.createElement('div');
    const select = document.createElement('select');
    const input = document.createElement('input');

    if (this._tOptions.showLimit) {
      div.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');


      const options: number[] = [10, 25, 50, 100];

      const newLimit = this._tOptions.pagination.limit;

      if (newLimit !== undefined && !options.includes(newLimit)) {
        options.push(newLimit)
        options.sort((a: number, b: number) => a - b);
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

      select.addEventListener('change', this._handleChangePerPage.bind(this));
      div.appendChild(select);
    }

    if (this._tOptions.showSearch) {
      input.type = 'text';
      input.placeholder = 'Search...';

      const handleInput = debounce(async () => {
        const searchText: string = input.value.toLowerCase();

        if (this._tOptions.serverSide) {
          this._setState({ q: searchText, currentPage: 1 });
          this._fetchData();
        }
        else {
          this._tDataFilteredShadow = this._tOptions.data.filter((row: any[]) =>
            row.some((item: string | number) =>
              typeof item === 'string'
                ? item.toLowerCase().includes(searchText)
                : typeof item === 'number' && (item as number).toString().includes(searchText)
            )
          )
          this._tDataFiltered = chunkArray(this._tDataFilteredShadow, this._tState.limit);

          this._tData = this._tDataFiltered[this._tState.currentPage - 1] ?? [];
          this._setState({ currentPage: 1, totalPages: this._tDataFiltered.length > 0 ? this._tDataFiltered.length : 1 });

          this._renderTableBody();
          this._updatePagination();
          this._updatePageNavigator();
        }


        if (!searchText) {
          this._setState({ q: '', currentPage: 1 });
          this._tData = chunkArray(this._tOptions.data, this._tState.limit)[this._tState.currentPage - 1];
          this._updatePagination();
          return;
        }
        else {
          this._updatePagination(this._tData.length === 0);
        }
      }, 300);

      input.addEventListener('input', handleInput);

      div.appendChild(input);
    }

    // Append the wrapper to the table
    if (this._tOptions.showLimit || this._tOptions.showSearch) {
      this._tWrapper.parentElement.insertBefore(div, this._tWrapper);
    }
  }

  async _renderWrapFooter() {
    let wrapFooter: HTMLElement = document.createElement('div');
    wrapFooter.classList.add('flex', 'justify-between', 'items-center', 'space-x-2');

    let entries: HTMLElement | null;
    let panel: HTMLElement | null;


    if (this._tOptions.showEntries) {
      entries = document.createElement('span');
      entries.id = 'pagination-description';
      entries.textContent = `Loading`;
      wrapFooter.appendChild(entries);
    }

    if (this._tOptions.showPagination) {
      panel = document.createElement('div')
      panel.setAttribute('data-table-pagination-panel', '');
      panel.classList.add('flex', 'items-center', 'space-x-2');

      const firstPage = document.createElement('button');
      firstPage.id = 'first-page';
      firstPage.textContent = '<<';
      firstPage.addEventListener('click', this._handlePage.bind(this, 'first'));

      const lastPage = document.createElement('button');
      lastPage.id = 'last-page';
      lastPage.textContent = '>>';
      lastPage.addEventListener('click', this._handlePage.bind(this, 'last'));

      const prev = document.createElement('button');
      prev.id = 'prev-page';
      prev.textContent = '<';
      prev.addEventListener('click', this._handlePage.bind(this, 'prev'));

      const next = document.createElement('button');
      next.id = 'next-page';
      next.textContent = '>';
      next.addEventListener('click', this._handlePage.bind(this, 'next'));

      panel.append(firstPage, prev, next, lastPage);
      wrapFooter.append(panel);
    }


    if (this._tOptions.showEntries || this._tOptions.showPagination) {

      if (this._tOptions.showPagination && !this._tOptions.showEntries) {
        wrapFooter.style.justifyContent = 'flex-end';
      }

      this._tWrapper.parentElement.appendChild(wrapFooter);

      this._updatePagination();
      this._updatePageNavigator();
    }
  }

  _updatePageButton(): void {
    if (!this._tOptions.showPagination) return;

    const div = document.createElement('div');
    div.setAttribute('data-table-page-button', '');
    div.classList.add('flex', 'justify-between', 'items-center', 'space-x-2', 'transition-all', 'duration-300');

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

        button.addEventListener('click', this._handlePage.bind(this, 'click', i));
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

  _updatePagination(hasNoData?: boolean): void {
    const description: HTMLSpanElement = document.querySelector('#pagination-description');


    const totalItemCount: number = this._tState.totalData;
    if (hasNoData) {
      description.textContent = `Showing 0 to 0 (filtered from ${totalItemCount} total entries)`;
      return;
    }

    const firstEntryIndex: number = (this._tState.currentPage - 1) * this._tState.limit + 1;
    const lastEntryIndex: number = Math.min(this._tState.currentPage * this._tState.limit, totalItemCount);

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

  _updatePageNavigator(): void {
    const { currentPage, totalPages } = this._tState;

    const setButtonState = (buttonId: string, enabled: boolean) => {
      const button = document.getElementById(buttonId);
      if (button) {
        if (enabled) {
          button.removeAttribute('disabled');
          button.classList.remove('cursor-not-allowed');
        } else {
          button.setAttribute('disabled', '');
          button.classList.add('cursor-not-allowed');
        }
      }
    };

    setButtonState('prev-page', currentPage > 1);
    setButtonState('next-page', currentPage < totalPages);
    setButtonState('first-page', currentPage > 1);
    setButtonState('last-page', currentPage < totalPages);
  }

  _handleChangePerPage = async (e: any): Promise<void> => {
    // Reset pagination current page
    this._setState({ currentPage: 1, limit: Number(e.target.value) });

    if (this._tOptions.serverSide) {
      this._fetchData();
    } else {
      // Client-side pagination
      let dataToDisplay = this._tOptions.data;

      if (this._tState.q) {
        // Filter data if search query is present
        dataToDisplay = this._tDataFilteredShadow;
      }

      // Chunk the data for pagination
      const chunkedData = chunkArray(dataToDisplay, this._tState.limit);

      // Update the table with the first chunk of data
      this._update(chunkedData[0], dataToDisplay.length);
    }
  }

  _handlePage = async (direction: 'first' | 'last' | 'next' | 'prev' | 'click', page?: number): Promise<void> => {
    let newPage = this._tState.currentPage;

    if (direction === 'click' && page !== undefined) {
      newPage = page;
    } else {
      switch (direction) {
        case 'first':
          newPage = 1;
          break;
        case 'last':
          newPage = this._tState.totalPages;
          break;
        case 'next':
          newPage++;
          break;
        case 'prev':
          newPage--;
          break;
        default:
          break;
      }
    }

    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > this._tState.totalPages) {
      newPage = this._tState.totalPages;
    }

    this._setState({ currentPage: newPage });

    if (this._tOptions.serverSide) {
      this._fetchData();
    } else {
      let data: any[];

      if (this._tState.q) {
        data = this._tDataFiltered[newPage - 1];
      } else {
        data = chunkArray(this._tOptions.data, this._tState.limit)[newPage - 1];
      }

      this._update(data, this._tOptions.data.length);
    }
  }

  _algorithmSort = (data: any[], sort: TableStateSort[]): any[] => {
    let sortedData = [...data];

    sort.forEach((s) => {
      sortedData = sortedData.sort((a, b) => {
        let fieldA = a[s.field];
        let fieldB = b[s.field];

        if (typeof fieldA === 'string') {
          fieldA = fieldA.toLowerCase();
          fieldB = fieldB.toLowerCase();
        }

        if (s.direction === 'asc') {
          if (fieldA < fieldB) {
            return -1;
          }
          if (fieldA > fieldB) {
            return 1;
          }
          return 0;
        } else {
          if (fieldA > fieldB) {
            return -1;
          }
          if (fieldA < fieldB) {
            return 1;
          }
          return 0;
        }
      });
    });

    return sortedData;
  }

  _handleSort = async (selector: string): Promise<void> => {
    const th: HTMLTableElement = document.querySelector(`[dls-${this._tId}-th="${selector}"]`);
    let span: HTMLSpanElement | null = th.querySelector(`[dls-${this._tId}-sort="${selector}"]`);

    // Get the current sort state from the table state
    let arrSort: TableStateSort[] = this._tState.sort;

    // Find the current sort configuration for the specified field
    let currentSort = arrSort.find((s) => s.field === selector);

    // If no sort configuration exists for the field, add it in ascending order
    if (!currentSort) {
      arrSort = [...arrSort, { field: selector, direction: 'asc' }];

      // Create a span element to display the sort icon
      let span = document.createElement('span');
      span.setAttribute(`dls-${this._tId}-sort`, selector);
      span.textContent = '🔼';
      th.appendChild(span);
    } else {
      // Toggle the sort direction for the field
      if (currentSort.direction === 'asc') {
        // update the sort configuration to descending
        arrSort = arrSort.map((s) => s.field === selector ? { ...s, direction: 'desc' } : s);
        span!.textContent = '🔽'; // Update the sort icon to descending
      } else if (currentSort.direction === 'desc') {
        // Remove the sort configuration if it is already in descending order
        arrSort = arrSort.filter((s) => s.field !== selector);
        span!.textContent = ''; // Remove the sort icon from the DOM
        span!.remove();
      } else {
        // If the current sort direction is neither ascending nor descending, set it to ascending
        arrSort = arrSort.map((s) => s.field === selector ? { ...s, direction: 'asc' } : s);
        span!.textContent = '🔼'; // Update the sort icon to ascending
      }
    }

    this._setState({ sort: arrSort });

    if (this._tOptions.serverSide) {
      this._fetchData();

      return;
    }

    // Sort the data based on the sort configuration
    const sortedData = this._algorithmSort(this._tOptions.data, arrSort);

    this._update(sortedData, sortedData.length)
  }
}

export default DTable;