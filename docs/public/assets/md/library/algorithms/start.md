
# amaui algorithms

Algorithms for various use cases.

### Add

```bash
yarn add @amaui/algorithms
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

```ts
import { bubbleSort } from '@amaui/algorithms';

const value = [1, 14, 7, 4];

bubbleSort(value);

// [1, 4, 7, 14]

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
      "label": "Icons Material react: Start",
      "to": "/library/icons-material-react/start"
    },
    "next": {
      "label": "Algorithms: BinarySearch",
      "to": "/library/algorithms/use/binarySearch"
    }
  }
}~
