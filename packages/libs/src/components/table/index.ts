import { ITable } from "./interface";

class Table implements ITable {
  _checkBoxEl: HTMLInputElement;

  constructor() {
    this.toggleCheckboxRow();
  }

  init(): void {
    this.toggleCheckboxRow();
  }

  reinit(): void {
    this.toggleCheckboxRow();
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
};

export function initTable() {
  new Table();
}

if (typeof window !== 'undefined') {
  initTable();
}

export default Table;