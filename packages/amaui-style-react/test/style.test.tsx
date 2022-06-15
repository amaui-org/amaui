/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers, reset } from '../../../utils/js/test/utils';

group('@amaui/style-react/style', () => {
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

      await window.AmauiUtils.wait(14);

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

});
