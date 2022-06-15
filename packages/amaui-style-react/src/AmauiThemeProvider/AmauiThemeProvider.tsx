import { useMemo } from 'react';

import { merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal } = props;

  const valueParent = useAmauiTheme() || new AmauiTheme();

  const value = useMemo(() => {
    const valueNew = merge(valueLocal, valueParent);

    return new AmauiTheme(valueNew);
  }, [valueLocal, valueParent]);

  return (
    <AmauiThemeContext.Provider
      value={value}
    >
      {children}
    </AmauiThemeContext.Provider>
  );
}
