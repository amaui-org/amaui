
### Add

```sh
yarn add @amaui/style-react
```

### Use

```jsx
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
    <a className={classes.a}>{props.children}</a>
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

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI React: Start",
      "to": "/dev/ui-react/start"
    },
    "next": {
      "label": "Style React: AmauiStyleContext",
      "to": "/dev/style-react/use/AmauiStyleContext"
    }
  }
}~
