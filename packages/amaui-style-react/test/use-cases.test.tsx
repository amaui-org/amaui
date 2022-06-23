/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/style', () => {

  group('Multiple elements, same default amauiStyle instance', () => {

    to('Multiple elements, same default amauiStyle instance', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { styled } = window.AmauiStyleReact;

        const A = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a')(theme => ({
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
                <A a={1}>a</A>

                <A14 a={14}>a1</A14>
                <A14 a={14}>a1</A14>
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
        "<div><a class=\"a-0 a1-1\" a=\"1\">a</a><a class=\"a-0 a1-2\" a=\"14\">a1</a><a class=\"a-0 a1-3\" a=\"14\">a1</a></div>"
      ]));
    });

    group('ssr', () => {

      to('renderToString', async () => {
        const { AmauiStyleProvider, AmauiStyle, styled } = AmauiStyleReact;

        const amauiStyle = new AmauiStyle();

        const A = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A14 = styled('a')(theme => ({
          a: {
            color: 'yellow'
          },

          a1: {
            color: 'orange'
          },

          a14: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const App = () => {
          return (
            <AmauiStyleProvider value={amauiStyle}>
              <A a={1}>a</A>

              <A14 a={14}>a14</A14>
              <A14 a={14}>a114</A14>
            </AmauiStyleProvider>
          );
        };

        const value = ReactDOMServer.renderToString(React.createElement(App, null));

        assert(value).eq('<div><a class="a-0" a="1">a</a><a class="a-0 a1-1" a="14">a14</a><a class="a-0 a1-1" a="14">a114</a></div>');

        assert(amauiStyle.css).eq(`

.a-0 {
  color: yellow;
}

.a1-1 {
  color: orange;
}

`);
      });

    });

  });

});
