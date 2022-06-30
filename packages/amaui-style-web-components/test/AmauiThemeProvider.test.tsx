/* tslint:disable: no-shadowed-variable */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleWebComponents from '../src';

group('@amaui/style-web-components/AmauiThemeProvider', () => {

  to('AmauiThemeProvider', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          value.push(useAmauiTheme(this));
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
            <amaui-theme id='a' value={JSON.stringify(a)}>
                <a-a>
                  a

                  <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-theme>
                </a-a>
            </amaui-theme>
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

  to('useAmauiStyle', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          value.push(useAmauiTheme(this));
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
            <amaui-theme id='a' value={JSON.stringify(a)}>
                <a-a>
                  a

                  <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-theme>
                </a-a>
            </amaui-theme>
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

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {

          connectedCallback() {
            const amauiTheme = useAmauiTheme(this);

            value.push(amauiTheme.palette.light);

            amauiTheme.update({ palette: { light: false } });
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
              <amaui-theme id='a' value={JSON.stringify(a)}>
                  <a-a>
                    a

                    <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                      <a-a>
                        a1
                      </a-a>
                    </amaui-theme>
                  </a-a>
              </amaui-theme>
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
        true,
        false
      ]));
    });

    to('update local', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {

          connectedCallback() {
            const amauiTheme = useAmauiTheme(this);

            value.push([
              amauiTheme.palette.light,
              amauiTheme.palette.color.primary.main,
              amauiTheme.palette.color.secondary.main
            ]);
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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

          window.React.useEffect(() => {
            window.document.getElementById('a1').update({ palette: { light: false } });
          }, []);

          return (
            eval(window.Babel.transform(`
              <amaui-theme id='a' value={JSON.stringify(a)}>
                  <a-a>
                    a

                    <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                      <a-a>
                        a1
                      </a-a>
                    </amaui-theme>
                  </a-a>
              </amaui-theme>
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
        [
          true,
          "#ffa500",
          "#8BC34A"
        ],
        [
          true,
          "#ffa500",
          "#008000"
        ],
        [
          false,
          "#ffa500",
          "#8BC34A"
        ]
      ]));
    });

    to('update parent', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {

          connectedCallback() {
            const amauiTheme = useAmauiTheme(this);

            value.push([
              amauiTheme.palette.light,
              amauiTheme.palette.color.primary.main,
              amauiTheme.palette.color.secondary.main
            ]);
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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

          window.React.useEffect(() => {
            window.document.getElementById('a').update({ palette: { light: false } });
          }, []);

          return (
            eval(window.Babel.transform(`
              <amaui-theme id='a' value={JSON.stringify(a)}>
                  <a-a>
                    a

                    <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                      <a-a>
                        a1
                      </a-a>
                    </amaui-theme>
                  </a-a>
              </amaui-theme>
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
        [
          true,
          "#ffa500",
          "#8BC34A"
        ],
        [
          true,
          "#ffa500",
          "#008000"
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

  to('root props', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          value.push(useAmauiTheme(this));
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
            <amaui-theme id='a' value={JSON.stringify(a)}>
                <a-a>
                  a

                  <amaui-theme id='a1' value={JSON.stringify(a1)} dir='rtl'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-theme>
                </a-a>
            </amaui-theme>
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

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiTheme, AmauiThemeProvider } = AmauiStyleWebComponents;

      const amauiTheme = new AmauiTheme();

      AmauiThemeProvider.prototype.value = amauiTheme;

      const App = () => {
        return (
          <amaui-theme>
            a
          </amaui-theme>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<amaui-theme>a</amaui-theme>');
    });

  });

});
