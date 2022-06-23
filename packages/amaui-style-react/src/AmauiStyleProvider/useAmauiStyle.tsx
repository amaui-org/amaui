import React from 'react';

import { IAmauiStyleProvider } from './AmauiStyleProvider';
import AmauiStyleContext from './AmauiStyleContext';

export default function useAmauiStyle(): IAmauiStyleProvider {
  const value = React.useContext(AmauiStyleContext) as any;

  return value;
}
