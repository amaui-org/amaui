import Vue from 'vue';

import { merge, is } from '@amaui/utils';

import { AmauiStyle, AmauiTheme, IMethodResponse, IResponse, pure as amauiPureMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/pure';

export default function pure(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;

  function useStyle(props?: any): IResponse {
    const values = Vue.ref({
      classes: {},
      classNames: {},
      keyframes: {},
      styles: () => { },
    }) as Vue.Ref<IResponse>;

    const amauiStyle: AmauiStyle = Vue.inject('amauiStyle');
    const amauiTheme: AmauiTheme = Vue.inject('amauiTheme');

    // Init
    // Add
    // Updates for amauiTheme
    const method = () => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(amauiTheme);

        // Update
        if (response.update !== undefined) response.update(valueNew);
      }
    };

    Vue.onMounted(() => {
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
      values.value = response.add(props);

      if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);

    });

    // Clean up
    Vue.onUnmounted(() => {
      amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response.remove(values.value.ids?.dynamic);
    });

    // Update props
    Vue.watch(
      () => props,
      () => {
        if (response.props !== undefined) response.props = props;
      },
      {
        deep: true,
        immediate: true
      }
    );

    return values.value;
  }

  return useStyle;
}
