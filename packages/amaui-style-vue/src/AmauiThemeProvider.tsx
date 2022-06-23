import * as Vue from 'vue';

import { merge } from '@amaui/utils';
import { AmauiTheme } from '@amaui/style';

export default {
  props: {
    value: AmauiTheme,
  },

  setup(props: any) {
    const { value: valueLocal = {} } = props;

    const valueParent = Vue.inject<AmauiTheme>('amauiTheme').value || {};

    const value = Vue.ref(new AmauiTheme(merge({ ...valueLocal }, { ...valueParent }, { copy: true })));

    // Value local
    Vue.watch(valueLocal, valueNew => {
      value.value.update(merge({ ...valueNew }, { ...valueParent }, { copy: true }));
    });

    // Value parent
    Vue.watch(valueParent, valueNew => {
      value.value.update(merge({ ...valueLocal }, { ...valueNew }, { copy: true }));
    });

    Vue.provide('amauiTheme', value);

    return {
      value
    };
  },

  mounted() {
    if (this.value.hasOwnProperty('element')) this.value.element = this.$refs.root;

    // Init
    this.value.init && this.value.init();
  },

  render() {
    const slots = Vue.useSlots();

    return (
      Vue.h(
        'div',
        {
          ref: 'root'
        },
        slots.default && slots.default()
      )
    );
  }
};
