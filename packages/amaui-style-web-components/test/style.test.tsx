/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-web-components/style', () => {

  to('style', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { style } = window.AmauiStyleWebComponents;

      const useStyle = style(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      class A extends HTMLElement {
        useStyle;
        styles;

        connectedCallback() {
          this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

          this.styles = this.useStyle.add();

          this.className = this.styles.class;
        }

        disconnectedCallback() {
          this.useStyle.remove();
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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

  to('s', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { s } = window.AmauiStyleWebComponents;

      const useStyle = s(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: props => props.a === 1 ? 'yellow' : 'orange',
        }
      }));

      class A extends HTMLElement {
        useStyle;
        styles;

        connectedCallback() {
          this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

          this.styles = this.useStyle.add();

          this.className = this.styles.class;
        }

        disconnectedCallback() {
          this.useStyle.remove();
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
        const { style } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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

        const { style, useAmauiTheme } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: theme.palette.text.default.primary
          }
        }));

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;

            window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

            const amauiTheme = useAmauiTheme(this);

            amauiTheme.update({ palette: { light: false } });
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <amaui-theme>
                  <a-a>a</a-a>
              </amaui-theme>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(140);

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
        "<amaui-theme data-amaui-theme=\"true\"><a-a class=\"a-0 a1-1\">a</a-a></amaui-theme>",
        1,
        [
          [
            ".a-0 { width: 100px; }",
            ".a1-1 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<amaui-theme data-amaui-theme=\"true\"><a-a class=\"a-0 a1-1\">a</a-a></amaui-theme>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style, useAmauiTheme } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }
        }));

        class A extends HTMLElement {
          useStyle;
          styles;

          static get observedAttributes() {
            return ['a'];
          }

          connectedCallback() {
            this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;

            const amauiTheme = useAmauiTheme(this);

            amauiTheme.update({ palette: { light: false } });
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.useStyle?.updateProps(window.AmauiStyleWebComponents.getAttributeValues(this));
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
              <amaui-theme>
                  <a-a a={a}>a</a-a>

                  <a-a>a</a-a>
              </amaui-theme>
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
        "<amaui-theme data-amaui-theme=\"true\"><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></amaui-theme>",
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
        "<amaui-theme data-amaui-theme=\"true\"><a-a a=\"14\" class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></amaui-theme>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { style } = window.AmauiStyleWebComponents;

        const useStyle = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

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
                      <a-a>a</a-a>

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
            ".a1-1 { color: orange; }"
          ],
          [
            ".a1-2 { color: orange; }"
          ]
        ],
        "<div><a-a class=\"a-0 a1-1\">a</a-a><a-a class=\"a-0 a1-2\">a</a-a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    //     to('renderToString', async () => {
    //       const { AmauiStyle, AmauiStyleProvider, style } = AmauiStyleWebComponents;

    //       const amauiStyle = new AmauiStyle();

    //       const useStyle = style(theme => ({
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

    //       class A extends HTMLElement {
    //         useStyle;
    //         styles;

    //         constructor() {
    //           super();

    //           this.useStyle = useStyle(this, AmauiStyleWebComponents.getAttributeValues(this));

    //           this.className = this.styles.class;
    //         }

    //         connectedCallback() {
    //           this.styles = this.useStyle.add();

    //           this.className = this.styles.class;
    //         }

    //         disconnectedCallback() {
    //           this.useStyle.remove();
    //         }

    //       }

    //       // Add element
    //       if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

    //       AmauiStyleProvider.prototype.value = amauiStyle;

    //       const App = () => {
    //         return (
    //           <amaui-style>
    //             <amaui-theme>
    //               <a-a>
    //                 a
    //               </a-a>
    //             </amaui-theme>
    //           </amaui-style>
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
