import React from 'react';

import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';

export default function useAmauiTheme(): AmauiTheme {
  const value = React.useContext(AmauiThemeContext) as AmauiTheme;

  return value;
}
