import { DTableOptions, TableState } from "./types";

export declare interface ITable {
  _tEl: HTMLTableElement,
  _tOptions: DTableOptions,
  _tData: any[],
  _tState: TableState,

  _checkParams(id: string, options: DTableOptions): void,
  _init(): Promise<void>,
  _render(): void,
  _renderInputSearch(): void,
  _renderPagination(): void,
  _update(data: [], state: TableState): void,
  _updatePagination(): void,
  _updatePageButton(): void,
  _updatePageNavigator(): void,
  _renderRowCheckbox(): void,

  destroy(): void,
}