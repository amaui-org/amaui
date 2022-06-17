import React from 'react';

import { hash, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal } = props;

  const ref = React.useRef();

  const valueParentTheme = (useAmauiTheme() || [])[0];

  const valueParent = React.useMemo(() => {
    return valueParentTheme || new AmauiTheme();
  }, [valueParentTheme?.hash]);

  const [value, setValue] = React.useState(new AmauiTheme(merge(valueLocal, { ...valueParent }, { copy: true })));

  React.useEffect(() => {
    if (ref.current) setValue(new AmauiTheme(value, ref.current));
  }, []);

  React.useEffect(() => {
    // Update
    value.update(merge(valueLocal, { ...valueParent }, { copy: true }));

    setValue(value);
  }, [hash(valueLocal), hash(valueParent)]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      // Update the state with updated instance
      setValue(value);

      return value;
    }
  };

  return (
    <AmauiThemeContext.Provider
      value={[value, update]}

      ref={ref}
    >
      {children}
    </AmauiThemeContext.Provider>
  );
}
