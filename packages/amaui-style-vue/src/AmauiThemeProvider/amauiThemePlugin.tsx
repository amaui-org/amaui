import * as Vue from 'vue';

import { copy, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

interface IOptions {
  value?: AmauiTheme;
}

export default {

  install(app: Vue.App, options: IOptions) {
    const { value: valueLocal = {} } = options;

    const valueParent = Vue.inject<AmauiTheme>('amauiTheme').value || {};

    const value = Vue.ref(new AmauiTheme(merge({ ...copy(valueLocal) }, { ...valueParent }, { copy: true })));

    // Value local
    Vue.watch(valueLocal, valueNew => {
      value.value.update(merge({ ...copy(valueNew) }, { ...valueParent }, { copy: true }));
    });

    // Value parent
    Vue.watch(valueParent, valueNew => {
      value.value.update(merge({ ...copy(valueLocal) }, { ...valueNew }, { copy: true }));
    });

    // Provide
    app.provide('amauiTheme', value);
  }

};
