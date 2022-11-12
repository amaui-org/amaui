import React from 'react';

import { classNames } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import style, { TValue } from './style';

// May be TValue or a string  as a string value literal
const responses: any = {};

export default function className(value_: string | TValue, props_: any = {}, className_ = '', options_: IOptions = {}): string {
  if (!responses[options_.name as any]) responses[options_.name as any] = [];

  const useStyle = React.useState(() => style(value_ as any, options_, responses[options_.name as any]))[0];

  const values = useStyle(props_);

  return ((values.class && classNames([className_, values.class])) || '');
}
