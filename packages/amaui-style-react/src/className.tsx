import React from 'react';

import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import style from './style';

// May be TValue or a string  as a string value literal
const responses = {};

export default function className(value_: string | TValue, props_: any = {}, className_: string = '', options_: IOptions = {}): string {
  if (!responses[options_.name]) responses[options_.name] = [];

  const useStyle = React.useState(() => style(value_ as any, options_, responses[options_.name]))[0];

  const values = useStyle(props_);

  return ((values.class && classNames([className_, values.class])) || '');
}
