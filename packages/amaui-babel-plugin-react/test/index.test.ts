import * as babel from '@babel/core';

import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';

import pluginRuntimeTransform from '@babel/plugin-transform-runtime';

import { assert } from '@amaui/test';

import AmauiBabelPluginReact from '../src';

group('@amaui/babel-plugin-react', () => {

  to('babel-plugin-react', () => {
    const value = `
import React from 'react';
import { style, useTheme } from '@amaui/style-react';

const useStyle = style({});

function A() {
  const a = useStyle();
  const theme = useTheme();

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

      className={a.classNames.a}
    >
      a

      <a
        className={a.classNames.a}

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
`;

    const { code } = babel.transform(value, {
      presets: [presetEnv, presetReact],
      plugins: [pluginRuntimeTransform, AmauiBabelPluginReact]
    });

    const valueAsserted = `"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _styleReact = require("@amaui/style-react");

var amauiStyleReactClassName = require("@amaui/style-react").className;

var useStyle = (0, _styleReact.style)({});

function A() {
  var a = useStyle();
  var theme = (0, _styleReact.useTheme)();
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: amauiStyleReactClassName(function (theme) {
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
  }, "a", /*#__PURE__*/_react["default"].createElement("a", {
    className: amauiStyleReactClassName({
      width: 100,
      'max-width': 100,
      // Simple
      background: '#faa'
    }, a.classNames.a)
  }, "a1"), /*#__PURE__*/_react["default"].createElement("a", {
    className: amauiStyleReactClassName("\n          width: 100,\n\n          'max-width': 100,\n\n          background: ".concat(theme.palette.primary.main, "\n        "))
  }, "a14"));
}`;

    assert(code.replace(/ |\n|\\n/g, '')).eq(valueAsserted.replace(/ |\n|\\n/g, ''));
  });

});
