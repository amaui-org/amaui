
### Add

```bash
yarn add @amaui/icons-material-react
```

### Use

```jsx
// Import any of the ui and icons
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/IconMaterialPottedPlantRounded';

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
      "label": "Style React: Start",
      "to": "/dev/style-react/start"
    },
    "next": {
      "label": "Icons Material React: Use",
      "to": "/dev/icons-material-react/use"
    }
  }
}~
