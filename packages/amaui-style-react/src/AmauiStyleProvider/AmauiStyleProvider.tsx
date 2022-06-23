import React from 'react';

import { is } from '@amaui/utils';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

function makeAmauiStyle(element?: Element) {
  const amauiStyle = new AmauiStyle(element);

  // Add all the plugins
  amauiStyle.plugins.add = [
    makeClassName,
    unit,
    rtl,
    sort,
    valueObject
  ];

  return amauiStyle;
}

export interface IAmauiStyleProvider extends AmauiStyle {
  updateWithRerender?: (value: any) => AmauiStyle;
}

export default function AmauiStyleProvider(props) {
  const { children, value: value_, ...other } = props;

  const ref = React.useRef();

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof AmauiStyle)) return makeAmauiStyle();

    return value_ as AmauiStyle;
  });

  React.useEffect(() => {
    if (ref.current) {
      value.element = ref.current;

      // Init
      value.init();

      const valueNew = new AmauiStyle();

      is('object', value) && Object.keys(value).forEach(prop => valueNew[prop] = value[prop]);

      setValue(valueNew);
    }
  }, []);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      const valueNew = new AmauiStyle();

      is('object', value) && Object.keys(value).forEach(prop => valueNew[prop] = value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach(prop => valueNew[prop] = updateValue[prop]);

      setValue(valueNew);

      return valueNew;
    }
  };

  // Update method
  value.updateWithRerender = update;

  return (
    <AmauiStyleContext.Provider value={value}>
      <div ref={ref} {...other}>
        {children}
      </div>
    </AmauiStyleContext.Provider>
  );
}
