import React from 'react';

import { hash, is, merge } from '@amaui/utils';
import { classNames, IResponse, TValue, IMethodResponse, style, names, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from '.';

// May be TValue or a string  as a string value literal
export default function className(value_: string | TValue, props: any = {}, className_: string = '', options_: IOptions = {}): string {
  const [response, setResponse] = React.useState() as [IMethodResponse, any];
  const [values, setValues] = React.useState({
    classes: {},
    classNames: {},
    keyframes: {},
    styles: () => { },
  } as IResponse);

  const [amauiStyle] = useAmauiStyle();
  const [amauiTheme] = useAmauiTheme();

  let value: any = value_;

  if (is('string', value_)) value = { a: value_ };

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

    const response_ = style(value, merge(options, options_, { copy: true }));

    setResponse(response_);

    // Update values for ssr as a priorty
    values_ = names(response_.amaui_style_sheet_manager.names);

    setValues(values_);
  }

  React.useEffect(() => {
    // Add
    const addValues = response.add(props);

    setValues(addValues);

    // Updates for amauiTheme
    const method = () => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(amauiTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    };

    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    // Clean up
    return () => {
      // Unsubscribe
      if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response.remove(addValues.ids?.dynamic);
    };
  }, []);

  // Update props
  React.useEffect(() => {
    if (response !== undefined && values.ids) response.props = { ids: values.ids.dynamic, props };
  }, [hash(props)]);

  return ((values_.class && classNames([className_, values_.class])) || '') as string;
}
