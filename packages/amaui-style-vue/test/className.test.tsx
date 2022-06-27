/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/className', () => {

  to('className', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { className, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const classNameProp = className(theme => ({
            a: {
              color: 'yellow'
            }
          }), props);

          return () => (
            window.Vue.h(
              'a',
              {
                class: classNameProp.value
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

  to('c', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { c, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const classNameProp = c(theme => ({
            a: {
              color: 'yellow'
            }
          }), props);

          return () => (
            window.Vue.h(
              'a',
              {
                class: classNameProp.value
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

  to('cs', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { cs, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const classNameProp = cs(theme => ({
            a: {
              color: 'yellow'
            }
          }), props);

          return () => (
            window.Vue.h(
              'a',
              {
                class: classNameProp.value
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
        const { className, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = className(theme => ({
              a: {
                color: 'yellow'
              }
            }), props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp.value
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

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = className(theme => ({
              a: {
                color: theme.palette.text.default.primary
              }
            }), props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp.value
                },
                slots.default && slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              amauiTheme.value.update({ palette: { light: false } });
            }, 140);
          }
        }

        const App = {
          setup() {
            return () => (
              window.Vue.h(
                AmauiThemeProvider,
                () => [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
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

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a></div>"
      ]));
    });

    to('update props', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = className(theme => ({
              a: {
                color: props => props.a === 1 ? 'yellow' : 'orange',
              }
            }), props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp.value
                },
                slots.default && slots.default()
              )
            );
          }
        }

        const App = {
          setup() {
            const a = window.Vue.ref(1);

            window.Vue.watch(a, () => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            return {
              a
            }
          },

          mounted() {
            setTimeout(() => {
              this.a = 14;
            }, 140);
          },

          render() {
            return (
              window.Vue.h(
                AmauiThemeProvider,
                () => [
                  window.Vue.h(
                    A,
                    {
                      a: this.a
                    },
                    () => 'a'
                  ),
                  window.Vue.h(
                    A,
                    () => 'a'
                  )
                ]
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
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>",
        2,
        [
          [
            ".a-0 { color: orange; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const classNameProp = className(theme => ({
              a: {
                color: 'yellow'
              }
            }), props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: classNameProp.value
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
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, className } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const A = {
        props: {
          a: Number,
        },

        setup(props_, { slots }) {
          const props = Vue.ref(props_);

          const classNameProp = className(theme => ({
            a: {
              color: 'yellow'
            },
            a1: {
              background: 'orange'
            }
          }), props);

          return () => (
            Vue.h(
              'a',
              {
                class: classNameProp.value
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

      assert(value).eq('<div><div><a class="a-0 a1-1">a</a><a class="a-0 a1-1">a1</a></div></div>');

      assert(amauiStyle.css).eq(`

.a-0 {
  color: yellow;
}

.a1-1 {
  background: orange;
}

`);
    });

  });

});
