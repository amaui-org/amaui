import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';
import { classNames, TValue, style, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from '.';
import { propsAreNew } from './style';

// May be TValue or a string  as a string value literal
export default function className(value_: string | TValue, props_: any = {}, className_: string = '', options_: IOptions = {}): string {
  const { name } = options_;

  let value: any = value_;

  if (is('string', value_)) value = { a: value_ };

  const amauiStyle = useAmauiStyle();
  const amauiTheme = useAmauiTheme();

  const resolve = (theme = amauiTheme) => {
    let valueNew = value;

    if (is('function', value)) valueNew = (value as TValueMethod)(theme);

    // Add style add & overrides
    if (amauiTheme.ui?.elements?.[name]?.style) {
      const { add, override } = amauiTheme.ui.elements[name].style;

      // Add
      if (add) {
        const object = is('function', add) ? (add as TValueMethod)(amauiTheme) : add;

        valueNew = merge(object, valueNew, { copy: true });
      }

      // Override
      if (override) {
        const object = is('function', override) ? (override as TValueMethod)(amauiTheme) : override;

        valueNew = {
          ...valueNew,
          ...object
        };
      }
    }

    return valueNew;
  };

  // Updates for amauiTheme
  const method = React.useCallback((updateValue: any, updatedTheme: any) => {
    if (is('function', value)) {
      const valueNew = resolve(updatedTheme);

      // Update
      if (response?.update !== undefined) response.update(valueNew);
    }
  }, []);

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

    const response = style(resolve(), merge(options, options_, { copy: true }));

    // Update
    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    return response;
  };

  const response = React.useState(makeResponse())[0];

  let props = props_;

  if (is('object', props)) {
    const newProps = {};

    const allowed = Object.keys(props).filter(prop => is('array', props[prop]) ? !(props[prop].some(item => React.isValidElement(item))) : !React.isValidElement(props[prop]));

    allowed.forEach(prop => newProps[prop] = props[prop]);

    props = newProps;
  }

  const values = React.useState(() => response.add(props))[0];

  // Add
  React.useEffect(() => {

    // Clean up
    return () => {
      // Unsubscribe
      if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response?.remove(values?.ids?.dynamic);
    };
  }, []);

  // Update props
  React.useEffect(() => {
    if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props };
    // Only 1 lvl of values
  }, [propsAreNew(props)]);

  return ((values.class && classNames([className_, values.class])) || '');
}
