
# amaui icons material react

25000+ round, sharp, outlined, filled, width 100, two tone Google open source icons as easy to use react elements library for front end & back end.

### Add

There are so many icons, that in order to publish them in a library to npm, with limited number of files allowed for a library, it had to be moved into 3 different libraries.

Install any library of icons you want to use.

#### Rounded

```bash
yarn add @amaui/icons-material-rounded-react
```

#### Sharp

```bash
yarn add @amaui/icons-material-sharp-react
```

#### Two  tone

```bash
yarn add @amaui/icons-material-two-tone-react
```

### Use

```tsx
// Import any of the icons
// best to import them as modules like this example
// it's the most efficient way to import icons
import IconMaterialPottedPlantRounded from '@amaui/icons-material-rounded-react/IconMaterialPottedPlant';

function A(props) {

  return (
      // 🪴
    <IconMaterialPottedPlantRounded />
  );
}
```

### Dev

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

### Licenses

[Google material design icons](https://fonts.google.com/icons) are ones used in this repository, licenced under their own [licence](https://github.com/google/material-design-icons/blob/master/LICENSE).

Updates made to original icons:
- A part of the icons are used not all of them.
- Inner svg elements (children) are extracted from every icon, and put within the @amaui/ui-react Icon component as children.
- Every icon from there is made into it's own React component as part of this UI library.

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: Start",
      "to": "/library/style-react/start"
    },
    "next": {
      "label": "Icons Material react: Use",
      "to": "/library/icons-material-react/use"
    }
  }
}~
