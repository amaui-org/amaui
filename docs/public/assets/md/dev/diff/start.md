
### Add

```sh
yarn add @amaui/diff
```

### Use

```ts
import AmauiDiff from '@amaui/diff';

// Make a new AmauiDiff instance
// with an optional initial value for options
const amauiDiff = new AmauiDiff();

// Diff
const diff = amauiDiff.diff('aaa', 'aab');

// {
//   items: ['r', 2, 'a', 2, 'b']
// }

// Update
amauiDiff.update('aaa', diff);

// 'aab'
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
      "label": "Date: Start",
      "to": "/dev/date/start"
    },
    "next": {
      "label": "Diff: Use",
      "to": "/dev/diff/use"
    }
  }
}~
