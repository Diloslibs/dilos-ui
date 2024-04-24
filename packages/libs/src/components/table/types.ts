export type Columns = {
  title: string,
  selector: string,
  searchable?: boolean,
  sortable?: boolean,
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
  fetchData?: fetchData,
  showLimit?: boolean,
  showSearch?: boolean,
  showEntries?: boolean,
  showPagination?: boolean,
}

export type TableState = {
  totalData?: number,
  currentPage?: number,
  totalPages?: number,
  limit?: number,
  q?: string,
}