
# binarySearch

Binary search find method.

### Options

#### sort

If array should be sorted.

#### sort method

Provide a custom sort method.

### Example

```ts
const value = [1, 1114, 114, 14];

binarySearch(value, 1114);

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

#### binarySearch

```ts
default function binarySearch(array: Array<number>, value: number, options?: IBinarySearchOptions): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: Start",
      "to": "/library/algorithms/start"
    },
    "next": {
      "label": "Algorithms: binarySearchRecursive",
      "to": "/library/algorithms/use/binarySearchRecursive"
    }
  }
}~
