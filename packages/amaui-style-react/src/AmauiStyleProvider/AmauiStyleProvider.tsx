import React from 'react';

import { merge } from '@amaui/utils';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

function makeAmauiStyle() {
  const amauiStyle = new AmauiStyle();

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

export default function AmauiStyleProvider(props) {
  const { children, value: value_ } = props;

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof AmauiStyle)) return makeAmauiStyle();

    return value_;
  });

  const update = (updateValue: any, override = false) => {
    if (updateValue !== undefined) {
      const valueNew = override ? updateValue : merge(updateValue, value);

      setValue(valueNew);

      return valueNew;
    }
  };

  return (
    <AmauiStyleContext.Provider
      value={[value, update]}
    >
      {children}
    </AmauiStyleContext.Provider>
  );
}
