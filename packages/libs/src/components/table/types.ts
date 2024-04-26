export type Columns = {
  title: string,
  selector: string,
  searchable?: boolean,
  sortable?: boolean,
  format?: (row: any) => string,
}

export type fetchData = (state: TableState) => Promise<{
  data: [],
  totalData: number,
}>;


export type DTableOptions = {
  pagination?: {
    limit?: number,
  }
  columns: Columns[],
  data: any[],
  showNumbering: boolean,
  showCheckbox: boolean,
  serverSide?: boolean,
  expandable?: boolean,
  expandableFormat?: (row: any) => string,
  fetchData?: fetchData,
  showLimit?: boolean,
  showSearch?: boolean,
  showEntries?: boolean,
  showPagination?: boolean,
}

export type TableStateSort = {
  field: string,
  direction: 'asc' | 'desc',
}

export type TableState = {
  totalData?: number,
  currentPage?: number,
  totalPages?: number,
  limit?: number,
  q?: string,
  sort?: TableStateSort[],
}