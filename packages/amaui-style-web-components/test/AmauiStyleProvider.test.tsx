/* tslint:disable: no-shadowed-variable */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleWebComponents from '../src';

group('@amaui/style-web-components/AmauiStyleProvider', () => {

  to('AmauiStyleProvider', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      let value = [];

      const { AmauiStyle, useAmauiStyle } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          value.push(useAmauiStyle(this));
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        window.React.useEffect(() => {
          // Reset the value
          value = [];

          const a = new AmauiStyle();

          a.a = 'a';

          window.document.getElementById('a').update(a);

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          window.document.getElementById('a1').update(a1);
        }, []);

        return (
          eval(window.Babel.transform(`
            <amaui-style id='a'>
                <a-a>
                  a

                  <amaui-style id='a1'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-style>
                </a-a>
            </amaui-style>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

      return [
        value.length === 3,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[2].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  to('useAmauiStyle', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      let value = [];

      const { AmauiStyle, useAmauiStyle } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          value.push(useAmauiStyle(this));
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        window.React.useEffect(() => {
          // Reset the value
          value = [];

          const a = new AmauiStyle();

          a.a = 'a';

          window.document.getElementById('a').update(a);

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          window.document.getElementById('a1').update(a1);
        }, []);

        return (
          eval(window.Babel.transform(`
            <amaui-style id='a'>
                <a-a>
                  a

                  <amaui-style id='a1'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-style>
                </a-a>
            </amaui-style>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

      return [
        value.length === 3,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[2].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  to('update', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      let value = [];

      const { AmauiStyle, useAmauiStyle } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          const amauiStyle = useAmauiStyle(this);

          value.push(amauiStyle.a);

          if (amauiStyle.a !== 14 && amauiStyle.update) amauiStyle.update({
            a: 14
          });
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        window.React.useEffect(() => {
          // Reset the value
          value = [];

          const a = new AmauiStyle();

          a.a = 'a';

          window.document.getElementById('a').update(a);

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          window.document.getElementById('a1').update(a1);
        }, []);

        return (
          eval(window.Babel.transform(`
            <amaui-style id='a'>
                <a-a>
                  a

                  <amaui-style id='a1'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-style>
                </a-a>
            </amaui-style>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

      return value.filter(Boolean);
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      'a',
      14,
      'a1',
      14
    ]));
  });

  to('root props', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      let value = [];

      const { AmauiStyle, useAmauiStyle } = window.AmauiStyleWebComponents;

      class A extends HTMLElement {

        connectedCallback() {
          const amauiStyle = useAmauiStyle(this);

          value.push(amauiStyle);
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        window.React.useEffect(() => {
          // Reset the value
          value = [];

          const a = new AmauiStyle();

          a.a = 'a';

          window.document.getElementById('a').update(a);

          const a1 = new AmauiStyle();

          a1.a = 'a1';

          window.document.getElementById('a1').update(a1);
        }, []);

        return (
          eval(window.Babel.transform(`
            <amaui-style id='a' dir='ltr'>
                <a-a>
                  a

                  <amaui-style id='a1' dir='rtl'>
                    <a-a>
                      a1
                    </a-a>
                  </amaui-style>
                </a-a>
            </amaui-style>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      await window.AmauiUtils.wait(140);

      return [
        value.length === 3,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[0].direction,
        value[0].options,
        value[2].a === 'a1',
        value[2].direction,
        value[2].options,
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(3).fill(true),
      'ltr',
      {
        rule: {
          sort: true,
          prefix: false,
          rtl: false
        },
        optimize: true
      },
      true,
      'rtl',
      {
        rule: {
          sort: true,
          prefix: false,
          rtl: true
        },
        optimize: true
      },
    ]));
  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider } = AmauiStyleWebComponents;

      const amauiStyle = new AmauiStyle();

      AmauiStyleProvider.prototype.value = amauiStyle;

      const App = () => {
        return (
          <amaui-style>
            a
          </amaui-style>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<amaui-style>a</amaui-style>');

      assert(amauiStyle.css).eq(``);
    });

  });

});
