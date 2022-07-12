
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='../../utils/images/logo.svg' alt='AMAUI logo' />
  </a>
</p>

<<<<<<< HEAD
<h1 align='center'>AMAUI Icons Material React</h1>

<p align='center'>
  Amaui Icons Material for React <br />
  Almost 40.000 icon versions including outlined, rounded, sharp and two tone <br />
  with 100, 400 and 700 weights, with and without fill
=======
<h1 align='center'>AMAUI UI React</h1>

<p align='center'>
  Amaui UI for React
>>>>>>> 98f2b2bf364a5516721e41aea4f78cd7c04e9263
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD (all almost 40.000 icons) 167mb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
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
  // yarn
  yarn add @amaui/icons-material-react

  // npm
  npm install @amaui/icons-material-react
```

### Use

```javascript
  // Import any of the ui and icons
  import { IconButton } from '@amaui/ui-react';
  import { IconMaterialPottedPlantOutlined } from '@amaui/icons-material-react';

  function A(props) {

    return (
      <IconButton>
        // 🪴
        <IconMaterialPottedPlantOutlined />
      </IconButton>
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

### Docs

Might be soon...

### Licenses

[Google material design icons](https://fonts.google.com/icons) are ones used in this repository, licenced under their own [licence](https://github.com/google/material-design-icons/blob/master/LICENSE).

Updates made to original icons:
- A part of the icons are used not all of them.
- Inner svg elements (children) are extracted from every icon, and put within the @amaui/ui-react Icon component as children.
- Every icon from there is made into it's own React component as part of this UI library.
