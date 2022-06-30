/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('use cases', () => {

  group('AmauiStyle optimize', () => {

    to('default', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { style, AmauiStyle, AmauiStyleProvider } = window.AmauiStyleWebComponents;

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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        class A1 extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle1(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a1')) window.customElements.define('a-a1', A1);

        AmauiStyleProvider.prototype.protoValue = new AmauiStyle();

        const App = () => {
          return (
            eval(window.Babel.transform(`
              <amaui-style>
                  <a-a a={1}>a</a-a>

                  <a-a1 a={14}>a1</a-a1>
              </amaui-style>
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
        "<amaui-style data-amaui-style=\"true\"><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a1 a=\"14\" class=\"a-0 a1-2\">a1</a-a1></amaui-style>"
      ]));
    });

    to('true', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { style, AmauiStyle, AmauiStyleProvider } = window.AmauiStyleWebComponents;

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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        class A1 extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle1(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a1')) window.customElements.define('a-a1', A1);

        AmauiStyleProvider.prototype.protoValue = new AmauiStyle(undefined, undefined, undefined, { optimize: true });

        const App = () => {
          return (
            eval(window.Babel.transform(`
              <amaui-style>
                  <a-a a={1}>a</a-a>

                  <a-a1 a={14}>a1</a-a1>
              </amaui-style>
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
        "<amaui-style data-amaui-style=\"true\"><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a1 a=\"14\" class=\"a-0 a1-2\">a1</a-a1></amaui-style>"
      ]));
    });

    to('false', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { style, AmauiStyle, AmauiStyleProvider } = window.AmauiStyleWebComponents;

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

        const useStyle1 = style(theme => ({
          a: {
            width: '100px',
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        class A1 extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.useStyle = useStyle1(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.styles = this.useStyle.add();

            this.className = this.styles.class;
          }

          disconnectedCallback() {
            this.useStyle.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a1')) window.customElements.define('a-a1', A1);

        AmauiStyleProvider.prototype.protoValue = new AmauiStyle(undefined, undefined, undefined, { optimize: false });

        const App = () => {
          return (
            eval(window.Babel.transform(`
              <amaui-style>
                  <a-a a={1}>a</a-a>

                  <a-a1 a={14}>a1</a-a1>
              </amaui-style>
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
          [
            ".a-2 { width: 100px; }"
          ],
          [
            ".a1-3 { color: orange; }"
          ]
        ],
        "<amaui-style data-amaui-style=\"true\"><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a1 a=\"14\" class=\"a-2 a1-3\">a1</a-a1></amaui-style>"
      ]));
    });

  });

  group('Multiple elements, same default amauiStyle instance', () => {

    to('Multiple elements, same default amauiStyle instance', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled } = window.AmauiStyleWebComponents;

        const A = styled('a', 'a-a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a', 'a-a14')(theme => ({
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
                <a-a a={1}>a</a-a>

                <a-a14 a={14}>a1</a-a14>
                <a-a14 a={14}>a1</a-a14>
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
        "<div><a-a a=\"1\" class=\"a-0 a1-1\">a</a-a><a-a14 a=\"14\" class=\"a-0 a1-2\">a1</a-a14><a-a14 a=\"14\" class=\"a-0 a1-3\">a1</a-a14></div>"
      ]));
    });

    group('ssr', () => {

      // to('renderToString', async () => {
      //   const { AmauiStyleProvider, AmauiStyle, styled } = AmauiStyleReact;

      //   const amauiStyle = new AmauiStyle();

      //   const A = styled('a')(theme => ({
      //     a: {
      //       color: 'yellow'
      //     },

      //     a1: {
      //       color: props => props.a === 1 ? 'yellow' : 'orange',
      //     }
      //   }));

      //   const A14 = styled('a')(theme => ({
      //     a: {
      //       color: 'yellow'
      //     },

      //     a1: {
      //       color: 'orange'
      //     },

      //     a14: {
      //       color: props => props.a === 1 ? 'yellow' : 'orange',
      //     }
      //   }));

      //   const App = () => {
      //     return (
      //       <AmauiStyleProvider value={amauiStyle}>
      //         <A a={1}>a</a-a>

      //         <A14 a={14}>a14</A14>
      //         <A14 a={14}>a114</A14>
      //       </AmauiStyleProvider>
      //     );
      //   };

      //   const value = ReactDOMServer.renderToString(React.createElement(App, null));

      //   assert(value).eq('<div><a class="a-0" a="1">a</a><a class="a-0 a1-1" a="14">a14</a><a class="a-0 a1-1" a="14">a114</a></div>');

      //   assert(amauiStyle.css).eq(`

      // .a-0 {
      //   color: yellow;
      // }

      // .a1-1 {
      //   color: orange;
      // }

      // `);
      // });

    });

  });

});
