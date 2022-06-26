import * as Vue from 'vue';

import { copy, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

interface IOptions {
  value?: AmauiTheme;
}

export default {

  install(app: Vue.App, options: IOptions = {}) {
    const { value: valueLocal } = options;

    const value = Vue.ref(new AmauiTheme(valueLocal));

    // Provide
    app.provide('amauiTheme', value);
  }

};
