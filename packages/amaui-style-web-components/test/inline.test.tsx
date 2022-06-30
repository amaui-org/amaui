/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-web-components/inline', () => {

  to('inline', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { inline } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {
        useStyle;
        styles;

        connectedCallback() {
          this.setAttribute('style', inline(this)(theme => ({
            color: 'yellow',
            backgroundColor: 'orange'
          })));
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
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      "<div><a-a style=\"color: yellow; background-color: orange;\">a</a-a><a-a style=\"color: yellow; background-color: orange;\">a1</a-a></div>"
    ]));
  });

  to('i', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { i } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {
        useStyle;
        styles;

        connectedCallback() {
          this.setAttribute('style', i(this)(theme => ({
            color: 'yellow',
            backgroundColor: 'orange'
          })));
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
        window.document.getElementById('app').innerHTML
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      "<div><a-a style=\"color: yellow; background-color: orange;\">a</a-a><a-a style=\"color: yellow; background-color: orange;\">a1</a-a></div>"
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { inline } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.setAttribute('style', inline(this)(theme => ({
              color: 'yellow',
              backgroundColor: 'orange'
            })));
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
          window.document.getElementById('app').innerHTML
        ];
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div><a-a style=\"color: yellow; background-color: orange;\">a</a-a><a-a style=\"color: yellow; background-color: orange;\">a1</a-a></div>"
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline, useAmauiTheme } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.setAttribute('style', inline(this)(theme => ({
              color: theme.palette.text.default.primary,
              backgroundColor: 'orange'
            }), window.AmauiStyleWebComponents.getAttributeValues(this)));

            window.value.push(window.document.getElementById('app').innerHTML);

            const amauiTheme = useAmauiTheme(this);

            amauiTheme.update({ palette: { light: false } });
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <amaui-theme>
                  <a-a>a</a-a>

                  <a-a>a</a-a>
              </amaui-theme>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<amaui-theme data-amaui-theme=\"true\"><a-a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a-a><a-a>a</a-a></amaui-theme>",
        "<amaui-theme data-amaui-theme=\"true\"><a-a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a-a><a-a style=\"color: rgba(255, 255, 255, 0.87); background-color: orange;\">a</a-a></amaui-theme>",
        "<amaui-theme data-amaui-theme=\"true\"><a-a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a-a><a-a style=\"color: rgba(255, 255, 255, 0.87); background-color: orange;\">a</a-a></amaui-theme>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;
          styles;

          static get observedAttributes() {
            return ['a'];
          }

          connectedCallback() {
            this.setAttribute('style', inline(this)(theme => ({
              color: props => props.a === 1 ? 'yellow' : 'orange',
              backgroundColor: 'orange'
            }), window.AmauiStyleWebComponents.getAttributeValues(this)));
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.setAttribute('style', inline(this)(theme => ({
              color: props => props.a === 1 ? 'yellow' : 'orange',
              backgroundColor: 'orange'
            }), window.AmauiStyleWebComponents.getAttributeValues(this)));
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
              window.value.push(window.document.getElementById('app').innerHTML);

              setA(14);
            }, 140);
          }, []);

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

        window.value.push(window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      values.forEach(value => assert(value).eql([
        "<div><a-a a=\"1\" style=\"background-color: orange; color: yellow;\">a</a-a><a-a style=\"background-color: orange; color: orange;\">a</a-a></div>",
        "<div><a-a a=\"14\" style=\"background-color: orange; color: orange;\">a</a-a><a-a style=\"background-color: orange; color: orange;\">a</a-a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline } = window.AmauiStyleWebComponents;

        class A extends HTMLElement {
          useStyle;
          styles;

          connectedCallback() {
            this.setAttribute('style', inline(this)(theme => ({
              color: 'yellow',
              backgroundColor: 'orange'
            })));
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
              window.value.push(window.document.getElementById('app').innerHTML);
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
        "<div><a-a a=\"1\" style=\"color: yellow; background-color: orange;\">a</a-a><a-a style=\"color: yellow; background-color: orange;\">a</a-a></div>",
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    // to('renderToString', async () => {
    //   const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, inline } = AmauiStyleReact;

    //   const amauiStyle = new AmauiStyle();

    //   const A = (props) => {
    //     const style = inline(theme => ({
    //       color: props => props.a === 1 ? 'yellow' : 'orange',
    //       backgroundColor: 'orange'
    //     }), props);

    //     return (
    //       <a style={style}>
    //         {props.children}
    //       </a>
    //     );
    //   };

    //   const App = () => {
    //     return (
    //       <AmauiStyleProvider value={amauiStyle}>
    //         <AmauiThemeProvider>
    //           <A a={1}>a</a-a>

    //           <a-a>a1</a-a>
    //         </AmauiThemeProvider>
    //       </AmauiStyleProvider>
    //     );
    //   };

    //   const value = ReactDOMServer.renderToString(React.createElement(App, null));

    //   assert(value).eq('<div><div><a style="background-color:orange;color:yellow">a</a><a style="background-color:orange;color:orange">a1</a></div></div>');

    //   assert(amauiStyle.css).eq(``);
    // });

  });

});
