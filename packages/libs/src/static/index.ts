/*
 * HSStaticMethods
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */

import { COLLECTIONS } from '../spa';
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
