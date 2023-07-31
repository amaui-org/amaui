
# amaui utils

Library with various util methods for front end & back end.

### Add

```sh
yarn add @amaui/utils
```

### Use

```ts
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
      "to": "/library/test/start"
    },
    "next": {
      "label": "Utils: allImagesLoaded",
      "to": "/library/utils/use/allImagesLoaded"
    }
  }
}~
