/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/AmauiThemeProvider', () => {

  to('AmauiThemeProvider', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiThemeProvider, AmauiTheme } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiTheme = window.Vue.inject('amauiTheme');

          value.push(amauiTheme.value);

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
          const a = {
            palette: {
              color: {
                primary: {
                  main: '#ffa500'
                }
              }
            }
          };

          const a1 = {
            palette: {
              color: {
                secondary: {
                  main: '#008000'
                }
              }
            }
          };

          return () => (
            window.Vue.h(
              AmauiThemeProvider,
              {
                value: a
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiThemeProvider,
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
        value.every(item => item instanceof AmauiTheme),
        value[0] !== value[1],
        value[0].id !== value[1].id,
        value[0].element !== value[1].element,
        value[0].direction,
        value[0].options.rule,
        value[0].palette.color.primary.main,
        value[0].palette.color.secondary.main,
        value[1].direction,
        value[1].options.rule,
        value[1].palette.color.primary.main,
        value[1].palette.color.secondary.main,
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(5).fill(true),
      "ltr",
      {
        "sort": true,
        "prefix": false,
        "rtl": false
      },
      "#ffa500",
      "#8BC34A",
      "rtl",
      {
        "sort": true,
        "prefix": false,
        "rtl": true
      },
      "#ffa500",
      "#008000"
    ]));
  });

  to('inject', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiThemeProvider, AmauiTheme } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiTheme = window.Vue.inject('amauiTheme');

          value.push(amauiTheme.value);

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
          const a = {
            palette: {
              color: {
                primary: {
                  main: '#ffa500'
                }
              }
            }
          };

          const a1 = {
            palette: {
              color: {
                secondary: {
                  main: '#008000'
                }
              }
            }
          };

          return () => (
            window.Vue.h(
              AmauiThemeProvider,
              {
                value: a
              },
              () => [
                window.Vue.h(
                  A,
                  () => [
                    'a',
                    window.Vue.h(
                      AmauiThemeProvider,
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
        value.every(item => item instanceof AmauiTheme),
        value[0] !== value[1],
        value[0].id !== value[1].id,
        value[0].element !== value[1].element,
        value[0].direction,
        value[0].options.rule,
        value[0].palette.color.primary.main,
        value[0].palette.color.secondary.main,
        value[1].direction,
        value[1].options.rule,
        value[1].palette.color.primary.main,
        value[1].palette.color.secondary.main,
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(5).fill(true),
      "ltr",
      {
        "sort": true,
        "prefix": false,
        "rtl": false
      },
      "#ffa500",
      "#8BC34A",
      "rtl",
      {
        "sort": true,
        "prefix": false,
        "rtl": true
      },
      "#ffa500",
      "#008000"
    ]));
  });

  group('update', () => {

    to('update method', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiThemeProvider } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiTheme = window.Vue.inject('amauiTheme');

            window.Vue.watch(amauiTheme.value, (valueNew) => {
              if (!valueNew.palette.light) value.push(valueNew.palette.light);
            });

            return () => (
              window.Vue.h(
                'a',
                slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            value.push(amauiTheme.value.palette.light);

            amauiTheme.value.update({
              palette: {
                light: false
              }
            });

            value.push(amauiTheme.value.palette.light);
          }
        };

        const App = {
          setup() {
            const a = {
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            };

            const a1 = {
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            };

            return () => (
              window.Vue.h(
                AmauiThemeProvider,
                {
                  value: a
                },
                () => [
                  window.Vue.h(
                    A,
                    () => [
                      'a',
                      window.Vue.h(
                        AmauiThemeProvider,
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

      values.forEach(value => assert(value).eql([
        true,
        false,
        true,
        ...new Array(4).fill(false)
      ]));
    });

    to('value update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiThemeProvider } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiTheme = window.Vue.inject('amauiTheme');

            window.Vue.watch(amauiTheme.value, (valueNew) => {
              if (!valueNew.palette.light) value.push(valueNew.palette.light);
            });

            return () => (
              window.Vue.h(
                'a',
                slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            value.push(amauiTheme.value.palette.light);

            // Value update
            amauiTheme.value.palette.light = false;

            value.push(amauiTheme.value.palette.light);
          }
        };

        const App = {
          setup() {
            const a = {
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            };

            const a1 = {
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            };

            return () => (
              window.Vue.h(
                AmauiThemeProvider,
                {
                  value: a
                },
                () => [
                  window.Vue.h(
                    A,
                    () => [
                      'a',
                      window.Vue.h(
                        AmauiThemeProvider,
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

      values.forEach(value => assert(value).eql([
        true,
        false,
        true,
        ...new Array(4).fill(false)
      ]));
    });

    to('value local', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiThemeProvider } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiTheme = window.Vue.inject('amauiTheme');

            window.Vue.watch(amauiTheme.value, (valueNew) => {
              if (!valueNew.palette.light) value.push([
                valueNew.palette.light,
                valueNew.palette.color.primary.main,
                valueNew.palette.color.secondary.main
              ]);
            });

            return () => (
              window.Vue.h(
                'a',
                slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            value.push([
              amauiTheme.value.palette.light,
              amauiTheme.value.palette.color.primary.main,
              amauiTheme.value.palette.color.secondary.main
            ]);
          }
        };

        const App = {
          setup() {
            const a1 = window.Vue.ref({
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            });

            const a = {
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            };

            return {
              a,
              a1
            };
          },

          mounted() {
            this.a1.palette.light = false;
          },

          render() {
            return (
              window.Vue.h(
                AmauiThemeProvider,
                {
                  value: this.a
                },
                () => [
                  window.Vue.h(
                    A,
                    () => [
                      'a',
                      window.Vue.h(
                        AmauiThemeProvider,
                        {
                          value: this.a1
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
          }
        };

        // Add to DOM
        const app = window.Vue.createApp(App);

        app.mount('#app');

        return value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        [
          true,
          "#ffa500",
          "#008000"
        ],
        [
          true,
          "#ffa500",
          "#8BC34A"
        ],
        [
          false,
          "#ffa500",
          "#008000"
        ]
      ]));
    });

    to('value parent', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiThemeProvider } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiTheme = window.Vue.inject('amauiTheme');

            window.Vue.watch(amauiTheme.value, (valueNew) => {
              if (!valueNew.palette.light) value.push([
                valueNew.palette.light,
                valueNew.palette.color.primary.main,
                valueNew.palette.color.secondary.main
              ]);
            });

            return () => (
              window.Vue.h(
                'a',
                slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            value.push([
              amauiTheme.value.palette.light,
              amauiTheme.value.palette.color.primary.main,
              amauiTheme.value.palette.color.secondary.main
            ]);
          }
        };

        const App = {
          setup() {
            const a = window.Vue.ref({
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            });

            const a1 = {
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            };

            return {
              a,
              a1
            };
          },

          mounted() {
            this.a.palette.light = false;
          },

          render() {
            return (
              window.Vue.h(
                AmauiThemeProvider,
                {
                  value: this.a
                },
                () => [
                  window.Vue.h(
                    A,
                    () => [
                      'a',
                      window.Vue.h(
                        AmauiThemeProvider,
                        {
                          value: this.a1
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
          }
        };

        // Add to DOM
        const app = window.Vue.createApp(App);

        app.mount('#app');

        return value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        [
          true,
          "#ffa500",
          "#008000"
        ],
        [
          true,
          "#ffa500",
          "#8BC34A"
        ],
        [
          false,
          "#ffa500",
          "#8BC34A"
        ],
        [
          false,
          "#ffa500",
          "#008000"
        ]
      ]));
    });

  });

  to('root props', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiThemeProvider, AmauiTheme } = window.AmauiStyleVue;

      const A = {
        setup(props, { slots }) {
          const amauiTheme = window.Vue.inject('amauiTheme');

          value.push(amauiTheme.value);

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
          const a = new AmauiTheme();

          a.a = 'a';

          const a1 = new AmauiTheme();

          a1.a = 'a1';

          return () => (
            window.Vue.h(
              AmauiThemeProvider,
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
                      AmauiThemeProvider,
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
        value.every(item => item instanceof AmauiTheme),
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
        }
      },
      true,
      'rtl',
      {
        rule: {
          sort: true,
          prefix: false,
          rtl: true
        }
      }
    ]));
  });

  group('amauiThemePlugin', () => {

    to('amauiThemePlugin', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const value = [];

        const { AmauiTheme, AmauiThemeProvider, amauiThemePlugin } = window.AmauiStyleVue;

        const A = {
          setup(props, { slots }) {
            const amauiTheme = window.Vue.inject('amauiTheme');

            value.push(amauiTheme.value);

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
        app.use(amauiThemePlugin);

        app.mount('#app');

        return [
          value.length === 1,
          value.every(item => item instanceof AmauiTheme)
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

          const { AmauiTheme, AmauiThemeProvider, amauiThemePlugin } = window.AmauiStyleVue;

          const A = {
            setup(props, { slots }) {
              const amauiTheme = window.Vue.inject('amauiTheme');

              value.push(amauiTheme.value);

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
          const a = new AmauiTheme();

          a.a = 'a';

          app.use(amauiThemePlugin, { value: a });

          app.mount('#app');

          return [
            value.length === 1,
            value.every(item => item instanceof AmauiTheme),
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
      const { AmauiTheme, AmauiThemeProvider } = AmauiStyleVue;

      const App = {
        setup() {
          const value = Vue.ref(new AmauiTheme());

          return {
            value
          };
        },

        render() {
          return (
            Vue.h(
              AmauiThemeProvider,
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
    });

  });

});
