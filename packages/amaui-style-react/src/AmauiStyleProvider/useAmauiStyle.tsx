import React from 'react';

import { AmauiStyle } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

export default function useAmauiStyle(): AmauiStyle {
  const value = React.useContext(AmauiStyleContext) as AmauiStyle;

  return value;
}
