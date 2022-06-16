/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/className', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  preEveryTo(async () => {
    await evaluate((window: any) => {
      Array.from(window.document.styleSheets).forEach((sheet: StyleSheet) => sheet.ownerNode.remove());

      window.document.body.innerHTML = `<div id='app'></div>`;

      window.value = [];
    }, { browsers });
  });

  to('className', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { className } = window.AmauiStyleReact;

      const A = (props) => {
        const classNameProp = className(theme => ({
          a: {
            color: 'yellow'
          }
        }), props);

        return (
          eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
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
    }, { browsers });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        [
          ".a-1 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-1\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { className } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: 'yellow'
            }
          }), props);

          return (
            eval(window.Babel.transform(`
              <a className={classNameProp}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
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
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-2 { color: yellow; }"
          ],
          [
            ".a-3 { color: yellow; }"
          ]
        ],
        "<div><a class=\"a-2\">a</a><a class=\"a-3\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: theme.palette.text.default.primary
            }
          }), props);

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
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <AmauiThemeProvider>
                  <A>a</A>
                  <A>a</A>
              </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(170);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-4 { color: rgba(0, 0, 0, 0.87); }"
          ],
          [
            ".a-5 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<a class=\"a-4\">a</a><a class=\"a-5\">a</a>",
        2,
        [
          [
            ".a-4 { color: rgba(0, 0, 0, 0.87); }"
          ],
          [
            ".a-5 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<a class=\"a-4\">a</a><a class=\"a-5\">a</a>",
        2,
        [
          [
            ".a-4 { color: rgba(255, 255, 255, 0.87); }"
          ],
          [
            ".a-5 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<a class=\"a-4\">a</a><a class=\"a-5\">a</a>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: props => props.a === 1 ? 'yellow' : 'orange',
            }
          }), props);

          return (
            eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

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

        await window.AmauiUtils.wait(170);

        return window.value;
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-6 { color: yellow; }"
          ],
          [
            ".a-7 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-6\">a</a><a class=\"a-7\">a</a></div>",
        2,
        [
          [
            ".a-6 { color: orange; }"
          ],
          [
            ".a-7 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-6\">a</a><a class=\"a-7\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = className(theme => ({
            a: {
              color: props => props.a === 1 ? 'yellow' : 'orange',
            }
          }), props);

          return (
            eval(window.Babel.transform(`
            <a className={classNameProp}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

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

        await window.AmauiUtils.wait(170);

        return window.value;
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        2,
        [
          [
            ".a-8 { color: orange; }"
          ],
          [
            ".a-9 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-8\">a</a><a class=\"a-9\">a</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, className } = AmauiStyleReact;

      const amauiStyle = new AmauiStyle();

      const A = (props) => {
        const classNameProp = className(theme => ({
          a: {
            color: 'yellow'
          }
        }), props);

        return (
          <a className={classNameProp}>
            {props.children}
          </a>
        );
      };

      const App = () => {
        return (
          <AmauiStyleProvider value={amauiStyle}>
            <AmauiThemeProvider>
              <A>a</A>
              <A>a1</A>
            </AmauiThemeProvider>
          </AmauiStyleProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<a class="a-0">a</a><a class="a-0">a1</a>');

      assert(amauiStyle.css).eq(`

.a-0 {
color: yellow;
}

`);
    });

  });

});
