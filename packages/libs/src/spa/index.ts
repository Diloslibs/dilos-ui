import { ISpaCollectionItem } from './interface';

import Accordion from '@/components/accordion';
import Dropdown from '@/components/dropdown';
import Tooltip from '@/components/tooltip';

export const COLLECTIONS: ISpaCollectionItem[] = [
  { key: 'accordion', fn: Accordion },
  { key: 'dropdown', fn: Dropdown },
  { key: 'tooltip', fn: Tooltip },
];
