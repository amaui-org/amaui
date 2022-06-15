/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers, reset } from '../../../utils/js/test/utils';

group('@amaui/style-react/AmauiStyleProvider', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);

    reset();
  });

  preEveryTo(async () => {
    await evaluate((window: any) => {
      window.document.body.innerHTML = `<div id='app'></div>`;
      window.value = [];
    }, { browsers });
  });

  to('AmauiStyleContext', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [
        !!window.AmauiStyleReact.AmauiStyleContext.Provider,
        !!window.AmauiStyleReact.AmauiStyleContext.Consumer
      ];
    }, { browsers });

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
        const style = useAmauiStyle();

        value.push(style);

        return window.React.createElement(
          'div',
          null,
          props.children
        );
      };

      const App: any = () => {
        const a = new AmauiStyle();

        a.a = 'a';

        const a1 = new AmauiStyle();

        a1.a = 'a1';

        return window.React.createElement(
          AmauiStyleProvider,
          { value: a },
          window.React.createElement(
            A,
            null,
            'a',
            window.React.createElement(
              AmauiStyleProvider,
              { value: a1 },
              window.React.createElement(
                A,
                null,
                'a1'
              )
            )
          )
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
    }, { browsers });

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
        const style = useAmauiStyle();

        value.push(style);

        return window.React.createElement(
          'div',
          null,
          props.children
        );
      };

      const App: any = () => {
        const a = new AmauiStyle();

        a.a = 'a';

        const a1 = new AmauiStyle();

        a1.a = 'a1';

        return window.React.createElement(
          AmauiStyleProvider,
          { value: a },
          window.React.createElement(
            A,
            null,
            'a',
            window.React.createElement(
              AmauiStyleProvider,
              { value: a1 },
              window.React.createElement(
                A,
                null,
                'a1'
              )
            )
          )
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
    }, { browsers });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(4).fill(true)
    ]));
  });

});
