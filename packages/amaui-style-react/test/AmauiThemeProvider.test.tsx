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
        const [amauiTheme] = useAmauiTheme();

        value.push(amauiTheme);

        return (
          eval(window.Babel.transform(`
            <div>
              {props.children}
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App: any = () => {
        const a = new AmauiTheme();

        const a1 = new AmauiTheme();

        return (
          eval(window.Babel.transform(`
            <AmauiThemeProvider value={a}>
                <A>
                  a

                  <AmauiThemeProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiThemeProvider>
                </A>
            </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
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
        const [amauiTheme] = useAmauiTheme();

        value.push(amauiTheme);

        return (
          eval(window.Babel.transform(`
            <div>
              {props.children}
            </div>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App: any = () => {
        const a = new AmauiTheme();

        const a1 = new AmauiTheme();

        return (
          eval(window.Babel.transform(`
            <AmauiThemeProvider value={a}>
                <A>
                  a

                  <AmauiThemeProvider value={a1}>
                    <A>
                      a1
                    </A>
                  </AmauiThemeProvider>
                </A>
            </AmauiThemeProvider>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
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
