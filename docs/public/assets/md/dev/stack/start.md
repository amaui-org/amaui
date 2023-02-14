
### Add

```sh
yarn add @amaui/stack
```

### Use cases
- Reversing
- Undo/redo
- Backtracking
- Call stack
- etc.

### Use

```javascript
import AmauiStack from '@amaui/stack';

// Make a new stack instance
const amauiStack = new AmauiStack();

// Add values
amauiStack.push(1, 2, 3, 4);

amauiStack.first;
// 4

amauiStack.length;
// 4

const value = amauiStack.pop();

value;
// 4

amauiStack.first;
// 3

amauiStack.length;
// 3
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
      "label": "Request: Start",
      "to": "/dev/request/start"
    },
    "next": {
      "label": "Stack: Use",
      "to": "/dev/stack/use"
    }
  }
}~
