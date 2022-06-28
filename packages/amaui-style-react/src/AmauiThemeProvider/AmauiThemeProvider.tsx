import React from 'react';

import { merge, copy, hash } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export interface IAmauiThemeProvider extends AmauiTheme {
  updateWithRerender?: (value: any) => AmauiTheme;
}

export default function AmauiThemeProvider(props) {
  const { children, value: valueLocal = {}, ...other } = props;

  const ref = React.useRef();

  const valueParent = useAmauiTheme() as any || {};

  const [value, setValue] = React.useState<IAmauiThemeProvider>(() => new AmauiTheme(merge({ ...copy(valueLocal) }, { ...valueParent }, { copy: true })));
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) {
      value.element = ref.current;

      // Init
      setValue(new AmauiTheme(value));
    }
  }, []);

  React.useEffect(() => {
    if (init) {
      value.update(merge({ ...copy(valueLocal) }, { ...valueParent }, { copy: true }));

      // Init
      setValue(new AmauiTheme(value));
    }
    else setInit(true);
  }, [hash(valueLocal), hash(valueParent)]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      setValue(new AmauiTheme(value));

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
