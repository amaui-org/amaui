import * as Vue from 'vue';

import { copy, merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

export default {
  props: {
    value: [Object, AmauiTheme],
  },

  setup(props: any) {
    const { value: valueLocal } = Vue.toRefs(props);

    const valueParent = Vue.inject<AmauiTheme>('amauiTheme');

    const value = Vue.ref(new AmauiTheme(merge(copy({ ...valueLocal.value }), copy({ ...(valueParent?.value || {}) }), { copy: true })));

    // Value local
    if (valueLocal.value) Vue.watch(valueLocal.value, valueNew => {
      value.value.update(merge(copy({ ...valueNew }), copy({ ...(valueParent?.value || {}) }), { copy: true }));
    });

    // Value parent
    if (valueParent) Vue.watch(valueParent.value, valueNew => {
      value.value.update(merge(copy({ ...valueLocal.value }), copy({ ...(valueNew || {}) }), { copy: true }));
    });

    Vue.provide('amauiTheme', value);

    return {
      value
    };
  },

  mounted() {
    this.value.element = this.$refs.root;

    // Init
    this.value.init && this.value.init();
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
