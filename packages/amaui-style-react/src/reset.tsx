import React from 'react';

import { merge, hash, is } from '@amaui/utils';

import { IMethodResponse, IResponse, reset as amauiResetMethod, TValue, TValueMethod, names } from '@amaui/style';
import { IOptions } from '@amaui/style/reset';

import { useAmauiStyle, useAmauiTheme } from '.';

export default function reset(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;

  function useStyle(props?: any) {
    const [values, setValues] = React.useState({
      classes: {},
      classNames: {},
      keyframes: {},
      styles: () => { },
    } as IResponse);

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

      if (response === undefined) response = amauiResetMethod(value, merge(options, options_, { copy: true }));

      // Update values for ssr as a priorty
      setValues(names(response.amaui_style_sheet_manager.names));
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
          if (response.update !== undefined) response.update(valueNew);
        }
      };

      if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

      // Clean up
      return () => {
        // Unsubscribe
        amauiTheme.subscriptions.update.unsubscribe(method);

        // Remove
        response.remove(addValues.ids?.dynamic);
      };
    }, []);

    // Update props
    React.useEffect(() => {
      if (response.props !== undefined) response.props = props;
    }, [hash(props)]);

    return values;
  }

  return useStyle;
}
