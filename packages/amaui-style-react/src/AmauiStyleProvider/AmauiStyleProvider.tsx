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

  let value: AmauiStyle = value_;

  if (value_ === undefined || !(value_ instanceof AmauiStyle)) value = makeAmauiStyle();

  return (
    <AmauiStyleContext.Provider
      value={value}
    >
      {children}
    </AmauiStyleContext.Provider>
  );
}
