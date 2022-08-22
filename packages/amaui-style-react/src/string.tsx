import React from 'react';

import { hash } from '@amaui/utils';

import style from './style';

// May be TValue or a string  as a string value literal
const responses = {};

export default function string(value_: TemplateStringsArray, ...args: any[]): string {
  const method = () => value_.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

  const value = {
    a: method(),
  };

  const name = React.useState(() => hash(value.a))[0];

  if (!responses[hash(value.a)]) responses[hash(value.a)] = [];

  const useStyle = React.useState(() => style(value_ as any, { name }, responses[name]))[0];

  const values = useStyle();

  return (values.class || '') as string;
}
