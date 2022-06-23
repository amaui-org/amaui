/* tslint:disable: no-shadowed-variable */
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleReact from '../src';

group('@amaui/style-react/inline', () => {

  to('inline', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { inline } = window.AmauiStyleReact;

      const A = (props) => {
        const style = inline(theme => ({
          color: 'yellow',
          backgroundColor: 'orange'
        }));

        return (
          eval(window.Babel.transform(`
            <a style={style}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
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
      '<div><a style="color: yellow; background-color: orange;">a</a><a style="color: yellow; background-color: orange;">a1</a></div>'
    ]));
  });

  to('i', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { i } = window.AmauiStyleReact;

      const A = (props) => {
        const style = i(theme => ({
          color: 'yellow',
          backgroundColor: 'orange'
        }));

        return (
          eval(window.Babel.transform(`
            <a style={style}>
                {props.children}
            </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
        );
      };

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
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
      '<div><a style="color: yellow; background-color: orange;">a</a><a style="color: yellow; background-color: orange;">a1</a></div>'
    ]));
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { inline } = window.AmauiStyleReact;

        const A = (props) => {
          const style = inline(theme => ({
            color: 'yellow',
            backgroundColor: 'orange'
          }));

          return (
            eval(window.Babel.transform(`
              <a style={style}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
            <div>
                <A>a</A>

                <A>a1</A>
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
        '<div><a style="color: yellow; background-color: orange;">a</a><a style="color: yellow; background-color: orange;">a1</a></div>'
      ]));
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline, useAmauiTheme, AmauiThemeProvider } = window.AmauiStyleReact;

        const A = (props) => {
          const style = inline(theme => ({
            color: theme.palette.text.default.primary,
            backgroundColor: 'orange'
          }));

          const amauiTheme = useAmauiTheme();

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              amauiTheme.updateWithRerender({
                palette: {
                  light: false
                }
              });
            }, 140);
          }, []);

          return (
            eval(window.Babel.transform(`
              <a style={style}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <AmauiThemeProvider>
                  <A>a</A>

                  <A>a</A>
              </AmauiThemeProvider>
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
        "<div data-amaui-theme=\"true\"><a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a><a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a></div>",
        "<div data-amaui-theme=\"true\"><a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a><a style=\"color: rgba(0, 0, 0, 0.87); background-color: orange;\">a</a></div>",
        "<div data-amaui-theme=\"true\"><a style=\"color: rgba(255, 255, 255, 0.87); background-color: orange;\">a</a><a style=\"color: rgba(255, 255, 255, 0.87); background-color: orange;\">a</a></div>"
      ]));
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline } = window.AmauiStyleReact;

        const A = (props) => {
          const style = inline(theme => ({
            color: props => props.a === 14 ? 'yellow' : 'orange',
            backgroundColor: 'orange'
          }), props);

          return (
            eval(window.Babel.transform(`
              <a style={style}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

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
                  <A a={a}>a</A>

                  <A>a</A>
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
        "<div><a style=\"background-color: orange; color: orange;\">a</a><a style=\"background-color: orange; color: orange;\">a</a></div>",
        "<div><a style=\"background-color: orange; color: yellow;\">a</a><a style=\"background-color: orange; color: orange;\">a</a></div>"
      ]));
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { inline } = window.AmauiStyleReact;

        const A = (props) => {
          const style = inline(theme => ({
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }), props);

          return (
            eval(window.Babel.transform(`
              <a style={style}>
                  {props.children}
              </a>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

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
                      <A a={1}>a</A>

                      <A>a</A>
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
        "<div><a style=\"color: yellow;\">a</a><a style=\"color: orange;\">a</a></div>",
        "<div></div>"
      ]));
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, inline } = AmauiStyleReact;

      const amauiStyle = new AmauiStyle();

      const A = (props) => {
        const style = inline(theme => ({
          color: props => props.a === 1 ? 'yellow' : 'orange',
          backgroundColor: 'orange'
        }), props);

        return (
          <a style={style}>
            {props.children}
          </a>
        );
      };

      const App = () => {
        return (
          <AmauiStyleProvider value={amauiStyle}>
            <AmauiThemeProvider>
              <A a={1}>a</A>

              <A>a1</A>
            </AmauiThemeProvider>
          </AmauiStyleProvider>
        );
      };

      const value = ReactDOMServer.renderToString(React.createElement(App, null));

      assert(value).eq('<div><div><a style="background-color:orange;color:yellow">a</a><a style="background-color:orange;color:orange">a1</a></div></div>');

      assert(amauiStyle.css).eq(``);
    });

  });

});
