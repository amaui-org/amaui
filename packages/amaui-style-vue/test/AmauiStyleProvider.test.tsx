/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/AmauiStyleProvider', () => {

  to('AmauiStyleProvider', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, AmauiStyleProvider } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiStyle = window.Vue.inject('amauiStyle');

          value.push(amauiStyle.value);

          return () => (
            window.Vue.h(
              'a',
              slots.default()
            )
          );
        }
      };

      const App = {
        setup() {
          const a = new AmauiStyle();

          a.a = 'a';

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          return () => (
            window.Vue.h(
              AmauiStyleProvider,
              {
                value: a
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiStyleProvider,
                      {
                        value: a1
                      },
                      () => [
                        window.Vue.h(
                          A,
                          () => 'a'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          );
        },
      };

      // Add to DOM
      const app = window.Vue.createApp(App);

      app.mount('#app');

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[1].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  to('inject', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, AmauiStyleProvider } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiStyle = window.Vue.inject('amauiStyle');

          value.push(amauiStyle.value);

          return () => (
            window.Vue.h(
              'a',
              slots.default()
            )
          );
        }
      };

      const App = {
        setup() {
          const a = new AmauiStyle();

          a.a = 'a';

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          return () => (
            window.Vue.h(
              AmauiStyleProvider,
              {
                value: a
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiStyleProvider,
                      {
                        value: a1
                      },
                      () => [
                        window.Vue.h(
                          A,
                          () => 'a'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          );
        },
      };

      // Add to DOM
      const app = window.Vue.createApp(App);

      app.mount('#app');

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[1].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  to('update', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiStyle, AmauiStyleProvider } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiStyle = window.Vue.inject('amauiStyle');

          window.Vue.watch(amauiStyle.value, (valueNew) => {
            if (valueNew?.a === 14) value.push(valueNew.a);
          });

          return () => (
            window.Vue.h(
              'a',
              slots.default()
            )
          );
        },

        mounted() {
          const amauiStyle = window.Vue.inject('amauiStyle');

          value.push(amauiStyle.value.a);

          amauiStyle.value.a = 14;
        }
      };

      const App = {
        setup() {
          const a = new AmauiStyle();

          a.a = 'a';

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          return () => (
            window.Vue.h(
              AmauiStyleProvider,
              {
                value: a
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiStyleProvider,
                      {
                        value: a1
                      },
                      () => [
                        window.Vue.h(
                          A,
                          () => 'a'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          );
        },
      };

      // Add to DOM
      const app = window.Vue.createApp(App);

      app.mount('#app');

      return value;
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).any.eql([
      [
        'a1',
        'a',
        ...new Array(2).fill(14)
      ],
      [
        'a1',
        'a',
        ...new Array(3).fill(14)
      ]
    ]));
  });

  to('root props', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, AmauiStyleProvider } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiStyle = window.Vue.inject('amauiStyle');

          value.push(amauiStyle.value);

          return () => (
            window.Vue.h(
              'a',
              slots.default()
            )
          );
        }
      };

      const App = {
        setup() {
          const a = new AmauiStyle();

          a.a = 'a';

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          return () => (
            window.Vue.h(
              AmauiStyleProvider,
              {
                value: a,
                dir: 'ltr'
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiStyleProvider,
                      {
                        value: a1,
                        dir: 'rtl'
                      },
                      () => [
                        window.Vue.h(
                          A,
                          () => 'a'
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          );
        },
      };

      // Add to DOM
      const app = window.Vue.createApp(App);

      app.mount('#app');

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[0].direction,
        value[0].options,
        value[1].a === 'a1',
        value[1].direction,
        value[1].options,
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(3).fill(true),
      'ltr',
      {
        rule: {
          sort: true,
          prefix: false,
          rtl: false
        },
        'optimize': true
      },
      true,
      'rtl',
      {
        rule: {
          sort: true,
          prefix: false,
          rtl: true
        },
        'optimize': true
      }
    ]));
  });

  group('amauiStylePlugin', () => {

    to('amauiStylePlugin', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const value = [];

        const { AmauiStyle, AmauiStyleProvider, amauiStylePlugin } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiStyle = window.Vue.inject('amauiStyle');

            value.push(amauiStyle.value);

            return () => (
              window.Vue.h(
                'a',
                slots.default()
              )
            );
          }
        };

        const App = {
          setup() {
            return () => (
              window.Vue.h(
                A,
                'a',
              )
            );
          },
        };

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Add plugin
        app.use(amauiStylePlugin);

        app.mount('#app');

        return [
          value.length === 1,
          value.every(item => item instanceof AmauiStyle)
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        ...new Array(2).fill(true)
      ]));
    });

    group('options', () => {

      to('value', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          const value = [];

          const { AmauiStyle, AmauiStyleProvider, amauiStylePlugin } = window.AmauiStyleVue;

          const A = {
            setup(props, { slots }) {
              const amauiStyle = window.Vue.inject('amauiStyle');

              value.push(amauiStyle.value);

              return () => (
                window.Vue.h(
                  'a',
                  slots.default()
                )
              );
            }
          };

          const App = {
            setup() {
              return () => (
                window.Vue.h(
                  A,
                  'a',
                )
              );
            },
          };

          // Add to DOM
          const app = window.Vue.createApp(App);

          // Add plugin
          const a = new AmauiStyle();

          a.a = 'a';

          app.use(amauiStylePlugin, { value: a });

          app.mount('#app');

          return [
            value.length === 1,
            value.every(item => item instanceof AmauiStyle),
            value[0].a === 'a'
          ];
        });

        const values = [...valueBrowsers];

        values.forEach(value => assert(value).eql([
          ...new Array(3).fill(true)
        ]));
      });

    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const App = {
        setup() {
          const value = new AmauiStyle();

          return {
            value
          };
        },

        render() {
          return (
            Vue.h(
              AmauiStyleProvider,
              {
                value: this.value
              },
              () => 'a'
            )
          );
        }
      };

      const value = await VueRenderer.renderToString(Vue.createSSRApp(App));

      assert(value).eq('<div>a</div>');

      assert(amauiStyle.css).eq(``);
    });

  });

});
