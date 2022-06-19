/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/withStyle', () => {

  to('withStyle', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { withStyle } = window.AmauiStyleReact;

      const A1 = (props) => {
        const styles = props.styles;

        return (
          eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const A = withStyle(A1)(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A a={1}>a</A>

                <A a={14}>a1</A>
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

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

  to('w', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { w } = window.AmauiStyleReact;

      const A1 = (props) => {
        const styles = props.styles;

        return (
          eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const A = w(A1)(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A a={1}>a</A>

                <A a={14}>a1</A>
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

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
        const { withStyle } = window.AmauiStyleReact;

        const A1 = (props) => {
          const styles = props.styles;

          return (
            eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const A = withStyle(A1)(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <div>
                  <A a={1}>a</A>

                  <A a={14}>a1</A>
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

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

        const { withStyle, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A1 = (props) => {
          const styles = props.styles;

          const [theme] = useAmauiTheme();

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              theme.update({
                palette: {
                  light: false
                }
              });
            }, 140);
          }, []);

          return (
            eval(window.Babel.transform(`
              <a className={styles.class}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const A = withStyle(A1)(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: theme.palette.text.default.primary
          }
        }));

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <AmauiThemeProvider>
                  <A>a</A>
              </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

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

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { withStyle } = window.AmauiStyleReact;

        const A1 = (props) => {
          const styles = props.styles;

          return (
            eval(window.Babel.transform(`
              <a className={styles.class}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const A = withStyle(A1)(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }
        }));

        const App = () => {
          const [a, setA] = window.React.useState(1);

          window.React.useEffect(() => {
            setTimeout(() => {
              setA(14);
            }, 140);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [a]);

          return (
            eval(window.Babel.transform(`
              <div>
                  <A a={a}>a</A>
                  <A>a</A>
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(440);

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
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a</a></div>",
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
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { withStyle } = window.AmauiStyleReact;

        const A1 = (props) => {
          const styles = props.styles;

          return (
            eval(window.Babel.transform(`
              <a className={styles.class}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const A = withStyle(A1)(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }
        }));

        const App = () => {
          const [elements, setElements] = window.React.useState(true);

          window.React.useEffect(() => {
            setTimeout(() => {
              setElements(false);
            }, 140);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [elements]);

          return (
            eval(window.Babel.transform(`
              <div>
                  {elements && (
                    <window.React.Fragment>
                      <A>a</A>
                      <A>a</A>
                    </window.React.Fragment>
                  )}
              </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(440);

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
            ".a1-1 { color: orange; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, withStyle } = AmauiStyleReact;

      const amauiStyle = new AmauiStyle();

      const A1 = (props) => {
        const styles = props.styles;

        return (
          <a className={styles.class}>
            {props.children}
          </a>
        );
      };

      const A = withStyle(A1)(theme => ({
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

      const App = () => {
        return (
          <AmauiStyleProvider value={amauiStyle}>
            <AmauiThemeProvider>
              <A>
                a
              </A>
            </AmauiThemeProvider>
          </AmauiStyleProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

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
