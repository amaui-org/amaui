import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';

import { IMethodResponse, IResponse, style as amauiStyleMethod, AmauiTheme, TValueObjectValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from './';

export type TValueObject = Record<string, TValueObjectValue>;

type RecursiveRequired<T> = {
  [P in keyof T]-?: T[P] extends Function ? T[P] : RecursiveRequired<T[P]>;
};

export type AmauiThemeRequired = RecursiveRequired<AmauiTheme>;

export type TValueMethod = (theme: AmauiThemeRequired) => TValueObject;

export type TValue = TValueObject | TValueMethod;

export interface IResponseStyle extends IMethodResponse {
  amauiTheme?: AmauiTheme;
}

export const propsAreNew = (props) => props && Object.keys(props).reduce((result, item) => result += item + String(props[item]), '');

export default function style(value: TValue, options_: IOptions = {}, responses_?: Array<IResponseStyle>) {
  const responses: Array<IResponseStyle> = responses_ || [];

  const { name } = options_;

  function useStyle(props_?: any) {
    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

    const refs = {
      update: React.useRef<any>()
    };

    const resolve = (theme: any = amauiTheme) => {
      let valueNew: any = value;

      if (is('function', value)) valueNew = (value as TValueMethod)(theme);

      // Add style add & overrides
      if (amauiTheme.ui?.elements?.[name]?.style) {
        const { add, override } = amauiTheme.ui.elements[name].style;

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
        const valueNew: any = resolve(updatedTheme);

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

      response_ = amauiStyleMethod(resolve(), merge(options, options_, { copy: true }));

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
          const index = responses.findIndex(item => item.amauiTheme.id === amauiTheme.id);

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

  return useStyle;
}
