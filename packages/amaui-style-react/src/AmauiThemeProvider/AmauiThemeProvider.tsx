import React from 'react';

import { hash, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal } = props;

  const valueParentTheme = (useAmauiTheme() || [])[0];

  const valueParent = React.useMemo(() => {
    return valueParentTheme || new AmauiTheme();
  }, [valueParentTheme?.hash]);

  const [value, setValue] = React.useState(new AmauiTheme(merge(valueLocal, { ...valueParent }, { copy: true })));

  React.useEffect(() => {
    setValue(new AmauiTheme(merge(valueLocal, { ...valueParent }, { copy: true })));
  }, [hash(valueLocal), hash(valueParent)]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update the theme instance
      value.update(updateValue);

      // Update the state with updated instance
      setValue(value);

      return value;
    }
  };

  return (
    <AmauiThemeContext.Provider
      value={[value, update]}
    >
      {children}
    </AmauiThemeContext.Provider>
  );
}
