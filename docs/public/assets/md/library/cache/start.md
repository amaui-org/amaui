
# amaui cache

Cache any data, related to a key, where can can be any type of data (even a list of args), which is serialized & hashed into a key value.

### Add

```sh
yarn add @amaui/cache
```

### Use

```ts
import AmauiCache from '@amaui/cache';

const args = [4, { a: 4, ab: 4 }];

// Args is made into a hash, which makes the key
// a very useful, when you wanna cache a value based
// on some complex amount of variables
AmauiCache.add(4, ...args);

AmauiCache.get(...args);

// Output
// 4
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
      "label": "Binary Tree: Start",
      "to": "/library/binary-tree/start"
    },
    "next": {
      "label": "Cache: Use",
      "to": "/library/cache/use"
    }
  }
}~
