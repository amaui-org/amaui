/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/string', () => {

  to('string', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { string } = window.AmauiStyleReact;

      const A = (props) => {
        const classNameProp = string`
            color: yellow;
        `;

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
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      [
        [
          ".a-0 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  to('sr', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { sr } = window.AmauiStyleReact;

      const A = (props) => {
        const classNameProp = sr`
            color: yellow;
        `;

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
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      [
        [
          ".a-0 { color: yellow; }"
        ]
      ],
      "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { string } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = string`
            color: yellow;
        `;

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
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: yellow; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-0\">a1</a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { string, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const amauiTheme = useAmauiTheme();

          const classNameProp = string`
            color: ${amauiTheme.palette.text.default.primary}
          `;

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              amauiTheme.updateWithRerender({
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

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];
      console.log(JSON.stringify(values[0], null, 2));

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<div data-amaui-theme=\"true\"><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { string } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = string`
            color: ${props.a === 1 ? 'yellow' : 'orange'}
          `;

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

        await window.AmauiUtils.wait(440);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>",
        1,
        [
          [
            ".a-0 { color: orange; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-1\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { string } = window.AmauiStyleReact;

        const A = (props) => {
          const classNameProp = string`
            color: yellow;
          `;

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

        await window.AmauiUtils.wait(440);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          []
        ],
        "<div><a class=\"a-0\">a</a><a class=\"a-0\">a</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, string } = AmauiStyleReact;

      const amauiStyle = new AmauiStyle();

      const A = (props) => {
        const classNameProp = string`
          color: yellow;
        `;

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

      assert(value).eq('<div><div><a class="a-0">a</a><a class="a-0">a1</a></div></div>');

      assert(amauiStyle.css).eq(`

.a-0 {
  color: yellow;
}

`);
    });

  });

});
