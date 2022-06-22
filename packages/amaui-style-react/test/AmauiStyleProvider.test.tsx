/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/AmauiStyleProvider', () => {

  to('AmauiStyleContext', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [
        !!window.AmauiStyleReact.AmauiStyleContext.Provider,
        !!window.AmauiStyleReact.AmauiStyleContext.Consumer
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(2).fill(true)
    ]));
  });

  to('AmauiStyleProvider', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const [amauiStyle] = useAmauiStyle();

        value.push(amauiStyle);

        return (
          eval(window.Babel.transform(`
            <a>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {
        const a = new AmauiStyle();

        a.a = 'a';

        const a1 = new AmauiStyle();

        a1.a = 'a1';

        return (
          eval(window.Babel.transform(`
            <AmauiStyleProvider value={a}>
                <A>
                  a

                  <AmauiStyleProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiStyleProvider>
                </A>
            </AmauiStyleProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[1].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  group('useAmauiStyle', () => {

    to('useAmauiStyle', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const value = [];

        const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const [amauiStyle] = useAmauiStyle();

          value.push(amauiStyle);

          return (
            eval(window.Babel.transform(`
            <a>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const a = new AmauiStyle();

          a.a = 'a';

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          return (
            eval(window.Babel.transform(`
            <AmauiStyleProvider value={a}>
                <A>
                  a

                  <AmauiStyleProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiStyleProvider>
                </A>
            </AmauiStyleProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        return [
          value.length === 2,
          value.every(item => item instanceof AmauiStyle),
          value[0].a === 'a',
          value[1].a === 'a1'
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        ...new Array(4).fill(true)
      ]));
    });

    group('update', () => {

      to('update', async () => {
        const valueBrowsers = await evaluate(async (window: any) => {
          const value = [];

          const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

          const A = (props) => {
            const [amauiStyle, setAmauiTheme] = useAmauiStyle();

            window.React.useEffect(() => {
              value.push(amauiStyle.a);

              setTimeout(() => {
                setAmauiTheme({
                  a: 14
                });
              });
            }, []);

            window.React.useEffect(() => {
              if (amauiStyle?.a === 14) value.push(amauiStyle.a);
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
            const a = new AmauiStyle();

            a.a = 'a';

            const a1 = new AmauiStyle();

            a1.a = 'a1';

            return (
              eval(window.Babel.transform(`
              <AmauiStyleProvider value={a}>
                  <A>
                    a

                    <div>
                      <AmauiStyleProvider value={a1}>
                        <A>
                          a1
                        </A>
                      </AmauiStyleProvider>
                    </div>
                  </A>
              </AmauiStyleProvider>
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
            'a1',
            'a',
            ...new Array(2).fill(14)
          ],
          [
            'a1',
            'a',
            ...new Array(3).fill(14)
          ]
        ]));
      });

      group('override', () => {

        to('true', async () => {
          const valueBrowsers = await evaluate(async (window: any) => {
            const value = [];

            const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

            const A = (props) => {
              const [amauiStyle, setAmauiTheme] = useAmauiStyle();

              window.React.useEffect(() => {
                value.push(amauiStyle.a);

                setTimeout(() => {
                  setAmauiTheme({
                    a: 14
                  }, true);
                });
              }, []);

              window.React.useEffect(() => {
                if (amauiStyle?.a === 14) value.push(amauiStyle);
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
              const a = new AmauiStyle();

              a.a = 'a';

              const a1 = new AmauiStyle();

              a1.a = 'a1';

              return (
                eval(window.Babel.transform(`
              <AmauiStyleProvider value={a}>
                  <A>
                    a

                    <div>
                      <AmauiStyleProvider value={a1}>
                        <A>
                          a1
                        </A>
                      </AmauiStyleProvider>
                    </div>
                  </A>
              </AmauiStyleProvider>
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
            'a1',
            'a',
            ...new Array(4).fill({ a: 14 })
          ]));
        });

        to('false', async () => {
          const valueBrowsers = await evaluate(async (window: any) => {
            const value = [];

            const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

            const A = (props) => {
              const [amauiStyle, setAmauiTheme] = useAmauiStyle();

              window.React.useEffect(() => {
                value.push(amauiStyle.a);

                setTimeout(() => {
                  setAmauiTheme({
                    a: 14
                  }, false);
                });
              }, []);

              window.React.useEffect(() => {
                if (amauiStyle?.a === 14) value.push(amauiStyle.a);
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
              const a = new AmauiStyle();

              a.a = 'a';

              const a1 = new AmauiStyle();

              a1.a = 'a1';

              return (
                eval(window.Babel.transform(`
              <AmauiStyleProvider value={a}>
                  <A>
                    a

                    <div>
                      <AmauiStyleProvider value={a1}>
                        <A>
                          a1
                        </A>
                      </AmauiStyleProvider>
                    </div>
                  </A>
              </AmauiStyleProvider>
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
              'a1',
              'a',
              ...new Array(2).fill(14)
            ],
            [
              'a1',
              'a',
              ...new Array(3).fill(14)
            ]
          ]));
        });

      });

    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider } = AmauiStyleReact;

      const amauiStyle = new AmauiStyle();

      const App = () => {
        return (
          <AmauiStyleProvider value={amauiStyle}>
            a
          </AmauiStyleProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<div>a</div>');

      assert(amauiStyle.css).eq(``);
    });

  });

});
