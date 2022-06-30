/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-web-components/className', () => {

  to('className', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { className } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {
        useStyle;

        connectedCallback() {
          this.useStyle = className(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
            a: {
              color: 'yellow'
            }
          }));

          this.className = this.useStyle.value;
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
                <a-a>a</a-a>

                <a-a>a1</a-a>
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
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        []
      ],
      "<div><a-a class=\"a-0\">a</a-a><a-a class=\"a-0\">a1</a-a></div>"
    ]));
  });

  to('c', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { c } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {
        useStyle;

        connectedCallback() {
          this.useStyle = c(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
            a: {
              color: 'yellow'
            }
          }));

          this.className = this.useStyle.value;
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
                <a-a>a</a-a>

                <a-a>a1</a-a>
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
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        []
      ],
      "<div><a-a class=\"a-0\">a</a-a><a-a class=\"a-0\">a1</a-a></div>"
    ]));
  });

  to('cs', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { cs } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {
        useStyle;

        connectedCallback() {
          this.useStyle = cs(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
            a: {
              color: 'yellow'
            }
          }));

          this.className = this.useStyle.value;
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
                <a-a>a</a-a>

                <a-a>a1</a-a>
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
      2,
      [
        [
          ".a-0 { color: yellow; }"
        ],
        []
      ],
      "<div><a-a class=\"a-0\">a</a-a><a-a class=\"a-0\">a1</a-a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { className } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;

          connectedCallback() {
            this.useStyle = className(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
              a: {
                color: 'yellow'
              }
            }));

            this.className = this.useStyle.value;
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
                <a-a>a</a-a>

                <a-a>a1</a-a>
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
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          []
        ],
        "<div><a-a class=\"a-0\">a</a-a><a-a class=\"a-0\">a1</a-a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className, useAmauiTheme } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = className(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
              a: {
                color: theme.palette.text.default.primary
              }
            }));

            this.className = this.useStyle.value;

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

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        [
          [
            ".a-0 { color: rgba(0, 0, 0, 0.87); }"
          ]
        ],
        "<amaui-theme data-amaui-theme=\"true\"><a-a class=\"a-0\">a</a-a></amaui-theme>",
        1,
        [
          [
            ".a-0 { color: rgba(255, 255, 255, 0.87); }"
          ]
        ],
        "<amaui-theme data-amaui-theme=\"true\"><a-a class=\"a-0\">a</a-a></amaui-theme>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;

          static get observedAttributes() {
            return ['a'];
          }

          connectedCallback() {
            this.useStyle = className(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
              a: {
                color: props => props.a === 1 ? 'yellow' : 'orange'
              }
            }));

            this.className = this.useStyle.value;
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
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a-a a=\"1\" class=\"a-0\">a</a-a><a-a class=\"a-1\">a</a-a></div>",
        2,
        [
          [
            ".a-0 { color: orange; }"
          ],
          [
            ".a-1 { color: orange; }"
          ]
        ],
        "<div><a-a a=\"14\" class=\"a-0\">a</a-a><a-a class=\"a-1\">a</a-a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { className } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;

          connectedCallback() {
            this.useStyle = className(this, window.AmauiStyleWebComponents.getAttributeValues(this))(theme => ({
              a: {
                color: 'yellow'
              }
            }));

            this.className = this.useStyle.value;
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
        2,
        [
          [
            ".a-0 { color: yellow; }"
          ],
          []
        ],
        "<div><a-a class=\"a-0\">a</a-a><a-a class=\"a-0\">a</a-a></div>",
        0,
        [],
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    //     to('renderToString', async () => {
    //       const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, className } = AmauiStyleReact;

    //       const amauiStyle = new AmauiStyle();

    //       const A = (props) => {
    //         const classNameProp = className(theme => ({
    //           a: {
    //             color: 'yellow'
    //           },
    //           a1: {
    //             background: 'orange'
    //           }
    //         }), props);

    //         return (
    //           <a className={classNameProp}>
    //             {props.children}
    //           </a>
    //         );
    //       };

    //       const App = () => {
    //         return (
    //           <AmauiStyleProvider value={amauiStyle}>
    //             <AmauiThemeProvider>
    //               <a-a>a</a-a>

    //               <a-a>a1</a-a>
    //             </AmauiThemeProvider>
    //           </AmauiStyleProvider>
    //         );
    //       };

    //       const value = ReactDOMServer.renderToString(React.createElement(App, null));

    //       assert(value).eq('<div><div><a class="a-0 a1-1">a</a><a class="a-0 a1-1">a1</a></div></div>');

    //       assert(amauiStyle.css).eq(`

    // .a-0 {
    //   color: yellow;
    // }

    // .a1-1 {
    //   background: orange;
    // }

    // `);
    //     });

  });

});
