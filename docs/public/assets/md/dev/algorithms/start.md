
### Add

```bash
// yarn
yarn add @amaui/algorithms

// npm
npm install @amaui/algorithms
```

### Algorithms
- Factorial
- Fibonacci
- Binary search
- Bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort
- Radix sort
- Naive search
- LPS
- KMP
- etc.

### Use

```javascript
import { bubbleSort } from '@amaui/algorithms';

const value = [1, 14, 7, 4];

bubbleSort(value);

// [1, 4, 7, 14];

// etc.
```

### Dev

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AWS: Start",
      "to": "/dev/aws/start"
    },
    "next": {
      "label": "Algorithms: Use",
      "to": "/dev/algorithms/use"
    }
  }
}~
