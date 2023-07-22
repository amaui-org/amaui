
# quantize

Method that takes in array of bytes (array of number values), and returns any depth (by default 4), of values that are merged into most repeated sections of values.

```ts
quantize(ArrayBuffer, 4);

// [
//   [141, 169, 205],
//   [204, 209, 216],
//   [30, 41, 77],
//   [78, 116, 168]
// ]
```

### Why?

Use case to extract most used colors from an image, as above returns array of arrays of numbers, each array represented with 3 numbers from 0 to 256, which are rgb pixel values.

## API

#### quantize

```ts
// defaults
// amount: 4
const quantize: (value: Array<[number, number, number]>, amount?: number) => Array<[number, number, number]>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: promisify",
      "to": "/dev/utils/use/promisify"
    },
    "next": {
      "label": "Utils: random",
      "to": "/dev/utils/use/random"
    }
  }
}~
