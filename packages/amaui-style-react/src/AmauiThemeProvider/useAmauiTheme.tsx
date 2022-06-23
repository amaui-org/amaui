import React from 'react';

import { IAmauiThemeProvider } from './AmauiThemeProvider';
import AmauiThemeContext from './AmauiThemeContext';

export default function useAmauiTheme(): IAmauiThemeProvider {
  const value = React.useContext(AmauiThemeContext) as any;

  return value;
}
