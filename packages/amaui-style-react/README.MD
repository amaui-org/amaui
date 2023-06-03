
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='../../utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Style React</h1>

<p align='center'>
  Amaui Style for React
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
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
  yarn add @amaui/style-react
```

### Use

```javascript
  // Import any of the methods
  import { style } from '@amaui/style-react';

  const useStyle = style(theme => ({
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
  }));

  function A(props) {
    const { classes } = useStyle(props);

    return (
      <a className={classes.a}>
        {props.children}
      </a>
    );
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
