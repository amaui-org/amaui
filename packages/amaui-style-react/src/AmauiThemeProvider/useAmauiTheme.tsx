import React from 'react';

import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';

export default function useAmauiTheme(): [AmauiTheme?, ((amauiTheme: AmauiTheme, override: boolean) => AmauiTheme)?] {
  const value = React.useContext(AmauiThemeContext) as any;

  return value;
}
