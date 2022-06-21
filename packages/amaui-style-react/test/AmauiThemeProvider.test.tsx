/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

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
      const value: any = [];

      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const [amauiTheme] = useAmauiTheme();

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

      const App: any = () => {
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
        value[0].id !== value[1].id,
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
      ...new Array(3).fill(true),
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
        const value: any = [];

        const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const [amauiTheme] = useAmauiTheme();

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

        const App: any = () => {
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
          value[0].id !== value[1].id,
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
        ...new Array(3).fill(true),
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

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const value = [];

        const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const [amauiTheme, setAmauiTheme] = useAmauiTheme();

          window.React.useEffect(() => {
            value.push(amauiTheme.palette.light);

            setTimeout(() => {
              setAmauiTheme({
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
          ...new Array(2).fill(false)
        ]
      ]));
    });

  });

});
