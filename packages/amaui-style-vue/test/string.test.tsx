/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/string', () => {

  to('string', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { string, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const classNameProp = string`
            color: yellow;
        `;

          return () => (
            window.Vue.h(
              'a',
              {
                class: classNameProp
              },
              slots.default && slots.default()
            )
          );
        }
      }

      const App = {
        setup() {
          return () => (
            window.Vue.h(
              'div',
              [
                window.Vue.h(
                  A,
                  {
                    a: 1
                  },
                  () => 'a'
                ),
                window.Vue.h(
                  A,
                  {
                    a: 14
                  },
                  () => 'a1'
                )
              ]
            )
          )
        },
      }

      // Add to DOM
      const app = window.Vue.createApp(App);

      // Use plugins
      app.use(amauiStylePlugin, { value: new AmauiStyle() });

      app.use(amauiThemePlugin);

      app.mount('#app');

      await window.AmauiUtils.wait(140);

      return [
        window.document.styleSheets.length,
        Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        []
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  to('sr', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { sr, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const classNameProp = sr`
            color: yellow;
        `;

          return () => (
            window.Vue.h(
              'a',
              {
                class: classNameProp
              },
              slots.default && slots.default()
            )
          );
        }
      }

      const App = {
        setup() {
          return () => (
            window.Vue.h(
              'div',
              [
                window.Vue.h(
                  A,
                  {
                    a: 1
                  },
                  () => 'a'
                ),
                window.Vue.h(
                  A,
                  {
                    a: 14
                  },
                  () => 'a1'
                )
              ]
            )
          )
        },
      }

      // Add to DOM
      const app = window.Vue.createApp(App);

      // Use plugins
      app.use(amauiStylePlugin, { value: new AmauiStyle() });

      app.use(amauiThemePlugin);

      app.mount('#app');

      await window.AmauiUtils.wait(140);

      return [
        window.document.styleSheets.length,
        Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        []
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { string, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = string`
            color: yellow;
        `;

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp
                },
                slots.default && slots.default()
              )
            );
          }
        }

        const App = {
          setup() {
            return () => (
              window.Vue.h(
                'div',
                [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
                  ),
                  window.Vue.h(
                    A,
                    {
                      a: 14
                    },
                    () => 'a1'
                  )
                ]
              )
            )
          },
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

        await window.AmauiUtils.wait(140);

        return [
          window.document.styleSheets.length,
          Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)),
          window.document.getElementById('app').innerHTML
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          []
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { string, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = string`
            color: yellow;
          `;

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp
                },
                slots.default && slots.default()
              )
            );
          }
        };

        const App = {
          setup() {
            const elements = window.Vue.ref(true);

            window.Vue.watch(elements, () => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            return {
              elements
            };
          },

          mounted() {
            setTimeout(() => {
              this.elements = false;
            }, 140);
          },

          render() {
            return (
              window.Vue.h(
                'div',
                this.elements ? [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
                  ),
                  window.Vue.h(
                    A,
                    {
                      a: 14
                    },
                    () => 'a1'
                  )
                ] : null
              )
            );
          }
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          []
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, string } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const A = {
        props: {
          a: Number,
        },

        setup(props_, { slots }) {
          const classNameProp = string`
            color: yellow;
          `;

          return () => (
            Vue.h(
              'a',
              {
                class: classNameProp
              },
              slots.default && slots.default()
            )
          );
        }
      };

      const App = {
        render() {
          return (
            Vue.h(
              AmauiStyleProvider,
              {
                value: amauiStyle
              },
              () => (
                Vue.h(
                  AmauiThemeProvider,
                  () => [
                    Vue.h(
                      A,
                      () => 'a'
                    ),
                    Vue.h(
                      A,
                      () => 'a1'
                    )
                  ]
                )
              )
            )
          );
        }
      };

      const value = await VueRenderer.renderToString(Vue.createSSRApp(App));

      assert(value).eq('<div><div><a class="a-0">a</a><a class="a-0">a1</a></div></div>');

      assert(amauiStyle.css).eq(`

.a-0 {
  color: yellow;
}

`);
    });

  });

});
