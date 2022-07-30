import React from 'react';

import { IResponse, IMethodResponse, style } from '@amaui/style';

import { useAmauiStyle, useAmauiTheme } from '.';

// May be TValue or a string  as a string value literal
export default function string(value_: TemplateStringsArray, ...args: any[]): string {
  const method = () => value_.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

  const value = {
    a: method(),
  };

  const amauiStyle = useAmauiStyle();
  const amauiTheme = useAmauiTheme();

  const makeResponse = () => {
    // If there's not add a new response and use it
    const options = {
      amaui_style: { value: undefined },
      amaui_theme: { value: undefined },
    };

    // AmauiStyle
    if (amauiStyle !== undefined) options.amaui_style.value = amauiStyle;

    // AmauiTheme
    if (amauiTheme !== undefined) options.amaui_theme.value = amauiTheme;

    const response_ = style(value, options);

    // Update
    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    return response_;
  };

  const response = React.useState<IMethodResponse>(makeResponse())[0];

  const values = React.useState<IResponse>(() => response.add())[0];

  React.useEffect(() => {

    // Clean up
    return () => {
      // Remove
      response?.remove(values?.ids?.dynamic);
    };
  }, []);

  // Update
  // if values update based on
  // ui props or useAmauiTheme update
  React.useEffect(() => {
    if (response?.update !== undefined) response.update(value);
  }, [value.a]);

  return (values.class || '') as string;
}
