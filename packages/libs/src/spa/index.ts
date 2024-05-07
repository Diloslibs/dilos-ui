import { ISpaCollectionItem } from './interface';

import Accordion from '../components/accordion';
import Dropdown from '../components/dropdown';

export const COLLECTIONS: ISpaCollectionItem[] = [
  { key: 'accordion', fn: Accordion },
  { key: 'dropdown', fn: Dropdown}
];
