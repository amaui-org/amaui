import React from 'react';

import { merge, copy, hash } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export interface IAmauiThemeProvider extends AmauiTheme {
  updateWithRerender?: (value: any) => AmauiTheme;
}

const resolveValue = (value: AmauiTheme) => {
  const toFilterOut = ['id', 'element'];

  const valueNew = {};

  Object.keys(value).filter(item => toFilterOut.indexOf(item) === -1).forEach(item => valueNew[item] = value[item]);

  return valueNew;
};

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal = {}, ...other } = props;

  const ref = React.useRef();

  const valueParent = useAmauiTheme() as any || {};

  const [value, setValue] = React.useState<IAmauiThemeProvider>(() => new AmauiTheme(merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true })));

  React.useEffect(() => {
    if (ref.current) {
      const amauiTheme = new AmauiTheme(value, ref.current);

      amauiTheme.id = value.id;

      // Init
      setValue(amauiTheme);
    }
  }, []);

  React.useEffect(() => {
    value.update(merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true }));

    const amauiTheme = new AmauiTheme(value, ref.current);

    amauiTheme.id = value.id;

    // Init
    setValue(amauiTheme);
  }, [hash(resolveValue(valueLocal)), hash(resolveValue(valueParent))]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      const amauiTheme = new AmauiTheme(value, ref.current);

      amauiTheme.id = value.id;

      // Init
      setValue(amauiTheme);

      return value;
    }
  };

  // Update method
  value.updateWithRerender = update;

  return (
    <AmauiThemeContext.Provider value={value}>
      <div ref={ref} {...other}>
        {children}
      </div>
    </AmauiThemeContext.Provider>
  );
}
