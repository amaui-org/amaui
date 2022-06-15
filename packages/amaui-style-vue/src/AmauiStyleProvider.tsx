import Vue from 'vue';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject, } from '@amaui/style';

function makeAmauiStyle() {
  const amauiStyle = new AmauiStyle();

  // Add all the plugins
  amauiStyle.plugins.add = [makeClassName, unit, rtl, sort, valueObject];

  return amauiStyle;
}

export default {
  props: {
    value: AmauiStyle,
  },
  setup(props: any) {
    const { value } = Vue.toRefs(props);

    let value_: AmauiStyle;

    if (value === undefined || !(value instanceof AmauiStyle)) value_ = makeAmauiStyle();

    Vue.provide("amauiStyle", value_);

    return {};
  },
  render() {
    return (
      <template>
        {this.$slots.default}
      </template>
    );
  }
};
