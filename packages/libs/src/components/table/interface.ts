import { DTableOptions, TableState } from "./types";

export declare interface ITable {
  _tId: string,
  _tWrapper: HTMLElement,
  _tEl: HTMLTableElement,
  _tHead: HTMLTableSectionElement,
  _tBody: HTMLTableSectionElement,
  _tOptions: DTableOptions,
  _tData: any[],
  _tState: TableState,

  _checkParams(id: string, options: DTableOptions): void,
  _init(): Promise<void>,
  _render(): void,
  _renderWrapHeader(): void,
  _renderWrapFooter(): void,
  _renderTableStructure(): void,
  _renderTableHeader(): void,
  _renderTableBody(): void,
  _update(data: [], state: TableState): void,
  _updatePagination(): void,
  _updatePageButton(): void,
  _updatePageNavigator(): void,
  _renderRowCheckbox(): void,

  destroy(): void,
}