
### Add

Make sure to install `@amaui/style-react` as well.

```bash
yarn add @amaui/ui-react @amaui/style-react
```

### Use

```jsx
// Import any of the ui
import { Button } from '@amaui/ui-react';

function A(props) {

  return (
    <Button>{props.children}</Button>
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
    "next": {
      "label": "UI React: Use",
      "to": "/dev/ui-react/use"
    }
  }
}~
