
# binarySearchRecursive

Binary search recurrsive find method.

### Options

#### sort

If array should be sorted.

#### sort method

Provide a custom sort method.

### Example

```ts
const value = [1, 1114, 114, 14];

binarySearchRecursive(value, 1114);

// 1
```

## API

#### IBinarySearchOptions

```ts
interface IBinarySearchOptions {
    sort?: boolean;
    sortMethod?: TMethod;
}
```

## API

#### IBinarySearchRecursiveOptions

```ts
interface IBinarySearchRecursiveOptions {
    sort?: boolean;
    sortMethod?: TMethod;
}
```

#### binarySearchRecursive

```ts
default function binarySearchRecursive(array: Array<number>, value: number, startValue?: number, endValue?: number, options?: IBinarySearchRecursiveOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: binarySearch",
      "to": "/dev/algorithms/use/binarySearch"
    },
    "next": {
      "label": "Algorithms: bubbleSort",
      "to": "/dev/algorithms/use/bubbleSort"
    }
  }
}~
