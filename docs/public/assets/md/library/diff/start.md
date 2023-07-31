
# amaui diff

Use for finding the differences between to different text values, and update one value to equal the other.

### Use cases

- Git file changes comparisson.
- Updating larger instance of text, instead of sending the entire updated instance to the API, send only update instructions for it, and update the actual previous version on the server, less data sent.
- Updating text files, instead of sending entire file to the API for the update, send only the update instructions for it, and update the actual previous version on the server, less data sent.
- etc.

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

// { items: ['r', 2, 'a', 2, 'b'] }

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
      "to": "/library/date/start"
    },
    "next": {
      "label": "Diff: Use",
      "to": "/library/diff/use"
    }
  }
}~
