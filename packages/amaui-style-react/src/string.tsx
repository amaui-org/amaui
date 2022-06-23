import React from 'react';

import { IResponse, IMethodResponse, style, names } from '@amaui/style';

import { useAmauiStyle, useAmauiTheme } from '.';

// May be TValue or a string  as a string value literal
export default function string(value_: TemplateStringsArray, ...args: any[]): string {
  const [response, setResponse] = React.useState() as [IMethodResponse, any];
  const [values, setValues] = React.useState({
    classes: {},
    classNames: {},
    keyframes: {},
    styles: () => { },
  } as IResponse);

  const amauiStyle = useAmauiStyle();
  const amauiTheme = useAmauiTheme();

  const method = () => value_.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

  const value = {
    a: method(),
  };

  let values_ = values;

  // Init only once
  // it has to be in body of method
  // as for ssr it actually calls the method
  // and it doesn't use hooks on ssr
  if (response === undefined) {
    const options = {
      amaui_style: { value: undefined },
      amaui_theme: { value: undefined },
    };

    // AmauiStyle
    if (amauiStyle !== undefined) options.amaui_style.value = amauiStyle;

    // AmauiTheme
    if (amauiTheme !== undefined) options.amaui_theme.value = amauiTheme;

    const response_ = style(value, options);

    setResponse(response_);

    // Update values for ssr as a priorty
    values_ = names(response_.amaui_style_sheet_manager.names);

    setValues(values_);
  }

  React.useEffect(() => {
    // Add
    const addValues = response.add();

    setValues(addValues);

    // Clean up
    return () => {
      // Remove
      response.remove(addValues.ids?.dynamic);
    };
  }, []);

  // Update
  // if values update based on
  // ui props or useAmauiTheme update
  React.useEffect(() => {
    if (response?.update !== undefined) response.update(value);
  }, [value.a]);

  return (values_.class || '') as string;
}
