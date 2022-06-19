/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-react/AmauiStyleProvider', () => {

  to('AmauiStyleContext', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [
        !!window.AmauiStyleReact.AmauiStyleContext.Provider,
        !!window.AmauiStyleReact.AmauiStyleContext.Consumer
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(2).fill(true)
    ]));
  });

  to('AmauiStyleProvider', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const [amauiStyle] = useAmauiStyle();

        value.push(amauiStyle);

        return (
          eval(window.Babel.transform(`
            <a>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {
        const a = new AmauiStyle();

        a.a = 'a';

        const a1 = new AmauiStyle();

        a1.a = 'a1';

        return (
          eval(window.Babel.transform(`
            <AmauiStyleProvider value={a}>
                <A>
                  a

                  <AmauiStyleProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiStyleProvider>
                </A>
            </AmauiStyleProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[1].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

  to('useAmauiStyle', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiStyle, useAmauiStyle, AmauiStyleProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const [amauiStyle] = useAmauiStyle();

        value.push(amauiStyle);

        return (
          eval(window.Babel.transform(`
            <a>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {
        const a = new AmauiStyle();

        a.a = 'a';

        const a1 = new AmauiStyle();

        a1.a = 'a1';

        return (
          eval(window.Babel.transform(`
            <AmauiStyleProvider value={a}>
                <A>
                  a

                  <AmauiStyleProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiStyleProvider>
                </A>
            </AmauiStyleProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      // Add to DOM
      window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

      return [
        value.length === 2,
        value.every(item => item instanceof AmauiStyle),
        value[0].a === 'a',
        value[1].a === 'a1'
      ];
    });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

});
