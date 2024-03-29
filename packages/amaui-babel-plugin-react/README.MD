
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='../../utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Babel Plugin React</h1>

<p align='center'>
  Amaui Babel Plugin for React
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Nodejs</sub>
</h3>

<p align='center'>
    <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
  // yarn
yarn add @amaui/babel-plugin-react

  // npm
  npm install @amaui/babel-plugin-react
```

### Use

```javascript
  // Add to babel as a plugin
  // with other required presets
  // ie. @babel/preset-env and @babel/preset-react

  // babel.config.js
  module.exports = function (api) {
    const presets = [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ];

    const plugins = [
      '@babel/plugin-transform-runtime',
      '@amaui/babel-plugin-react'
    ];

    return {
      presets,
      plugins,
    };
  };
```

You will be able to use css prop in react elements as a prop, and it will be converted as below.

Value in css prop, is instead moved to className prop as a @amaui/style-react className method, which takes the same value as an argument, along side the optional className prop value, so it joins the generated className from className method and other provided className value.

#### in

```javascript
import React from 'react';
import { style, useTheme } from '@amaui/style-react';

const useStyle = style({});

function A() {
  const a = useStyle();
  const theme = useTheme();

  return (
    <a
      css={theme => ({
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
    </a>
  );
```

#### out

```javascript
"use strict";

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
  }, "a");
}
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

### Docs

Might be soon...
