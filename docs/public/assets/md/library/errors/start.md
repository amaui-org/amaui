
# amaui errors

Useful error versions for various use cases, and more useful properties added to each error instance.

### Add

```sh
yarn add @amaui/errors
```

### Use

```ts
import { AmauiError } from '@amaui/errors';
import AmauiLog from '@amaui/log';

const amauiError = new AmauiError('a');

amauiError.name;
amauiError.message;
amauiError.added_at;
amauiError.stack;

// AmauiError
// 'a'
// 1643893234
// 'AmauiError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'

AmauiLog.error(amauiError);

// Output

  // 04-04-2014 04:04:14.141 (error):

  // a

  // AmauiError: a
  //    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)
  //    at t.default.evaluate (<anonymous>:3:2412)
  //    at t.default.<anonymous> (<anonymous>:1:44)

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
      "label": "Diff: Start",
      "to": "/library/diff/start"
    },
    "next": {
      "label": "Errors: Use",
      "to": "/library/errors/use"
    }
  }
}~
