import React from 'react';

import is from '@amaui/utils/is';
import hash from '@amaui/utils/hash';
import merge from '@amaui/utils/merge';

import { IMethodResponse, IResponse, pure as amauiPureMethod, TValue, TValueMethod, names } from '@amaui/style';
import { IOptions } from '@amaui/style/pure';

import { useAmauiStyle, useAmauiTheme } from '.';

export default function pure(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;
  let values_: IResponse = {};

  function usePure(props?: any) {
    const amauiStyle = useAmauiStyle();
    const amauiTheme = useAmauiTheme();

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

        response = amauiPureMethod(value, merge(options, options_, { copy: true }));

        // Update values for ssr as a priorty
        values_ = names(response.amaui_style_sheet_manager.names);
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
      // Weird fix in react, for create react app fast refresh new engine
      makeResponse();

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

    // Weird fix in react, for create react app fast refresh new engine
    React.useEffect(() => {
      const status = response?.amaui_style_sheet_manager?.status;

      if (status !== 'active') {
        values_ = response.add(props);

        setValues(values_);
      }
    });

    // Weird fix in react, for create react app fast refresh new engine
    React.useEffect(() => {
      if (values_?.class !== values.class) setValues(values_);
    }, [values_?.class]);

    // Update props
    React.useEffect(() => {
      if (response !== undefined && values.ids) response.props = { ids: values.ids.dynamic, props };
    }, [hash(props)]);

    return values;
  }

  return usePure;
}
