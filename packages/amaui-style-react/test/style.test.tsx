/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../../../utils/js/test/utils';

group('@amaui/style-react/style', () => {
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

  to('style', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { style } = window.AmauiStyleReact;

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

        return window.React.createElement(
          'a',
          { className: styles.class },
          props.children
        );
      };

      const App = () => {
        return window.React.createElement(
          'div',
          null,
          window.React.createElement(
            A,
            { a: 1 },
            'a'
          ),
          window.React.createElement(
            A,
            { a: 14 },
            'a1'
          )
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
        const { style } = window.AmauiStyleReact;

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

          return window.React.createElement(
            'a',
            { className: styles.class },
            props.children
          );
        };

        const App = () => {
          return window.React.createElement(
            'div',
            null,
            window.React.createElement(
              A,
              { a: 1 },
              'a'
            ),
            window.React.createElement(
              A,
              { a: 14 },
              'a1'
            )
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
        3,
        [
          [
            ".a-3 { width: 100px; }"
          ],
          [
            ".a1-4 { color: yellow; }"
          ],
          [
            ".a1-5 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-3 a1-4\">a</a><a class=\"a-3 a1-5\">a1</a></div>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style } = window.AmauiStyleReact;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = props => {
          const styles = useStyle(props);

          return /*#__PURE__*/window.React.createElement("a", {
            className: styles.class
          }, 'a');
        };

        const App = () => {
          const [a, setA] = window.React.useState(1);

          window.React.useEffect(() => {
            setTimeout(() => {
              setA(14);
            }, 1400);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [a]);

          return /*#__PURE__*/window.React.createElement("div", null, window.React.createElement(A, { a }), /*#__PURE__*/window.React.createElement(A, null));
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(1440);

        return window.value;
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        3,
        [
          [
            ".a-6 { width: 100px; }"
          ],
          [
            ".a1-7 { color: yellow; }"
          ],
          [
            ".a1-8 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-6 a1-7\">a</a><a class=\"a-6 a1-8\">a</a></div>",
        3,
        [
          [
            ".a-6 { width: 100px; }"
          ],
          [
            ".a1-7 { color: orange; }"
          ],
          [
            ".a1-8 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-6 a1-7\">a</a><a class=\"a-6 a1-8\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style } = window.AmauiStyleReact;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = props => {
          const styles = useStyle(props);

          return /*#__PURE__*/window.React.createElement("a", {
            className: styles.class
          }, 'a');
        };

        const App = () => {
          const [elements, setElements] = window.React.useState(true);

          window.React.useEffect(() => {
            setTimeout(() => {
              setElements(false);
            }, 1400);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [elements]);

          return /*#__PURE__*/window.React.createElement("div", null, elements && /*#__PURE__*/window.React.createElement(window.React.Fragment, null, /*#__PURE__*/window.React.createElement(A, null), /*#__PURE__*/window.React.createElement(A, null)));
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(1440);

        return window.value;
      }, { browsers });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        3,
        [
          [
            ".a-9 { width: 100px; }"
          ],
          [
            ".a1-10 { color: orange; }"
          ],
          [
            ".a1-11 { color: orange; }"
          ]
        ],
        "<div><a class=\"a-9 a1-10\">a</a><a class=\"a-9 a1-11\">a</a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

});
