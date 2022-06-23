/* tslint:disable: no-shadowed-variable */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/AmauiThemeProvider', () => {

  to('AmauiThemeContext', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [
        !!window.AmauiStyleReact.AmauiThemeContext.Provider,
        !!window.AmauiStyleReact.AmauiThemeContext.Consumer
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(2).fill(true)
    ]));
  });

  to('AmauiThemeProvider', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const amauiTheme = useAmauiTheme();

        window.React.useEffect(() => {
          value.push(amauiTheme);
        }, []);

        return (
          eval(window.Babel.transform(`
            <div>
              {props.children}
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {
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

        return (
          eval(window.Babel.transform(`
            <AmauiThemeProvider value={a}>
                <A>
                  a

                  <div dir='rtl'>
                    <AmauiThemeProvider value={a1}>
                      <A>
                        a1
                      </A>
                    </AmauiThemeProvider>
                  </div>
                </A>
            </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

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
      "rtl",
      {
        "sort": true,
        "prefix": false,
        "rtl": true
      },
      "#ffa500",
      "#008000",
      "ltr",
      {
        "sort": true,
        "prefix": false,
        "rtl": false
      },
      "#ffa500",
      "#8BC34A"
    ]));
  });

  group('useAmauiTheme', () => {

    to('useAmauiTheme', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const amauiTheme = useAmauiTheme();

          window.React.useEffect(() => {
            value.push(amauiTheme);
          }, []);

          return (
            eval(window.Babel.transform(`
            <div>
              {props.children}
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
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

          return (
            eval(window.Babel.transform(`
            <AmauiThemeProvider value={a}>
                <A>
                  a

                  <div dir='rtl'>
                    <AmauiThemeProvider value={a1}>
                      <A>
                        a1
                      </A>
                    </AmauiThemeProvider>
                  </div>
                </A>
            </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(140);

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
        "rtl",
        {
          "sort": true,
          "prefix": false,
          "rtl": true
        },
        "#ffa500",
        "#008000",
        "ltr",
        {
          "sort": true,
          "prefix": false,
          "rtl": false
        },
        "#ffa500",
        "#8BC34A"
      ]));
    });

    group('update', () => {

      to('update', async () => {
        const valueBrowsers = await evaluate(async (window: any) => {
          const value = [];

          const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

          const A = (props) => {
            const amauiTheme = useAmauiTheme();

            window.React.useEffect(() => {
              value.push(amauiTheme.palette.light);

              setTimeout(() => {
                amauiTheme.update({
                  palette: {
                    light: false
                  }
                });

                value.push(amauiTheme.palette.light);
              });
            }, []);

            window.React.useEffect(() => {
              if (!amauiTheme.palette.light) value.push(amauiTheme.palette.light);
            });

            return (
              eval(window.Babel.transform(`
                <div>
                  {props.children}
                </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          const App = () => {
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

            return (
              eval(window.Babel.transform(`
                <AmauiThemeProvider value={a}>
                    <A>
                      a

                      <div dir='rtl'>
                        <AmauiThemeProvider value={a1}>
                          <A>
                            a1
                          </A>
                        </AmauiThemeProvider>
                      </div>
                    </A>
                </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          // Add to DOM
          window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

          await window.AmauiUtils.wait(140);

          return value;
        });

        const values = [...valueBrowsers];

        values.forEach(value => assert(value).eql([
          ...new Array(2).fill(true),
          ...new Array(2).fill(false)
        ]));
      });

      to('updateWithRerender', async () => {
        const valueBrowsers = await evaluate(async (window: any) => {
          const value = [];

          const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

          const A = (props) => {
            const amauiTheme = useAmauiTheme();

            window.React.useEffect(() => {
              value.push(amauiTheme.palette.light);

              setTimeout(() => {
                amauiTheme.updateWithRerender({
                  palette: {
                    light: false
                  }
                });
              });
            }, []);

            window.React.useEffect(() => {
              if (!amauiTheme.palette.light) value.push(amauiTheme.palette.light);
            });

            return (
              eval(window.Babel.transform(`
                <div>
                  {props.children}
                </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          const App = () => {
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

            return (
              eval(window.Babel.transform(`
                <AmauiThemeProvider value={a}>
                    <A>
                      a

                      <div dir='rtl'>
                        <AmauiThemeProvider value={a1}>
                          <A>
                            a1
                          </A>
                        </AmauiThemeProvider>
                      </div>
                    </A>
                </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          // Add to DOM
          window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

          await window.AmauiUtils.wait(140);

          return value;
        });

        const values = [...valueBrowsers];

        values.forEach(value => assert(value).any.eql([
          [
            ...new Array(2).fill(true),
            ...new Array(3).fill(false)
          ],
          [
            ...new Array(2).fill(true),
            ...new Array(4).fill(false)
          ]
        ]));
      });

      to('valueLocal', async () => {
        const valueBrowsers = await evaluate(async (window: any) => {
          const value = [];

          const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

          const A = (props) => {
            const amauiTheme = useAmauiTheme();

            window.React.useEffect(() => {
              value.push([
                amauiTheme.palette.light,
                amauiTheme.palette.color.primary.main,
                amauiTheme.palette.color.secondary.main
              ]);
            }, []);

            window.React.useEffect(() => {
              if (!amauiTheme.palette.light) value.push([
                amauiTheme.palette.light,
                amauiTheme.palette.color.primary.main,
                amauiTheme.palette.color.secondary.main
              ]);
            }, [amauiTheme.palette.light]);

            return (
              eval(window.Babel.transform(`
              <div>
                {props.children}
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          const App = () => {
            const [a1, setA1] = window.React.useState({
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            });

            window.React.useEffect(() => {
              setTimeout(() => {
                setA1({
                  palette: {
                    light: false
                  }
                })
              }, 140);
            }, []);

            const a = {
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            };

            return (
              eval(window.Babel.transform(`
              <AmauiThemeProvider value={a}>
                  <A>
                    a

                    <div dir='rtl'>
                      <AmauiThemeProvider value={a1}>
                        <A>
                          a1
                        </A>
                      </AmauiThemeProvider>
                    </div>
                  </A>
              </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          // Add to DOM
          window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

          await window.AmauiUtils.wait(440);

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
          ]
        ]));
      });

      to('valueParent', async () => {
        const valueBrowsers = await evaluate(async (window: any) => {
          const value = [];

          const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

          const A = (props) => {
            const amauiTheme = useAmauiTheme();

            window.React.useEffect(() => {
              value.push([
                amauiTheme.palette.light,
                amauiTheme.palette.color.primary.main,
                amauiTheme.palette.color.secondary.main
              ]);
            }, []);

            window.React.useEffect(() => {
              if (!amauiTheme.palette.light) value.push([
                amauiTheme.palette.light,
                amauiTheme.palette.color.primary.main,
                amauiTheme.palette.color.secondary.main
              ]);
            }, [amauiTheme.palette.light]);

            return (
              eval(window.Babel.transform(`
              <div>
                {props.children}
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          const App = () => {
            const [a, setA] = window.React.useState({
              palette: {
                color: {
                  primary: {
                    main: '#ffa500'
                  }
                }
              }
            });

            window.React.useEffect(() => {
              setTimeout(() => {
                setA({
                  palette: {
                    light: false
                  }
                })
              }, 140);
            }, []);

            const a1 = {
              palette: {
                color: {
                  secondary: {
                    main: '#008000'
                  }
                }
              }
            };

            return (
              eval(window.Babel.transform(`
                <AmauiThemeProvider value={a}>
                    <A>
                      a

                      <div dir='rtl'>
                        <AmauiThemeProvider value={a1}>
                          <A>
                            a1
                          </A>
                        </AmauiThemeProvider>
                      </div>
                    </A>
                </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
            );
          };

          // Add to DOM
          window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

          await window.AmauiUtils.wait(440);

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
            "#FFEB3B",
            "#8BC34A"
          ],
          [
            false,
            "#FFEB3B",
            "#008000"
          ]
        ]));
      });

    });

  });

  to('root props', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const amauiTheme = useAmauiTheme();

        window.React.useEffect(() => {
          value.push(amauiTheme);
        }, []);

        return (
          eval(window.Babel.transform(`
            <a>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {
        const a = new AmauiTheme();

        a.a = 'a';

        const a1 = new AmauiTheme();

        a1.a = 'a1';

        return (
          eval(window.Babel.transform(`
            <AmauiThemeProvider value={a} dir='ltr'>
                <A>
                  a

                  <AmauiThemeProvider value={a1} dir='rtl'>
                    <A>
                      a1
                    </A>
                  </AmauiThemeProvider>
                </A>
            </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiTheme),
        value[0].a === 'a1',
        value[0].direction,
        value[0].options,
        value[1].a === 'a',
        value[1].direction,
        value[1].options,
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(3).fill(true),
      'rtl',
      {
        'rule': {
          'sort': true,
          'prefix': false,
          'rtl': true
        }
      },
      true,
      'ltr',
      {
        'rule': {
          'sort': true,
          'prefix': false,
          'rtl': false
        }
      }
    ]));
  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = AmauiStyleReact;

      const amauiTheme = new AmauiTheme();

      const App = () => {
        return (
          <AmauiThemeProvider value={amauiTheme}>
            a
          </AmauiThemeProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<div>a</div>');
    });

  });

});
