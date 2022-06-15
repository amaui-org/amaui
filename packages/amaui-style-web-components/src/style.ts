import { merge, is } from '@amaui/utils';

import { AmauiStyle, AmauiTheme, IMethodResponse, IResponse, style as amauiStyleMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

export interface IStyleResponse {
  add?: () => IResponse;
  remove?: () => void;
  updateProps?: (props: any) => void;
}

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;

  function useStyle(Element: Element, props?: any): IStyleResponse {
    let values: IResponse;

    const amauiStyle = AmauiStyle.nearest(Element);
    const amauiTheme = AmauiTheme.nearest(Element);

    // Init
    const options = {
      amaui_style: { value: undefined },
      amaui_theme: { value: undefined },
    };

    // AmauiStyle
    if (amauiStyle === undefined) options.amaui_style.value = amauiStyle;

    // AmauiTheme
    if (amauiTheme === undefined) options.amaui_theme.value = amauiTheme;

    if (response === undefined) response = amauiStyleMethod(value, merge(options, options_, { copy: true }));

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
        if (response.update !== undefined) response.update(valueNew);
      }
    };

    if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    // Remove
    const remove = () => {
      // Unsubscribe
      amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response.remove(values.ids?.dynamic);
    };

    // Update props
    const updateProps = (props_: any) => {
      if (response.props !== undefined) response.props = props_;
    };

    return {
      add,
      remove,
      updateProps
    };
  }

  return useStyle;
}
