import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';
import { IMethodResponse, IResponse, names, style as amauiStyleMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { useAmauiStyle } from './AmauiStyleProvider';
import { useAmauiTheme } from './AmauiThemeProvider';

export interface IStyleResponse {
  add?: () => IResponse;
  remove?: () => void;
  updateProps?: (props: any) => void;
}

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;
  let values_: IResponse = {};

  function useStyle(Element: HTMLElement, props?: any): IStyleResponse {
    let values: IResponse = values_;

    const amauiStyle = useAmauiStyle(Element);
    const amauiTheme = useAmauiTheme(Element);

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

      response = amauiStyleMethod(value, merge(options, options_, { copy: true }));

      // Update values for ssr as a priorty
      values_ = names(response.amaui_style_sheet_manager.names);

      values = values_;
    }

    // Add
    const add = () => {
      values = response.add(props);

      return values;
    };

    // Updates for amauiTheme
    const method = () => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(amauiTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    };

    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    // Remove
    const remove = () => {
      // Unsubscribe
      if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response.remove(values.ids?.dynamic);
    };

    // Update props
    const updateProps = (props_: any) => {
      if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props: props_ };
    };

    return {
      add,
      remove,
      updateProps
    };
  }

  return useStyle;
}
