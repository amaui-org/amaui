import React from 'react';

import is from '@amaui/utils/is';
import hash from '@amaui/utils/hash';
import merge from '@amaui/utils/merge';

import { IMethodResponse, IResponse, style as amauiStyleMethod, TValue, TValueMethod, AmauiTheme } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from './';

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;

  function useStyle(props_?: any) {
    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

    // Updates for amauiTheme
    const method = (updateValue: any, updatedTheme: AmauiTheme) => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(updatedTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    };

    if (response === undefined) {
      const options = {
        amaui_style: { value: undefined },
        amaui_theme: { value: undefined },
      };

      // AmauiStyle
      if (amauiStyle !== undefined) options.amaui_style.value = amauiStyle;

      // AmauiTheme
      if (amauiTheme !== undefined) options.amaui_theme.value = amauiTheme;

      response = amauiStyleMethod(value, merge(options, options_, { copy: true }));

      // Update
      if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);
    }

    let props = props_;

    if (is('object', props)) {
      const newProps = {};

      const allowed = Object.keys(props).filter(prop => is('array', props[prop]) ? !(props[prop].some(item => React.isValidElement(item))) : !React.isValidElement(props[prop]));

      allowed.forEach(prop => newProps[prop] = props[prop]);

      props = newProps;
    }

    const values = React.useRef<IResponse>(response.add(props));

    // Add
    React.useEffect(() => {
      // Clean up
      return () => {
        // Unsubscribe
        if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

        // Remove
        response?.remove(values.current.ids?.dynamic);
      };
    }, []);

    // Update props
    React.useEffect(() => {
      if (response !== undefined && values.current?.ids) response.props = { ids: values.current.ids.dynamic, props };
    }, [hash(props)]);

    return values.current;
  }

  return useStyle;
}
