import { DTableOptions } from "./types";

export declare interface ITable {
  _checkParams(id: string, options: DTableOptions): void,

  init(): void,
  reinit(): void,
  render(): void,
  toggleCheckboxRow(): void,
}