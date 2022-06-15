import { useState, useEffect } from 'react';

import { merge, hash, is } from '@amaui/utils';

import { IMethodResponse, IResponse, pure as amauiPureMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/pure';

import { useAmauiStyle, useAmauiTheme } from '.';

export default function pure(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;

  function useStyle(props?: any) {
    const [values, setValues] = useState({
      classes: {},
      classNames: {},
      keyframes: {},
      styles: () => { },
    } as IResponse);

    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

    useEffect(() => {
      // Init only once
      const options = {
        amaui_style: { value: undefined },
        amaui_theme: { value: undefined },
      };

      // AmauiStyle
      if (amauiStyle === undefined) options.amaui_style.value = amauiStyle;

      // AmauiTheme
      if (amauiTheme === undefined) options.amaui_theme.value = amauiTheme;

      if (response === undefined) response = amauiPureMethod(value, merge(options, options_, { copy: true }));

      // Add
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
    useEffect(() => {
      if (response.props !== undefined) response.props = props;
    }, [hash(props)]);

    return values;
  }

  return useStyle;
}
