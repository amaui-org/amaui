/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/styled', () => {

  to('styled', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { styled, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = styled('a')(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

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
      "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a></div>"
    ]));
  });

  to('sy', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { sy, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = sy('a')(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

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
      "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = styled('a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

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
        "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = styled('a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: theme.palette.text.default.primary
          }
        }));

        const Ad = {
          setup(props, { slots }) {
            return () => (
              window.Vue.h(
                'div',
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
                    Ad,
                    () => (
                      window.Vue.h(
                        A,
                        () => 'a'
                      )
                    )
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
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><div><a class=\"a-0 a1-1\">a</a></div></div>",
        1,
        [
          [
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><div><a class=\"a-0 a1-1\">a</a></div></div>"
      ]));
    });

    to('update props', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = styled('a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const App = {
          setup() {
            const a = window.Vue.ref(1);

            return {
              a
            }
          },

          mounted() {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

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
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\">a</a></div>",
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
        "<div data-amaui-theme=\"true\"><a class=\"a-0 a1-1\" a=\"14\">a</a><a class=\"a-0 a1-2\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = styled('a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

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
        "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, styled } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const A = styled('a')(theme => ({
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
