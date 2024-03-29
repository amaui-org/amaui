
# amaui cookie

Cookie storage management utils.

### Add

```sh
yarn add @amaui/cookie
```

### Use

```ts
import AmauiCookie from '@amaui/cookie';

const amauiCookie = new AmauiCookie();

// Add
amauiCookie.add('a', 4);

// Has
amauiCookie.has('a');

// true

// Get
amauiCookie.get('a');

// 4

// Remove
amauiCookie.remove('a');

amauiCookie.get('a');

// undefined
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
      "label": "Cache: Start",
      "to": "/library/cache/start"
    },
    "next": {
      "label": "Cookie: Use",
      "to": "/library/cookie/use"
    }
  }
}~
