import * as babel from '@babel/core';

import presetEnv from '@babel/preset-env';
import presetVue from '@vue/babel-preset-jsx';

import pluginRuntimeTransform from '@babel/plugin-transform-runtime';

import { assert } from '@amaui/test';

import AmauiBabelPluginVue from '../src';

group('@amaui/babel-plugin-vue', () => {

  to('babel-plugin-vue', () => {
    const value = `
import * as Vue from 'vue';
import { style, useTheme } from '@amaui/style-react';

export default {
  render() {
    return (
       <a
        css={
          theme => ({
            '@keyframes a': {
              '0%': {
                  color: 'white',
              },
              '40%': {
                  color: 'yellow',
              },
            },

            a: {
                width: 100,

                'max-width': 100,

                // Simple
                background: '#faa',

                margin: '0 14px 4px 40px',

                // rtl
                marginLeft: 41,
                float: 'left',

                // sort
                paddingLeft: 41,
                padding: 40,

                // prefixes
                position: 'sticky',
                transition: 'all .4s ease',
                maskOrigin: 'inherit',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                maskPosition: '40% 74%',

                // animation
                animation: '$a .4s ease',
            },
          })
        }

        class={a.classNames.a}
      >
        a

        <a
          class={a.classNames.a}

          css={{
            width: 100,

            'max-width': 100,

            // Simple
            background: '#faa',
          }}
        >
          a1
        </a>

        <a
          css={\`
            width: 100,

            'max-width': 100,

            background: \${theme.palette.primary.main}
          \`}
        >
          a14
        </a>
      </a>
    );
  }
}
`;

    const { code } = babel.transform(value, {
      presets: [presetEnv, presetVue],
      plugins: [pluginRuntimeTransform, AmauiBabelPluginVue]
    });

    const valueAsserted = `"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _styleReact = require("@amaui/style-react");

var amauiStyleVueClassName = require("@amaui/style-vue").className;

var _default = {
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": amauiStyleVueClassName(function (theme) {
        return {
          '@keyframes a': {
            '0%': {
              color: 'white'
            },
            '40%': {
              color: 'yellow'
            }
          },
          a: {
            width: 100,
            'max-width': 100,
            // Simple
            background: '#faa',
            margin: '0 14px 4px 40px',
            // rtl
            marginLeft: 41,
            "float": 'left',
            // sort
            paddingLeft: 41,
            padding: 40,
            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',
            // animation
            animation: '$a .4s ease'
          }
        };
      }, a.classNames.a)
    }, ["a", h("a", {
      "class": amauiStyleVueClassName({
        width: 100,
        'max-width': 100,
        // Simple
        background: '#faa'
      }, a.classNames.a)
    }, ["a1"]), h("a", {
      "class": amauiStyleVueClassName("\n            width: 100,\n\n            'max-width': 100,\n\n            background: ".concat(theme.palette.primary.main, "\n          "))
    }, ["a14"])]);
  }
};
exports["default"] = _default;`;

    assert(code.replace(/ |\n|\\n/g, '')).eq(valueAsserted.replace(/ |\n|\\n/g, ''));
  });

});
