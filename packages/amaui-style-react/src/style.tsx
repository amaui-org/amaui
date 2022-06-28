import React from 'react';

import { merge, hash, is } from '@amaui/utils';

import { IMethodResponse, IResponse, style as amauiStyleMethod, TValue, TValueMethod, names } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle, useAmauiTheme } from './';

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;
  let values_: IResponse = {};

  function useStyle(props?: any) {
    const [values, setValues] = React.useState(values_);

    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

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

      if (response === undefined) response = amauiStyleMethod(value, merge(options, options_, { copy: true }));

      // Update values for ssr as a priorty
      values_ = names(response.amaui_style_sheet_manager.names);

      setValues(values_);
    }

    // Add
    React.useEffect(() => {
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
      if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props };
    }, [hash(props)]);

    return values;
  }

  return useStyle;
}
