/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../../../utils/js/test/utils';

group('@amaui/style-react/AmauiThemeProvider', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  preEveryTo(async () => {
    await evaluate((window: any) => {
      window.document.body.innerHTML = `<div id='app'></div>`;
      window.value = [];
    }, { browsers });
  });

  to('AmauiThemeContext', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [
        !!window.AmauiStyleReact.AmauiThemeContext.Provider,
        !!window.AmauiStyleReact.AmauiThemeContext.Consumer
      ];
    }, { browsers });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(2).fill(true)
    ]));
  });

  to('AmauiThemeProvider', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const theme = useAmauiTheme();

        value.push(theme);

        return window.React.createElement(
          'div',
          null,
          props.children
        );
      };

      const App: any = () => {
        const a = new AmauiTheme();

        const a1 = new AmauiTheme();

        return window.React.createElement(
          AmauiThemeProvider,
          { value: a },
          window.React.createElement(
            A,
            null,
            'a',
            window.React.createElement(
              AmauiThemeProvider,
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
        value.every(item => item instanceof AmauiTheme),
        value[0].id !== value[1].id
      ];
    }, { browsers });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(3).fill(true)
    ]));
  });

  to('useAmauiTheme', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const value = [];

      const { AmauiTheme, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

      const A = (props) => {
        const theme = useAmauiTheme();

        value.push(theme);

        return window.React.createElement(
          'div',
          null,
          props.children
        );
      };

      const App: any = () => {
        const a = new AmauiTheme();

        const a1 = new AmauiTheme();

        return window.React.createElement(
          AmauiThemeProvider,
          { value: a },
          window.React.createElement(
            A,
            null,
            'a',
            window.React.createElement(
              AmauiThemeProvider,
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
        value.every(item => item instanceof AmauiTheme),
        value[0].id !== value[1].id
      ];
    }, { browsers });

    const values = [...valueBrowsers];

    values.forEach(value => assert(value).eql([
      ...new Array(3).fill(true)
    ]));
  });

});
