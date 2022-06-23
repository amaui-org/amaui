import * as Vue from 'vue';

import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

function makeAmauiStyle() {
  const amauiStyle = new AmauiStyle();

  // Add all the plugins
  amauiStyle.plugins.add = [makeClassName, unit, rtl, sort, valueObject];

  return amauiStyle;
}

interface IOptions {
  value?: AmauiStyle;
}

export default {

  install(app: Vue.App, options: IOptions) {
    const { value: value_ } = options;

    const value = Vue.ref<AmauiStyle>(value_ === undefined || !(value_ instanceof AmauiStyle) ? makeAmauiStyle() : value_);

    // Provide
    app.provide('amauiStyle', value);
  }

};
