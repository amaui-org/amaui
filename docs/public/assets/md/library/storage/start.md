
# amaui storage

Local, session storage management utils.

### Add

```sh
yarn add @amaui/storage
```

### Use

```ts
import AmauiStorage from '@amaui/storage';

const amauiStorage = new AmauiStorage();

const value = { a: 4 };

// Add
amauiStorage.add('a', value);

// Get
amauiStorage.get('a');

// { a: 4 }

// Remove
amauiStorage.remove('a');

amauiStorage.get('a');

// null
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
      "label": "Stack: Start",
      "to": "/library/stack/start"
    },
    "next": {
      "label": "Storage: Use",
      "to": "/library/storage/use"
    }
  }
}~
