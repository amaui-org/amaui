import React from 'react';

import { IThemeValue } from './Theme';
import ThemeContext from './ThemeContext';

export default function useAmauiTheme(): IThemeValue {
  const value = React.useContext(ThemeContext) as IThemeValue;

  return value;
}
