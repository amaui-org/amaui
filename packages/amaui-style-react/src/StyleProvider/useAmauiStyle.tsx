import React from 'react';

import { IStyle } from './Style';
import AmauiStyleContext from './StyleContext';

export default function useAmauiStyle(): IStyle {
  const value = React.useContext(AmauiStyleContext) as any;

  return value;
}
