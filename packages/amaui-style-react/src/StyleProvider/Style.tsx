import React from 'react';

import is from '@amaui/utils/is';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject, prefix } from '@amaui/style';

import StyleContext from './Context';

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

export interface IStyle extends AmauiStyle {
  updateWithRerender?: (value: any) => AmauiStyle;
}

const Style: React.FC<IStyle> = React.forwardRef((props, ref: any) => {
  const {
    root = false,

    remove,

    value: value_,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof AmauiStyle)) return makeAmauiStyle();

    (value_ as AmauiStyle).remove = remove;

    return (value_ as AmauiStyle);
  });

  React.useEffect(() => {
    if (refs.root.current) {
      value.element = refs.root.current;

      value.remove = remove;

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

      valueNew.remove = remove;

      Object.keys(value).forEach((prop: any) => valueNew[prop] = value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach((prop: any) => valueNew[prop] = updateValue[prop]);

      setValue(valueNew);

      return valueNew;
    }
  };

  // Update method
  value.updateWithRerender = update;

  if (root) return (
    <StyleContext.Provider
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
    </StyleContext.Provider>
  );

  return (
    <StyleContext.Provider
      value={value}
    >
      {children}
    </StyleContext.Provider>
  );
});

export default Style;
