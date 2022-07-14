import * as Vue from 'vue';

import copy from '@amaui/utils/copy';
import merge from '@amaui/utils/merge';

import { AmauiStyle, AmauiTheme, inline as amauiInlineMethod, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/inline';

export default function inline(value_: TValue, props_?: any, options_: IOptions = { response: 'css' }) {
  const value = Vue.ref('');
  const props = Vue.ref(props_);

  const amauiStyle = Vue.inject<AmauiStyle>('amauiStyle');
  const amauiTheme = Vue.inject<AmauiTheme>('amauiTheme');

  const update = (update_ = true) => {
    // AmauiStyle has to be a new copy of the injected amauiStyle
    // as it updates amauiStyle props which causes a rerender and update
    const options = merge(options_, { amaui_style: { value: copy({ ...amauiStyle.value }) }, amaui_theme: { value: amauiTheme.value } }, { copy: true });

    // Options response css
    options.response = 'css';

    const valueNew = amauiInlineMethod(value_, props.value, options);

    if (update_) value.value = valueNew;

    return valueNew;
  };

  Vue.watch(
    value_,
    () => update(),
    {
      deep: true
    }
  );

  Vue.watch(
    props,
    () => update(),
    {
      deep: true
    }
  );

  return value.value || update(false);
}
