/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('use cases', () => {

  group('AmauiStyle optimize', () => {

    to('default', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { AmauiStyleProvider, AmauiStyle, style } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = (props) => {
          const styles = useStyle(props);

          return (
            eval(window.Babel.transform(`
              <a className={styles.class}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = (props) => {
          const styles = useStyle1(props);

          return (
            eval(window.Babel.transform(`
              <a className={styles.class}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const amauiStyle = new AmauiStyle(undefined, undefined, undefined);

          return (
            eval(window.Babel.transform(`
              <AmauiStyleProvider value={amauiStyle}>
                  <A a={1}>a</A>

                  <A1 a={14}>a1</A1>
              </AmauiStyleProvider>
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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div data-amaui-style=\"true\"><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
      ]));
    });

    to('true', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { AmauiStyleProvider, AmauiStyle, style } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = (props) => {
          const styles = useStyle(props);

          return (
            eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = (props) => {
          const styles = useStyle1(props);

          return (
            eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const amauiStyle = new AmauiStyle(undefined, undefined, undefined, { optimize: true });

          return (
            eval(window.Babel.transform(`
            <AmauiStyleProvider value={amauiStyle}>
                <A a={1}>a</A>

                <A1 a={14}>a1</A1>
            </AmauiStyleProvider>
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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div data-amaui-style=\"true\"><a class=\"a-0 a1-1\">a</a><a class=\"a-0 a1-2\">a1</a></div>"
      ]));
    });

    to('false', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { AmauiStyleProvider, AmauiStyle, style } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = (props) => {
          const styles = useStyle(props);

          return (
            eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A1 = (props) => {
          const styles = useStyle1(props);

          return (
            eval(window.Babel.transform(`
            <a className={styles.class}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {
          const amauiStyle = new AmauiStyle(undefined, undefined, undefined, { optimize: false });

          return (
            eval(window.Babel.transform(`
            <AmauiStyleProvider value={amauiStyle}>
                <A a={1}>a</A>

                <A1 a={14}>a1</A1>
            </AmauiStyleProvider>
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
        4,
        [
          [
            ".a-0 { width: 100px; }"
          ],
          [
            ".a1-2 { color: yellow; }"
          ],
          [
            ".a-1 { width: 100px; }"
          ],
          [
            ".a1-3 { color: orange; }"
          ]
        ],
        "<div data-amaui-style=\"true\"><a class=\"a-0 a1-2\">a</a><a class=\"a-1 a1-3\">a1</a></div>"
      ]));
    });

  });

  group('Multiple elements, same default amauiStyle instance', () => {

    to('Multiple elements, same default amauiStyle instance', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled } = window.AmauiStyleWebComponents;

        const A = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a')(theme => ({
          a: {
            color: 'yellow'
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

                <A14 a={14}>a1</A14>
                <A14 a={14}>a1</A14>
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
        5,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          [
            ".a1-1 { color: yellow; }"
          ],
          [],
          [
            ".a1-2 { color: orange; }"
          ],
          [
            ".a1-3 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a><a class=\"a-0 a1-3\" a=\"14\">a1</a></div>"
      ]));
    });

    group('ssr', () => {

      //       to('renderToString', async () => {
      //         const { AmauiStyleProvider, AmauiStyle, styled } = AmauiStyleReact;

      //         const amauiStyle = new AmauiStyle();

      //         const A = styled('a')(theme => ({
      //           a: {
      //             color: 'yellow'
      //           },

      //           a1: {
      //             color: props => props.a === 1 ? 'yellow' : 'orange',
      //           }
      //         }));

      //         const A14 = styled('a')(theme => ({
      //           a: {
      //             color: 'yellow'
      //           },

      //           a1: {
      //             color: 'orange'
      //           },

      //           a14: {
      //             color: props => props.a === 1 ? 'yellow' : 'orange',
      //           }
      //         }));

      //         const App = () => {
      //           return (
      //             <AmauiStyleProvider value={amauiStyle}>
      //               <A a={1}>a</A>

      //               <A14 a={14}>a14</A14>
      //               <A14 a={14}>a114</A14>
      //             </AmauiStyleProvider>
      //           );
      //         };

      //         const value = ReactDOMServer.renderToString(React.createElement(App, null));

      //         assert(value).eq('<div><a class="a-0" a="1">a</a><a class="a-0 a1-1" a="14">a14</a><a class="a-0 a1-1" a="14">a114</a></div>');

      //         assert(amauiStyle.css).eq(`

      // .a-0 {
      //   color: yellow;
      // }

      // .a1-1 {
      //   color: orange;
      // }

      // `);
      //       });

    });

  });

});
