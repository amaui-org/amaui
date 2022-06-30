/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

group('@amaui/style-web-components/reset', () => {

  to('reset', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { reset } = window.AmauiStyleWebComponents;

      const useReset = reset(theme => ({
        a: {
          color: 'yellow'
        }
      }));

      class A extends HTMLElement {
        useReset;

        connectedCallback() {
          this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

          this.useReset.add();
        }

        disconnectedCallback() {
          this.useReset.remove();
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <a-a>a</a-a>
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

    assert(values).eql([
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { overflow-wrap: break-word; }",
            "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
            ":focus { outline: none; }",
            "html { line-height: 1.15; text-size-adjust: 100%; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom: none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { user-select: text; }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ],
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { overflow-wrap: break-word; }",
            "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
            ":focus { outline: currentcolor none medium; }",
            "html { line-height: 1.15; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
            "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { user-select: text; }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ],
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { word-wrap: break-word; }",
            "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
            ":focus { outline: none; }",
            "html { line-height: 1.15; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ]
    ]);
  });

  to('r', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { r } = window.AmauiStyleWebComponents;

      const useReset = r(theme => ({
        a: {
          color: 'yellow'
        }
      }));

      class A extends HTMLElement {
        useReset;

        connectedCallback() {
          this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

          this.useReset.add();
        }

        disconnectedCallback() {
          this.useReset.remove();
        }

      }

      // Add element
      if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

      const App = () => {

        return (
          eval(window.Babel.transform(`
            <div>
                <a-a>a</a-a>
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

    assert(values).eql([
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { overflow-wrap: break-word; }",
            "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
            ":focus { outline: none; }",
            "html { line-height: 1.15; text-size-adjust: 100%; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom: none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { user-select: text; }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ],
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { overflow-wrap: break-word; }",
            "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
            ":focus { outline: currentcolor none medium; }",
            "html { line-height: 1.15; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
            "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { user-select: text; }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ],
      [
        1,
        [
          [
            "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
            "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
            "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
            "img, embed, object, video { max-width: 100%; height: auto; }",
            "form { width: 100%; }",
            "span { word-wrap: break-word; }",
            "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
            "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
            ":focus { outline: none; }",
            "html { line-height: 1.15; }",
            "main { display: block; }",
            "h1 { font-size: 2em; margin: 0.67em 0px; }",
            "pre { font-family: monospace, monospace; font-size: 1em; }",
            "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
            "b, strong { font-weight: bolder; }",
            "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
            "small { font-size: 80%; }",
            "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
            "sub { bottom: -0.25em; }",
            "sup { top: -0.5em; }",
            "img { border-style: none; }",
            "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
            "button, input { overflow: visible; }",
            "button, select { text-transform: none; }",
            "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
            "fieldset { padding: 0.35em 0.75em 0.625em; }",
            "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
            "progress { vertical-align: baseline; }",
            "textarea { overflow: auto; }",
            "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
            "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
            "[type=\"search\"] { appearance: textfield; }",
            "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
            "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
            "details { display: block; }",
            "summary { display: list-item; }",
            "template { display: none; }",
            "[hidden] { display: none; }",
            "[contenteditable] { }",
            "code span { white-space: pre-wrap; }"
          ]
        ],
        `<div><a-a>a</a-a></div>`
      ]
    ]);
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { reset } = window.AmauiStyleWebComponents;

        const useReset = reset(theme => ({
          a: {
            color: 'yellow'
          }
        }));

        class A extends HTMLElement {
          useReset;

          connectedCallback() {
            this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.useReset.add();
          }

          disconnectedCallback() {
            this.useReset.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

        const App = () => {

          return (
            eval(window.Babel.transform(`
            <div>
                <a-a>a</a-a>
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

      assert(values).eql([
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          "<div><a-a>a</a-a></div>"
        ],
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          "<div><a-a>a</a-a></div>"
        ],
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          "<div><a-a>a</a-a></div>"
        ]
      ]);
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset, useAmauiTheme } = window.AmauiStyleWebComponents;

        const useReset = reset(theme => ({
          a: {
            color: theme.palette.text.default.primary
          }
        }));

        class A extends HTMLElement {
          useReset;

          connectedCallback() {
            this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.useReset.add();

            window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

            const amauiTheme = useAmauiTheme(this);

            amauiTheme.update({ palette: { light: false } });
          }

          disconnectedCallback() {
            this.useReset.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

        const App = () => {

          return (
            eval(window.Babel.transform(`
              <amaui-theme>
                  <a-a>a</a-a>
              </amaui-theme>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(140);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

        return window.value;
      });

      const values = [...valueBrowsers];

      assert(values).eql([
        [
          1,
          [
            [
              "a { color: rgba(0, 0, 0, 0.87); text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
          1,
          [
            [
              "a { color: rgba(255, 255, 255, 0.87); }",
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
        ],
        [
          1,
          [
            [
              "a { color: rgba(0, 0, 0, 0.87); text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
          1,
          [
            [
              "a { color: rgba(255, 255, 255, 0.87); }",
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
        ],
        [
          1,
          [
            [
              "a { color: rgba(0, 0, 0, 0.87); text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
          1,
          [
            [
              "a { color: rgba(255, 255, 255, 0.87); }",
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }"
            ]
          ],
          `<amaui-theme data-amaui-theme="true"><a-a>a</a-a></amaui-theme>`,
        ]
      ]);
    });

    to('updateProps', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset, useAmauiTheme } = window.AmauiStyleWebComponents;

        const useReset = reset(theme => ({
          a: {
            color: props => props.a === 1 ? 'yellow' : 'orange'
          }
        }));

        class A extends HTMLElement {
          useReset;

          static get observedAttributes() {
            return ['a'];
          }

          connectedCallback() {
            this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.useReset.add();
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.useReset?.updateProps(window.AmauiStyleWebComponents.getAttributeValues(this));
          }

          disconnectedCallback() {
            this.useReset.remove();
          }

        }

        // Add element
        if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

        const App = () => {
          const [a, setA] = window.React.useState(1);

          window.React.useEffect(() => {
            setTimeout(() => {
              setA(14);
            }, 140);
          }, []);

          window.React.useEffect(() => {
            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [a]);

          return (
            eval(window.Babel.transform(`
              <amaui-theme>
                  <a-a a={a}>a</a-a>
              </amaui-theme>
          `, { presets: [window.Babel.availablePresets.es2015, window.Babel.availablePresets.react] }).code)
          );
        };

        // Add to DOM
        window.ReactDOM.render(window.React.createElement(App, null), window.document.getElementById('app'));

        await window.AmauiUtils.wait(440);

        return window.value;
      });

      const values = [...valueBrowsers];

      assert(values).eql([
        [
          2,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="1">a</a-a></amaui-theme>',
          2,
          [
            [
              "a { color: orange; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="14">a</a-a></amaui-theme>'
        ],
        [
          2,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="1">a</a-a></amaui-theme>',
          2,
          [
            [
              "a { color: orange; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="14">a</a-a></amaui-theme>'
        ],
        [
          2,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="1">a</a-a></amaui-theme>',
          2,
          [
            [
              "a { color: orange; text-decoration: none; cursor: pointer; background-color: transparent; }"
            ],
            [
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          '<amaui-theme data-amaui-theme="true"><a-a a="14">a</a-a></amaui-theme>'
        ]
      ]);
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset } = window.AmauiStyleWebComponents;

        const useReset = reset(theme => ({
          a: {
            color: 'yellow'
          }
        }));

        class A extends HTMLElement {
          useReset;

          connectedCallback() {
            this.useReset = useReset(this, window.AmauiStyleWebComponents.getAttributeValues(this));

            this.useReset.add();
          }

          disconnectedCallback() {
            this.useReset.remove();
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
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });
          }, [elements]);

          return (
            eval(window.Babel.transform(`
              <div>
                  {elements && (
                    <window.React.Fragment>
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

      assert(values).eql([
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; text-size-adjust: 100%; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<div><a-a>a</a-a></div>`,
          0,
          [],
          "<div></div>"
        ],
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: currentcolor none medium; font-size: 100%; background: transparent none repeat scroll 0% 0%; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { overflow-wrap: break-word; }",
              "hr { height: 1px; background: rgb(221, 221, 221) none repeat scroll 0% 0%; width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: Roboto Mono, monospace; }",
              ":focus { outline: currentcolor none medium; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom: medium none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; }",
              "button:focus-visible, [type=\"button\"]:focus-visible, [type=\"reset\"]:focus-visible, [type=\"submit\"]:focus-visible { outline: buttontext dotted 1px; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { user-select: text; }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<div><a-a>a</a-a></div>`,
          0,
          [],
          "<div></div>"
        ],
        [
          1,
          [
            [
              "a { color: yellow; text-decoration: none; cursor: pointer; background-color: transparent; }",
              "* { outline: none; font-size: 100%; background-color: transparent; box-sizing: border-box; touch-action: manipulation; }",
              "body { font-family: Roboto, Helvetica, \"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif; font-weight: normal; font-style: normal; position: relative; overflow-x: hidden; background-color: rgb(255, 255, 255); }",
              "img, embed, object, video { max-width: 100%; height: auto; }",
              "form { width: 100%; }",
              "span { word-wrap: break-word; }",
              "hr { height: 1px; background-color: rgb(221, 221, 221); width: 100%; margin: 24px 0px; box-sizing: content-box; overflow: visible; }",
              "pre, code, kbd, samp { font-family: \"Roboto Mono\", monospace; }",
              ":focus { outline: none; }",
              "html { line-height: 1.15; }",
              "main { display: block; }",
              "h1 { font-size: 2em; margin: 0.67em 0px; }",
              "pre { font-family: monospace, monospace; font-size: 1em; }",
              "abbr[title] { border-bottom-style: none; text-decoration: underline; }",
              "b, strong { font-weight: bolder; }",
              "code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }",
              "small { font-size: 80%; }",
              "sub, sup { font-size: 75%; position: relative; vertical-align: baseline; }",
              "sub { bottom: -0.25em; }",
              "sup { top: -0.5em; }",
              "img { border-style: none; }",
              "button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; }",
              "button, input { overflow: visible; }",
              "button, select { text-transform: none; }",
              "button, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { appearance: button; }",
              "fieldset { padding: 0.35em 0.75em 0.625em; }",
              "legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; white-space: normal; }",
              "progress { vertical-align: baseline; }",
              "textarea { overflow: auto; }",
              "[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; }",
              "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }",
              "[type=\"search\"] { appearance: textfield; }",
              "[type=\"search\"]::-webkit-search-decoration { appearance: none; }",
              "::-webkit-file-upload-button { appearance: button; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }",
              "details { display: block; }",
              "summary { display: list-item; }",
              "template { display: none; }",
              "[hidden] { display: none; }",
              "[contenteditable] { }",
              "code span { white-space: pre-wrap; }"
            ]
          ],
          `<div><a-a>a</a-a></div>`,
          0,
          [],
          "<div></div>"
        ]
      ]);
    });

  });

  group('ssr', () => {

    //     to('renderToString', async () => {
    //       const { AmauiStyle, AmauiStyleProvider, style } = AmauiStyleWebComponents;

    //       const amauiStyle = new AmauiStyle();

    //       const useStyle = style(theme => ({
    //         a: {
    //           width: '100px',
    //         },

    //         a1: {
    //           color: theme.palette.text.default.primary
    //         },

    //         a4: {
    //           background: props => props.a === 1 ? 'yellow' : 'orange'
    //         }
    //       }));

    //       class A extends HTMLElement {
    //         useStyle;
    //         styles;

    //         constructor() {
    //           super();

    //           this.useStyle = useStyle(this, AmauiStyleWebComponents.getAttributeValues(this));

    //           this.className = this.styles.class;
    //         }

    //         connectedCallback() {
    //           this.styles = this.useStyle.add();

    //           this.className = this.styles.class;
    //         }

    //         disconnectedCallback() {
    //           this.useStyle.remove();
    //         }

    //       }

    //       // Add element
    //       if (!window.customElements.get('a-a')) window.customElements.define('a-a', A);

    //       AmauiStyleProvider.prototype.value = amauiStyle;

    //       const App = () => {
    //         return (
    //           <amaui-style>
    //             <amaui-theme>
    //               <a-a>
    //                 a
    //               </a-a>
    //             </amaui-theme>
    //           </amaui-style>
    //         );
    //       };

    //       const value = ReactDOMServer.renderToString(React.createElement(App, null));

    //       assert(value).eq('<div><div><a class="a-0 a1-1">a</a></div></div>');

    //       assert(amauiStyle.css).eq(`

    // .a-0 {
    //   width: 100px;
    // }

    // .a1-1 {
    //   color: rgba(0, 0, 0, 0.87);
    // }

    // `);
    //     });

  });

});
