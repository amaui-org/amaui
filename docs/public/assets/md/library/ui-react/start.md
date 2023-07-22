
### Add

```bash
yarn add @amaui/ui-react
```

<br />
Add `@amaui/style-react` peer dependency.

```bash
yarn add @amaui/style-react
```

### Use

```tsx
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
      "label": "UI react: Accordion",
      "to": "/dev/ui-react/use/Accordion"
    }
  }
}~
