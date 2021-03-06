/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/style', () => {

  to('style', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { style, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const useStyle = style(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const styles = useStyle(props);

          return () => (
            window.Vue.h(
              'a',
              {
                class: styles.value.class
              },
              slots.default && slots.default()
            )
          );
        }
      };

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
          );
        },
      };

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
      3,
      [
        [
          ".a-0 { width: 100px; }"
        ],
        [
          ".a1-1 { color: yellow; }"
        ],
        [
          ".a1-2 { color: orange; }"
        ]
      ],
      "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
    ]));
  });

  to('s', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { s, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const useStyle = s(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const styles = useStyle(props);

          return () => (
            window.Vue.h(
              'a',
              {
                class: styles.value.class
              },
              slots.default && slots.default()
            )
          );
        }
      };

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
          );
        },
      };

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
      3,
      [
        [
          ".a-0 { width: 100px; }"
        ],
        [
          ".a1-1 { color: yellow; }"
        ],
        [
          ".a1-2 { color: orange; }"
        ]
      ],
      "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { style, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle(props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: styles.value.class
                },
                slots.default && slots.default()
              )
            );
          }
        };

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
            );
          },
        };

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
        3,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: theme.palette.text.default.primary
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle(props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: styles.value.class
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
        };

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
            );
          },
        };

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
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\">a</a></div>",
        1,
        [
          [
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\">a</a></div>"
      ]));
    });

    to('update props', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle(props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: styles.value.class
                },
                slots.default && slots.default()
              )
            );
          }
        };

        const App = {
          setup() {
            const a = window.Vue.ref(1);

            window.Vue.watch(a, () => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            return {
              a
            };
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
        };

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
        3,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a</a></div>",
        3,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: orange; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle(props);

            return () => (
              window.Vue.h(
                'a',
                {
                  class: styles.value.class
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
        };

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
        3,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, style } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const useStyle = style(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: theme.palette.text.default.primary
        },

        a4: {
          background: props => props.a === 1 ? 'yellow' : 'orange'
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          const styles = useStyle(props);

          return () => (
            Vue.h(
              'a',
              {
                class: styles.value.class
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
                  () => (
                    Vue.h(
                      A,
                      () => 'a'
                    )
                  )
                )
              )
            )
          );
        }
      };

      const value = await VueRenderer.renderToString(Vue.createSSRApp(App));

      assert(value).eq('<div><div><a class="a-0 a1-1">a</a></div></div>');

      assert(amauiStyle.css).eq(`

.a-0 {
  width: 100px;
}

.a1-1 {
  color: rgba(0, 0, 0, 0.87);
}

`);
    });

  });

});
