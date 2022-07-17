import React from 'react';

import is from '@amaui/utils/is';
import hash from '@amaui/utils/hash';
import merge from '@amaui/utils/merge';

import { IMethodResponse, IResponse, style as amauiStyleMethod, TValue, TValueMethod, names, AmauiTheme } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from './';

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;
  let values_: IResponse = {} as any;

  function useStyle(props_?: any) {
    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

    let props = props_;

    if (is('object', props)) {
      const newProps = {};

      const allowed = Object.keys(props).filter(prop => is('array', props[prop]) ? !(props[prop].some(item => React.isValidElement(item))) : !React.isValidElement(props[prop]));

      allowed.forEach(prop => newProps[prop] = props[prop]);

      props = newProps;
    }

    // Updates for amauiTheme
    const method = (updateValue: any, updatedTheme: AmauiTheme) => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(updatedTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    };

    const makeResponse = () => {
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

        // Update values for ssr as a priorty
        values_ = names(response.amaui_style_sheet_manager.names);

        // Update
        if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);
      }
    };

    const [values, setValues] = React.useState<IResponse>(() => {
      // Init only once
      // it has to be in body of method
      // as for ssr it actually calls the method
      // and it doesn't use hooks on ssr
      makeResponse();

      return values_;
    });

    // Add
    React.useEffect(() => {
      const addValues = response.add(props);

      setValues(addValues);

      // Clean up
      return () => {
        // Unsubscribe
        if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

        // Remove
        response?.remove(addValues.ids?.dynamic);
      };
    }, []);

    // Update props
    React.useEffect(() => {
      if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props };
    }, [hash(props)]);

    return values;
  }

  return useStyle;
}
