import React from 'react';

import { hash, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal, ...other } = props;

  const ref = React.useRef();

  const valueParentTheme = (useAmauiTheme() || [])[0];

  const valueParent = React.useMemo(() => {
    return valueParentTheme || {};
  }, [(valueParentTheme as AmauiTheme)?.hash]);

  const [value] = React.useState(new AmauiTheme(merge({ ...valueLocal }, { ...valueParent }, { copy: true })));
  const setId = React.useState(undefined)[1];

  React.useEffect(() => {
    if (ref.current) {
      value.element = ref.current;

      // Init
      value.init();

      setId(hash(value));
    }
  }, []);

  React.useEffect(() => {
    // Update
    value.update(merge({ ...valueLocal }, { ...valueParent }, { copy: true }));

    setId(hash(value));
  }, [hash(valueLocal), hash(valueParent)]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      setId(hash(value));

      return value;
    }
  };

  return (
    <AmauiThemeContext.Provider value={[value, update]}>
      <div ref={ref} {...other}>
        {children}
      </div>
    </AmauiThemeContext.Provider>
  );
}
