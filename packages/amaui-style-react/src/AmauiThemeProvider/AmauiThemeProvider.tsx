import React from 'react';

import hash from '@amaui/utils/hash';
import copy from '@amaui/utils/copy';
import merge from '@amaui/utils/merge';
import { AmauiTheme } from '@amaui/style';
import { IAmauiTheme } from '@amaui/style/amaui-theme';

import AmauiThemeContext from './AmauiThemeContext';
import useAmauiTheme from './useAmauiTheme';

export interface IAmauiThemeProvider extends AmauiTheme {
  updateWithRerender: (value: any) => AmauiTheme;
}

const resolveValue = (value: IAmauiTheme) => {
  const toFilterOut = ['id', 'element', 'subscriptions'];

  const valueNew = {};

  Object.keys(value).filter(item => toFilterOut.indexOf(item) === -1).forEach(item => valueNew[item] = value[item]);

  return valueNew;
};

interface IProps {
  value?: IAmauiTheme;

  children?: any;
}

const AmauiThemeProvider = React.forwardRef((props: IProps, ref: any) => {
  const { children, value: valueLocal = {}, ...other } = props;

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const valueParent = useAmauiTheme() as any || {};

  const [value, setValue] = React.useState<IAmauiThemeProvider>(() => new AmauiTheme(merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true })) as any);

  React.useEffect(() => {
    if (refs.root.current) {
      const amauiTheme = new AmauiTheme(value, refs.root.current) as any;

      amauiTheme.id = value.id;
      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);
    }
  }, []);

  React.useEffect(() => {
    value.update(merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true }));

    const amauiTheme = new AmauiTheme(value, refs.root?.current) as any;

    amauiTheme.id = value.id;
    amauiTheme.subscriptions = value.subscriptions;

    // Init
    setValue(amauiTheme);
  }, [hash(resolveValue(valueLocal)), hash(resolveValue(valueParent))]);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      const amauiTheme = new AmauiTheme(value, refs.root?.current) as any;

      amauiTheme.id = value.id;
      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);

      return value;
    }
  };

  // Update method
  value.updateWithRerender = update;

  return (
    <AmauiThemeContext.Provider value={value}>
      <div
        ref={item => {
          refs.root.current = item;

          if (ref?.current) ref.current = item;
        }}

        {...other}
      >
        {children}
      </div>
    </AmauiThemeContext.Provider>
  );
});

export default AmauiThemeProvider;
