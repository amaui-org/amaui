// import * as Vue from 'vue';

// import { merge } from '@amaui/utils';

// import { AmauiStyle, AmauiTheme, inline as amauiInlineMethod, TValue } from '@amaui/style';
// import { IOptions } from '@amaui/style/inline';

// export default function inline(value_: TValue, options_: IOptions = {}) {
//   const value = Vue.ref('');

//   const amauiStyle: AmauiStyle = Vue.inject('amauiStyle');
//   const amauiTheme: AmauiTheme = Vue.inject('amauiTheme');

//   Vue.watch(
//     () => value_,
//     () => {
//       const options = merge(options_, { amaui_style: { value: amauiStyle }, amaui_theme: { value: amauiTheme } }, { copy: true });

//       const valueNew = amauiInlineMethod(value_, options);

//       value.value = valueNew;
//     },
//     {
//       deep: true
//     }
//   );

//   return value;
// }
