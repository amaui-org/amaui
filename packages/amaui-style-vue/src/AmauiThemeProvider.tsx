// import Vue from 'vue';
// import { merge } from '@amaui/utils';
// import { AmauiTheme } from '@amaui/style';

// export default {
//   props: {
//     value: AmauiTheme,
//   },
//   setup(props: any) {
//     const { value: valueLocal } = props;

//     const valueParent = Vue.inject("amauiTheme") || new AmauiTheme();

//     const value = Vue.computed(() => {
//       const valueNew = merge(valueLocal, valueParent);

//       return new AmauiTheme(valueNew);
//     });

//     Vue.provide("amauiTheme", value);

//     return {};
//   },
//   render() {
//     return (
//       <template>
//         {this.$slots.default}
//       </template>
//     );
//   }
// };
