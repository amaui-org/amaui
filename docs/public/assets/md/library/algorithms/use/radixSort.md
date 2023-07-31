
# radixSort

Radix sort method.

### Options

#### ascending

In what direction to sort, default true.

### Example

```ts
const value = [1, 1114, 114, 14];

radixSort(value);
```


## API

#### maxDigits

```ts
function maxDigits<T = number>(array: Array<T>): number;
```

#### getDigit

```ts
function getDigit(value: number, indexValue: number): number;
```

#### radixSort

```ts
default function radixSort<T = number>(value: Array<T>, ascending?: boolean): Array<T>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: quickSort",
      "to": "/library/algorithms/use/quickSort"
    },
    "next": {
      "label": "Algorithms: selectionSort",
      "to": "/library/algorithms/use/selectionSort"
    }
  }
}~
