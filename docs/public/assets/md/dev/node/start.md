
### Add

```sh
// yarn
yarn add @amaui/node

// npm
npm install @amaui/node
```

### Use

```javascript
import path from 'path';

import AmauiNode from '@amaui/node';

// A file add
await AmauiNode.file.add(path.resolve('a.json'), 'a');

// A file read
await AmauiNode.file.get(path.resolve('a.json'));

// A file remove
await AmauiNode.file.remove(path.resolve('a.json'));
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
      "label": "Mongo: Start",
      "to": "/dev/mongo/start"
    },
    "next": {
      "label": "Node: Use",
      "to": "/dev/node/use"
    }
  }
}~
