
### Add

```sh
yarn add @amaui/meta
```

### Use

```javascript
import AmauiMeta from '@amaui/meta';

const object = {};

AmauiMeta.add('a', 'a', object);
AmauiMeta.add('a', 'a4', object, 'p');

AmauiMeta.get('a', object);
AmauiMeta.get('a', object, 'p');

// Output
// 'a'
// 'a4'
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
      "label": "LZ77: Start",
      "to": "/dev/lz77/start"
    },
    "next": {
      "label": "Meta: Use",
      "to": "/dev/meta/use"
    }
  }
}~
