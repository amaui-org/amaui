import React from 'react';

import is from '@amaui/utils/is';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject, prefix } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

function makeAmauiStyle(element?: Element) {
  const amauiStyle = new AmauiStyle({
    element
  });

  // Add all the plugins
  amauiStyle.plugins.add = [
    unit,
    makeClassName,
    prefix,
    sort,
    rtl,
    valueObject
  ];

  return amauiStyle;
}

export interface IAmauiStyleProvider extends AmauiStyle {
  updateWithRerender?: (value: any) => AmauiStyle;
}

const AmauiStyleProvider = React.forwardRef((props: any, ref: any) => {
  const {
    root = false,

    value: value_,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof AmauiStyle)) return makeAmauiStyle();

    return value_ as AmauiStyle;
  });

  React.useEffect(() => {
    if (refs.root.current) {
      value.element = refs.root.current;

      // Init
      value.init();

      const valueNew = new AmauiStyle();

      // Copy over from value
      Object.keys(value).forEach((prop: any) => valueNew[prop] = value[prop]);

      setValue(valueNew);
    }
  }, []);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      const valueNew = new AmauiStyle();

      Object.keys(value).forEach((prop: any) => valueNew[prop] = value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach((prop: any) => valueNew[prop] = updateValue[prop]);

      setValue(valueNew);

      return valueNew;
    }
  };

  // Update method
  value.updateWithRerender = update;

  if (root) return (
    <AmauiStyleContext.Provider
      value={value}
    >
      <div
        ref={(item: any) => {
          refs.root.current = item;

          if (ref?.current) ref.current = item;
        }}

        {...other}
      >
        {children}
      </div>
    </AmauiStyleContext.Provider>
  );

  return (
    <AmauiStyleContext.Provider
      value={value}
    >
      {children}
    </AmauiStyleContext.Provider>
  );
});

export default AmauiStyleProvider;
