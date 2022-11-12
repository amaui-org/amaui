import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';

import { IResponse, reset as amauiResetMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/reset';

import { useAmauiStyle, useAmauiTheme } from '.';
import { IResponseStyle, propsAreNew, TValue } from './style';

export default function reset(value: TValue = {}, options_: IOptions = {}) {
  const responses: Array<IResponseStyle> = [];

  const { name } = options_;

  function useReset(props_?: any) {
    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

    const refs = {
      update: React.useRef<any>()
    };

    const resolve = (theme = amauiTheme) => {
      let valueNew = value;

      if (is('function', value)) valueNew = (value as any)(theme);

      // Add style add & overrides
      if (amauiTheme.ui?.elements?.[name as any]?.style) {
        const { add, override } = amauiTheme.ui.elements[name as any].style;

        // Add
        if (add) {
          const object = is('function', add) ? (add as any)(theme) : add;

          valueNew = merge(object, valueNew, { copy: true });
        }

        // Override
        if (override) {
          const object = is('function', override) ? (override as any)(theme) : override;

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
      let response_: any = is('object', value) && responses[0];

      if (response_) return response_;

      // Method
      // If it's a new instance of amauiTheme
      // make a new responses with it
      response_ = responses.find((item: any) => item.amauiTheme.id === amauiTheme.id);

      if (response_) return response_;

      // If there's not add a new response and use it
      const options: any = {
        amaui_style: { value: undefined },
        amaui_theme: { value: undefined },
      };

      // AmauiStyle
      if (amauiStyle !== undefined) options.amaui_style.value = amauiStyle;

      // AmauiTheme
      if (amauiTheme !== undefined) options.amaui_theme.value = amauiTheme;

      response_ = amauiResetMethod(resolve() as any, merge(options, options_, { copy: true }));

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
      const newProps: any = {};

      const allowed = Object.keys(props).filter((prop: any) => is('array', props[prop]) ? !(props[prop].some((item: any) => React.isValidElement(item))) : !React.isValidElement(props[prop]));

      allowed.forEach((prop: any) => newProps[prop] = props[prop]);

      props = newProps;
    }

    const [values, setValues] = React.useState<IResponse>(() => response.add(props));

    // Add
    React.useEffect(() => {
      if (!values || ['refresh'].includes(refs.update.current)) setValues(() => {
        refs.update.current = undefined;

        return response.add(props);
      });

      // Clean up
      return () => {
        // Remove
        response?.remove(values?.ids?.dynamic);

        // Refresh
        refs.update.current = 'refresh';

        // Remove response from the responses
        // if users is 0 in amauiStyleSheetManager
        if (!response?.amaui_style_sheet_manager?.users) {
          const index = responses.findIndex((item: any) => item.amauiTheme.id === amauiTheme.id);

          if (index > -1) {
            responses.splice(index, 1);

            // Unsubscribe
            if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);
          }
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

  return useReset;
}
