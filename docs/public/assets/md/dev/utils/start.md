
### Add

```sh
// yarn
yarn add @amaui/utils

// npm
npm install @amaui/utils
```

### Use

```javascript
// Import any of the methods
import { encode, equalDeep } from '@amaui/utils';

const value = { a: 'a', b: [{ a: 4 }] };

encode(value);

// 'eyJhIjoiYSIsImIiOlt7ImEiOjR9aa0='

equalDeep(value, { a: 'a', b: [{ a: 4 }] });

// true

// etc.
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

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: Start",
      "to": "/dev/test/start"
    },
    "next": {
      "label": "Utils: Use",
      "to": "/dev/utils/use"
    }
  }
}~
