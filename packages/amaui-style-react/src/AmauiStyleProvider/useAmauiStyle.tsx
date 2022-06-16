import React from 'react';

import { AmauiStyle } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

export default function useAmauiStyle(): [AmauiStyle?, ((amauiStyle: AmauiStyle, override: boolean) => AmauiStyle)?] {
  const value = React.useContext(AmauiStyleContext) as any;

  return value;
}
