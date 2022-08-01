import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';

import { IResponse, pure as amauiPureMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/pure';

import { useAmauiStyle, useAmauiTheme } from '.';
import { IResponseStyle, propsAreNew } from './style';

export default function pure(value: TValue, options_: IOptions = {}) {
  const responses: Array<IResponseStyle> = [];

  const { name } = options_;

  function usePure(props_?: any) {
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
      // Object
      let response_ = is('object', value) && responses[0];

      if (response_) return response_;

      // Method
      // If it's a new instance of amauiTheme
      // make a new responses with it
      response_ = responses.find(item => item.amauiTheme.id === amauiTheme.id);

      if (response_) return response_;

      // If there's not add a new response and use it
      const options = {
        amaui_style: { value: undefined },
        amaui_theme: { value: undefined },
      };

      // AmauiStyle
      if (amauiStyle !== undefined) options.amaui_style.value = amauiStyle;

      // AmauiTheme
      if (amauiTheme !== undefined) options.amaui_theme.value = amauiTheme;

      response_ = amauiPureMethod(resolve(), merge(options, options_, { copy: true }));

      // Add the amauiTheme to the response_
      response_.amauiTheme = amauiTheme;

      // Add value to the responses
      responses.push(response_);

      // Update
      if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

      return response_;
    };

    const response = React.useState<IResponseStyle>(makeResponse())[0];

    let props = props_;

    if (is('object', props)) {
      const newProps = {};

      const allowed = Object.keys(props).filter(prop => is('array', props[prop]) ? !(props[prop].some(item => React.isValidElement(item))) : !React.isValidElement(props[prop]));

      allowed.forEach(prop => newProps[prop] = props[prop]);

      props = newProps;
    }

    const values = React.useState<IResponse>(() => response.add(props))[0];

    // Add
    React.useEffect(() => {

      // Clean up
      return () => {
        // Unsubscribe
        if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

        // Remove
        response?.remove(values?.ids?.dynamic);

        // Remove response from the responses
        // if users is 0 in amauiStyleSheetManager
        if (!response?.amaui_style_sheet_manager?.users) {
          const index = responses.findIndex(item => item.amauiTheme.id === amauiTheme.id);

          if (index > -1) responses.splice(index, 1);
        }
      };
    }, []);

    // Update props
    React.useEffect(() => {
      if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props };
      // Only 1 lvl of values
    }, [propsAreNew(props)]);

    return values;
  }

  return usePure;
}
