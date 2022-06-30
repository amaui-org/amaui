/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-web-components/styled', () => {

  to('styled', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { styled } = window.AmauiStyleWebComponents;

      const A = styled('a', 'a-a')(theme => ({
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
                <a-a a={1}>a</a-a>

                <a-a a={14}>a1</a-a>
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
      "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a a=\"14\" class=\"a-0 a1-2\">a1</a-a></div>"
    ]));
  });

  to('sy', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { sy } = window.AmauiStyleWebComponents;

      const A = sy('a', 'a-a')(theme => ({
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
                <a-a a={1}>a</a-a>

                <a-a a={14}>a1</a-a>
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
      "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a a=\"14\" class=\"a-0 a1-2\">a1</a-a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled } = window.AmauiStyleWebComponents;

        styled('a', 'a-a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }
        }));

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <div>
                  <a-a a={1}>a</a-a>

                  <a-a a={14}>a1</a-a>
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
        "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a a=\"14\" class=\"a-0 a1-2\">a1</a-a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleWebComponents;

        styled('a', 'a-a')(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: theme.palette.text.default.primary
          }
        }));

        class Ad extends HTMLElement {

          connectedCallback() {
            window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

            const amauiTheme = useAmauiTheme(this);

            amauiTheme.update({ palette: { light: false } });
          }

        }

        // Add element
        if (!window.customElements.get('a-ad')) window.customElements.define('a-ad', Ad);

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <amaui-theme>
                  <a-ad>
                    <a-a>a</a-a>
                  </a-ad>
              </amaui-theme>
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
        0,
        [],
        "<amaui-theme data-amaui-theme=\"true\"><a-ad><a-a>a</a-a></a-ad></amaui-theme>",
        1,
        [
          [
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<amaui-theme data-amaui-theme=\"true\"><a-ad><a-a class=\"a-0 a1-1\">a</a-a></a-ad></amaui-theme>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled } = window.AmauiStyleWebComponents;

        styled('a', 'a-a', ['a'])(theme => ({
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
                  <a-a a={a}>a</a-a>

                  <a-a>a</a-a>
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
        "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></div>",
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
        "<div><a-a a=\"14\" class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { styled } = window.AmauiStyleWebComponents;

        styled('a', 'a-a')(theme => ({
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
                      <a-a a={1}>a</a-a>

                      <a-a>a</a-a>
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
            ".a1-1 { color: yellow; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    //     to('renderToString', async () => {
    //       const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, styled } = AmauiStyleReact;

    //       const amauiStyle = new AmauiStyle();

    //       const A = styled('a')(theme => ({
    //         a: {
    //           width: '100px',
    //         },

    //         a1: {
    //           color: theme.palette.text.default.primary
    //         },

    //         a4: {
    //           background: props => props.a === 1 ? 'yellow' : 'orange'
    //         }
    //       }));

    //       const App = () => {
    //         return (
    //           <AmauiStyleProvider value={amauiStyle}>
    //             <AmauiThemeProvider>
    //               <a-a>
    //                 a
    //               </a-a>
    //             </AmauiThemeProvider>
    //           </AmauiStyleProvider>
    //         );
    //       };

    //       const value = ReactDOMServer.renderToString(React.createElement(App, null));

    //       assert(value).eq('<div><div><a class="a-0 a1-1">a</a></div></div>');

    //       assert(amauiStyle.css).eq(`

    // .a-0 {
    //   width: 100px;
    // }

    // .a1-1 {
    //   color: rgba(0, 0, 0, 0.87);
    // }

    // `);
    //     });

  });

});
