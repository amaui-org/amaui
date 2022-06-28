/* tslint:disable: no-shadowed-variable */
import * as Vue from 'vue';
import * as VueRenderer from 'vue/server-renderer';

import { assert } from '@amaui/test';

import { evaluate } from '../../../utils/js/test/utils';

import * as AmauiStyleVue from '../src';

group('@amaui/style-vue/reset', () => {

  to('reset', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { reset, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const useReset = reset(theme => ({
        a: {
          color: 'yellow'
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          useReset(props);

          return () => (
            window.Vue.h(
              'a',
              slots.default && slots.default()
            )
          );
        }
      }

      const App = {
        setup() {
          return () => (
            window.Vue.h(
              'div',
              [
                window.Vue.h(
                  A,
                  {
                    a: 1
                  },
                  () => 'a'
                )
              ]
            )
          )
        },
      }

      // Add to DOM
      const app = window.Vue.createApp(App);

      // Use plugins
      app.use(amauiStylePlugin, { value: new AmauiStyle() });

      app.use(amauiThemePlugin);

      app.mount('#app');

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
        "<div><a>a</a></div>"
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
        "<div><a>a</a></div>"
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
        "<div><a>a</a></div>"
      ]
    ]);
  });

  to('r', async () => {
    const valueBrowsers = await evaluate(async (window: any) => {
      const { r, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

      const useReset = r(theme => ({
        a: {
          color: 'yellow'
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          useReset(props);

          return () => (
            window.Vue.h(
              'a',
              slots.default && slots.default()
            )
          );
        }
      }

      const App = {
        setup() {
          return () => (
            window.Vue.h(
              'div',
              [
                window.Vue.h(
                  A,
                  {
                    a: 1
                  },
                  () => 'a'
                )
              ]
            )
          )
        },
      }

      // Add to DOM
      const app = window.Vue.createApp(App);

      // Use plugins
      app.use(amauiStylePlugin, { value: new AmauiStyle() });

      app.use(amauiThemePlugin);

      app.mount('#app');

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
        "<div><a>a</a></div>"
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
        "<div><a>a</a></div>"
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
        "<div><a>a</a></div>"
      ]
    ]);
  });

  group('methods', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        const { reset, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useReset = reset(theme => ({
          a: {
            color: 'yellow'
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            useReset(props);

            return () => (
              window.Vue.h(
                'a',
                slots.default && slots.default()
              )
            );
          }
        }

        const App = {
          setup() {
            return () => (
              window.Vue.h(
                'div',
                [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
                  )
                ]
              )
            )
          },
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

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
          "<div><a>a</a></div>"
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
          "<div><a>a</a></div>"
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
          "<div><a>a</a></div>"
        ]
      ]);
    });

    to('update', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useReset = reset(theme => ({
          a: {
            color: theme.palette.text.default.primary
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            useReset(props);

            return () => (
              window.Vue.h(
                'a',
                slots.default && slots.default()
              )
            );
          },

          mounted() {
            const amauiTheme = window.Vue.inject('amauiTheme');

            setTimeout(() => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            setTimeout(() => {
              amauiTheme.value.update({ palette: { light: false } });
            }, 140);
          }
        }

        const App = {
          setup() {
            return () => (
              window.Vue.h(
                AmauiThemeProvider,
                () => [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
                  )
                ]
              )
            )
          },
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

        await window.AmauiUtils.wait(440);

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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
        ]
      ]);
    });

    to('update props', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset, AmauiStyle, AmauiThemeProvider, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useReset = reset(theme => ({
          a: {
            color: props => props.a === 1 ? 'yellow' : 'orange',
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            useReset(props);

            return () => (
              window.Vue.h(
                'a',
                slots.default && slots.default()
              )
            );
          }
        }

        const App = {
          setup() {
            const a = window.Vue.ref(1);

            window.Vue.watch(a, () => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            return {
              a
            }
          },

          mounted() {
            setTimeout(() => {
              this.a = 14;
            }, 140);
          },

          render() {
            return (
              window.Vue.h(
                AmauiThemeProvider,
                () => [
                  window.Vue.h(
                    A,
                    {
                      a: this.a
                    },
                    () => 'a'
                  )
                ]
              )
            );
          }
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>",
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
          "<div data-amaui-theme=\"true\"><a>a</a></div>"
        ]
      ]);
    });

    to('remove', async () => {
      const valueBrowsers = await evaluate(async (window: any) => {
        window.value = [];

        const { reset, AmauiStyle, amauiStylePlugin, amauiThemePlugin } = window.AmauiStyleVue;

        const useReset = reset(theme => ({
          a: {
            color: 'yellow'
          }
        }));

        const A = {
          props: {
            a: Number,
          },

          setup(props, { slots }) {
            useReset(props);

            return () => (
              window.Vue.h(
                'a',
                slots.default && slots.default()
              )
            );
          }
        };

        const App = {
          setup() {
            const elements = window.Vue.ref(true);

            window.Vue.watch(elements, () => {
              window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);
            });

            return {
              elements
            };
          },

          mounted() {
            setTimeout(() => {
              this.elements = false;
            }, 140);
          },

          render() {
            return (
              window.Vue.h(
                'div',
                this.elements ? [
                  window.Vue.h(
                    A,
                    {
                      a: 1
                    },
                    () => 'a'
                  )
                ] : null
              )
            );
          }
        }

        // Add to DOM
        const app = window.Vue.createApp(App);

        // Use plugins
        app.use(amauiStylePlugin, { value: new AmauiStyle() });

        app.use(amauiThemePlugin);

        app.mount('#app');

        await window.AmauiUtils.wait(440);

        window.value.push(window.document.styleSheets.length, Array.from(window.document.styleSheets).map((sheet: any) => Array.from(sheet.cssRules).map((rule: any) => rule.cssText)), window.document.getElementById('app').innerHTML);

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
          "<div><a>a</a></div>",
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
          "<div><a>a</a></div>",
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
          "<div><a>a</a></div>",
          0,
          [],
          "<div></div>"
        ]
      ]);
    });

  });

  group('ssr', () => {

    to('renderToString', async () => {
      const { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, style, reset } = AmauiStyleVue;

      const amauiStyle = new AmauiStyle();

      const useReset = reset(theme => ({
        a: {
          color: 'yellow'
        }
      }));

      const useStyle = style(theme => ({
        a: {
          width: '100px',
        },

        a1: {
          color: theme.palette.text.default.primary
        },

        a4: {
          background: props => props.a === 1 ? 'yellow' : 'orange'
        }
      }));

      const A = {
        props: {
          a: Number,
        },

        setup(props, { slots }) {
          useReset();

          const styles = useStyle(props);

          return () => (
            Vue.h(
              'a',
              {
                class: styles.value.class
              },
              slots.default && slots.default()
            )
          );
        }
      };

      const App = {
        render() {
          return (
            Vue.h(
              AmauiStyleProvider,
              {
                value: amauiStyle
              },
              () => (
                Vue.h(
                  AmauiThemeProvider,
                  () => (
                    Vue.h(
                      A,
                      () => 'a'
                    )
                  )
                )
              )
            )
          );
        }
      };

      const value = await VueRenderer.renderToString(Vue.createSSRApp(App));

      assert(value).eq('<div><div><a class="a-0 a1-1">a</a></div></div>');

      assert(amauiStyle.css).eq(`

a {
  color: yellow;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
}

* {
  outline: none;
  font-size: 100%;
  background: transparent;
  box-sizing: border-box;
  touch-action: manipulation;
}

body {
  font-size: 14;
  font-family: Roboto, Helvetica, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: normal;
  font-style: normal;
  position: relative;
  overflow-x: hidden;
  background-color: #fff;
}

img, embed, object, video {
  max-width: 100%;
  height: auto;
}

form {
  width: 100%;
}

span {
  word-wrap: break-word;
}

hr {
  height: 1px;
  background: #ddd;
  width: 100%;
  margin: 24px 0;
  box-sizing: content-box;
  overflow: visible;
}

pre, code, kbd, samp {
  font-family: Roboto Mono, monospace;
}

:focus {
  outline: none;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
  text-decoration: underline;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}

button, input {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
  border-style: none;
}

button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"], [type="radio"] {
  box-sizing: border-box;
}

[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

*[contenteditable] {
  user-select: text;
}

code span {
  white-space: pre-wrap;
}

.a-0 {
  width: 100px;
}

.a1-1 {
  color: rgba(0, 0, 0, 0.87);
}

`);
    });

  });

});
