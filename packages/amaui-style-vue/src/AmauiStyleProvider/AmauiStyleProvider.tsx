import * as Vue from 'vue';

import is from '@amaui/utils/is';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject, } from '@amaui/style';

function makeAmauiStyle() {
  const amauiStyle = new AmauiStyle();

  // Add all the plugins
  amauiStyle.plugins.add = [makeClassName, unit, rtl, sort, valueObject];

  return amauiStyle;
}

export default {
  props: {
    value: AmauiStyle
  },

  setup(props: any) {
    const { value: value_ } = props;

    const value = Vue.ref<AmauiStyle>(value_ === undefined || !(value_ instanceof AmauiStyle) ? makeAmauiStyle() : value_);

    // Provide
    Vue.provide('amauiStyle', value);

    return {
      value
    };
  },

  mounted() {
    if (this.value.hasOwnProperty('element')) this.value.element = this.$refs.root;

    // Init
    is('function', this.value.init) && this.value.init();
  },

  render() {
    const { value, ...other } = this.$props;

    return (
      <div ref='root' {...other}>
        {this.$slots.default && this.$slots.default()}
      </div>
    );
  }
};
