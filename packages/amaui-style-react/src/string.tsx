import React from 'react';

import { hash, castParam } from '@amaui/utils';

import style from './style';

// May be TValue or a string  as a string value literal
const responses = {};

export default function string(value_: TemplateStringsArray, ...args: any[]): string {
  const valueString = value_.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

  const valueStringMethod = () => {
    const rule = {};

    valueString.trim().split('\n').filter(Boolean).map(item => item.trim()).forEach(item => {
      if (item) {
        const items = item.split(':');

        let value__ = items[1];

        const property = items[0];

        value__ = value__ && value__.trim().replace(';', '');

        if (property && value__) rule[property] = castParam(value__, { decode: false });
      }
    });

    return rule;
  };

  const value = {
    a: valueStringMethod()
  };

  const name = React.useMemo(() => hash(value.a), [value_]);

  if (!responses[name]) responses[name] = [];

  const useStyle = React.useState(() => style(value as any, { name }, responses[name]))[0];

  const values = useStyle();

  // Update on value update
  React.useEffect(() => {
    const response = responses[name][0];

    if (response) response.update(value);
  }, [valueString]);

  return (values.class || '') as string;
}
