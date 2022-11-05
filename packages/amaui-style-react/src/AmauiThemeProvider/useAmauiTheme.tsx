import React from 'react';

import { IAmauiThemeProviderValue } from './AmauiThemeProvider';
import AmauiThemeContext from './AmauiThemeContext';

export default function useAmauiTheme(): IAmauiThemeProviderValue {
  const value = React.useContext(AmauiThemeContext) as IAmauiThemeProviderValue;

  return value;
}
