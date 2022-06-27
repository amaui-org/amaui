import * as Vue from 'vue';

import { merge, is } from '@amaui/utils';

import { AmauiStyle, AmauiTheme, IMethodResponse, IResponse, names, style as amauiStyleMethod, TValue, TValueMethod } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

export default function style(value: TValue, options_: IOptions = {}) {
  let response: IMethodResponse;
  let values_: IResponse;

  function useStyle(props_?: Vue.Ref<any>) {
    const styles = Vue.ref<IResponse>(values_);

    const amauiStyle = Vue.inject<AmauiStyle>('amauiStyle')?.value;
    const amauiTheme = Vue.inject<AmauiTheme>('amauiTheme')?.value;

    const props = Vue.ref(props_);

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

      styles.value = values_;
    }

    // Updates for amauiTheme
    const method = () => {
      if (is('function', value)) {
        const valueNew = (value as TValueMethod)(amauiTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    };

    // Add
    Vue.onMounted(() => {
      // Add
      styles.value = response.add(props.value);

      if (amauiTheme) amauiTheme.subscriptions.update.subscribe(method);
    });

    // Clean up
    Vue.onUnmounted(() => {
      if (amauiTheme) amauiTheme.subscriptions.update.unsubscribe(method);

      // Remove
      response.remove(styles.value?.ids?.dynamic);
    });

    // Update props
    Vue.watch(
      props,
      valueNew => {
        if (response !== undefined && styles.value?.ids) response.props = { ids: styles.value.ids.dynamic, props: valueNew };
      },
      {
        deep: true,
        immediate: true
      }
    );

    return styles;
  }

  return useStyle;
}
