import { useState, useEffect } from 'react';

import { merge } from '@amaui/utils';

import { inline as amauiInlineMethod, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/inline';

import { useAmauiStyle, useAmauiTheme } from '.';

export default function inline(value_: TValue, options_: IOptions = {}) {
  const [value, setValue] = useState('');

  const amauiStyle = useAmauiStyle();
  const amauiTheme = useAmauiTheme();

  useEffect(() => {
    const options = merge(options_, { amaui_style: { value: amauiStyle }, amaui_theme: { value: amauiTheme } }, { copy: true });

    const valueNew = amauiInlineMethod(value_, options);

    setValue(valueNew);
  }, [value_]);

  return value;
}
