import { IAccordion } from './interface';

class Accordion implements IAccordion {

  constructor() {
    console.log('Accordion');
  }

  init() {
    console.log('Accordion init');
  }

  show() {
    console.log('Accordion show');
  }

  hide() {
    console.log('Accordion hide');
  }
}

export default Accordion;