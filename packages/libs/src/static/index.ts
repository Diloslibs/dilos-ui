/*
 * DStaticMethods
 * @version: 2.1.0
 * @author: Dilos
 * @license: -
 * Copyright 2024 Dilos
 */

import { COLLECTIONS } from '@/spa';
import { IStaticMethods } from './interface';

declare global {
  interface Window {
    DStaticMethods: IStaticMethods;
  }
}

const DStaticMethods: IStaticMethods = {
  // getClassProperty,
  // afterTransition,
  autoInit(collection: string | string[] = 'all') {
    if (collection === 'all') {
      COLLECTIONS.forEach(({ fn }) => {
        fn?.autoInit();
      });
    } else {
      COLLECTIONS.forEach(({ key, fn }) => {
        if (collection.includes(key)) fn?.autoInit();
      });
    }
  },
};

if (typeof window !== 'undefined') {
  window.DStaticMethods = DStaticMethods;
}

export default DStaticMethods;
