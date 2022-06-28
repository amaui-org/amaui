/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('use cases', () => {

  group('AmauiStyle optimize', () => {

    to('default', async () => {
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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle1(props);

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
                    A1,
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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
      ]));
    });

    to('true', async () => {
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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle1(props);

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
                    A1,
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
        app.use(amauiStylePlugin, { value: new AmauiStyle(undefined, undefined, undefined, { optimize: true }) });

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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
      ]));
    });

    to('false', async () => {
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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            const styles = useStyle1(props);

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
                    A1,
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
        app.use(amauiStylePlugin, { value: new AmauiStyle(undefined, undefined, undefined, { optimize: false }) });

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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-2 { color: yellow; }"
          ],
          [
            ".a-1 { width: 100px; }"
          ],
          [
            ".a1-3 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-2\">a</a><a class=\"a-1 a1-3\">a1</a></div>"
      ]));
    });

  });

  group('Multiple elements, same default amauiStyle instance', () => {

    to('Multiple elements, same default amauiStyle instance', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a')(theme => ({
          a: {
            color: 'yellow'
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
                    A14,
                    {
                      a: 14
                    },
                    () => 'a'
                  ),
                  window.Vue.h(
                    A14,
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
        5,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ],
          [
            ".a1-3 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a</a><a class=\"a-0 a1-3\" a=\"14\">a1</a></div>"
      ]));
    });

    group('ssr', () => {

      to('renderToString', async () => {
        const { styled, AmauiStyle, AmauiStyleProvider, AmauiThemeProvider } = AmauiStyleVue;

        const amauiStyle = new AmauiStyle();

        const A = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: 'orange'
          },

          a14: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
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
                    () => [
                      Vue.h(
                        A,
                        {
                          a: 1
                        },
                        () => 'a'
                      ),
                      Vue.h(
                        A14,
                        {
                          a: 14
                        },
                        () => 'a'
                      ),
                      Vue.h(
                        A14,
                        {
                          a: 14
                        },
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

        assert(value).eq('<div><div><a class="a-0" a="1">a</a><a class="a-0 a1-1" a="14">a</a><a class="a-0 a1-1" a="14">a1</a></div></div>');

        assert(amauiStyle.css).eq(`

.a-0 {
  color: yellow;
}

.a1-1 {
  color: orange;
}

`);
      });

    });

  });

});
