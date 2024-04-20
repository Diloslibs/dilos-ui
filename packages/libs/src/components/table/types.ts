export type Columns = {
  title: string,
  selector: string,
  searchable?: boolean,
  sortable?: boolean,
}

export type DTableOptions = {
  pagination?: any
  columns: Columns[],
  data: any[],
  showNumbering: boolean,
  showCheckbox: boolean,
}

export type TableState = {
  totalData?: number,
  currentPage?: number,
  totalPages?: number,
  limit?: number,
  q?: string,
}