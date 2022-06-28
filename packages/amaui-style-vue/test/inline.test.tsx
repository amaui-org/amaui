/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/inline', () => {

  to('inline', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { inline, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {

          return () => (
            window.Vue.h(
              'a',
              {
                style: inline(theme => ({
                  color: 'yellow',
                  backgroundColor: 'orange'
                }), props)
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
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      "<div><a style=\"color: yellow; background-color: orange;\">a</a><a style=\"color: yellow; background-color: orange;\">a1</a></div>"
    ]));
  });

  to('i', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { i, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {

          return () => (
            window.Vue.h(
              'a',
              {
                style: i(theme => ({
                  color: 'yellow',
                  backgroundColor: 'orange'
                }), props)
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
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      "<div><a style=\"color: yellow; background-color: orange;\">a</a><a style=\"color: yellow; background-color: orange;\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { inline, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {

            return () => (
              window.Vue.h(
                'a',
                {
                  style: inline(theme => ({
                    color: 'yellow',
                    backgroundColor: 'orange'
                  }), props)
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
          window.document.getElementById('app').innerHTML
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div><a style=\"color: yellow; background-color: orange;\">a</a><a style=\"color: yellow; background-color: orange;\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            return () => (
              window.Vue.h(
                'a',
                {
                  style: inline(theme => ({
                    color: theme?.palette.text.default.primary,
                    backgroundColor: 'orange'
                  }), props)
                },
                slots.default && slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            setTimeout(() => {
              window.value.push(window.document.getElementById('app').innerHTML);
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

        window.value.push(window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div data-amaui-theme=\"true\"><a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a></div>",
        "<div data-amaui-theme=\"true\"><a style=\"color: rgba(255, 255, 255, 0.87); background-color: orange;\">a</a></div>"
      ]));
    });

    to('update props', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            return () => (
              window.Vue.h(
                'a',
                {
                  style: inline(theme => ({
                    color: props => props.a === 1 ? 'yellow' : 'orange',
                    backgroundColor: 'orange'
                  }), props)
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
              window.value.push(window.document.getElementById('app').innerHTML);
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

        window.value.push(window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div data-amaui-theme=\"true\"><a style=\"background-color: orange; color: yellow;\">a</a><a style=\"background-color: orange; color: orange;\">a</a></div>",
        "<div data-amaui-theme=\"true\"><a style=\"background-color: orange; color: orange;\">a</a><a style=\"background-color: orange; color: orange;\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            return () => (
              window.Vue.h(
                'a',
                {
                  style: inline(theme => ({
                    color: props => props.a === 1 ? 'yellow' : 'orange'
                  }), props)
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
              window.value.push(window.document.getElementById('app').innerHTML);
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

        window.value.push(window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div><a style=\"color: yellow;\">a</a><a style=\"color: orange;\">a1</a></div>",
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, inline } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          return () => (
            Vue.h(
              'a',
              {
                style: inline(theme => ({
                  color: props => props.a === 1 ? 'yellow' : 'orange',
                  backgroundColor: 'orange'
                }), props)
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
                      {
                        a: 1
                      },
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

      assert(value).eq('<div><div><a style="background-color: orange; color: yellow;">a</a><a style="background-color: orange; color: orange;">a1</a></div></div>');

      assert(amauiStyle.css).eq(``);
    });

  });

});
