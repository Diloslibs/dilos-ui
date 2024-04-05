export type Columns = {
  title: string,
  searchable?: boolean,
  sortable?: boolean,
}

export type DTableOptions = {
  columns: Columns[],
  data: any[],
  showNumbering: boolean,
  showCheckbox: boolean,
}