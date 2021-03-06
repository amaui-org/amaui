import React from 'react';

import is from '@amaui/utils/is';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

function makeAmauiStyle(element?: Element) {
  const amauiStyle = new AmauiStyle(element);

  // Add all the plugins
  amauiStyle.plugins.add = [
    unit,
    makeClassName,
    rtl,
    sort,
    valueObject
  ];

  return amauiStyle;
}

export interface IAmauiStyleProvider extends AmauiStyle {
  updateWithRerender?: (value: any) => AmauiStyle;
}

const AmauiStyleProvider = React.forwardRef((props: any, ref: any) => {
  const { children, value: value_, ...other } = props;

  const refs = {
    root: React.useRef<HTMLElement>()
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
      Object.keys(value).forEach(prop => valueNew[prop] = value[prop]);

      setValue(valueNew);
    }
  }, []);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      const valueNew = new AmauiStyle();

      Object.keys(value).forEach(prop => valueNew[prop] = value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach(prop => valueNew[prop] = updateValue[prop]);

      setValue(valueNew);

      return valueNew;
    }
  };

  // Update method
  value.updateWithRerender = update;

  return (
    <AmauiStyleContext.Provider value={value}>
      <div
        ref={item => {
          refs.root.current = item;

          if (ref?.current) ref.current = item;
        }}

        {...other}
      >
        {children}
      </div>
    </AmauiStyleContext.Provider>
  );
});

export default AmauiStyleProvider;
