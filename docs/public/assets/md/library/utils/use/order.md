
# order

Orders properties in an object in an ascending order, or items in the array, and returns a new value.

```ts
order({
  ad: 4,
  d: 1,
  a: [4, 1],
  b: {
    b: 'a',
    a: 4,
  },
});

// {
//   a: [
//       1,
//       4
//   ],
//   ad: 4,
//   b: {
//       a: 4,
//       b: 'a'
//   },
//   d: 1
// }
```

## API

#### order

```ts
const order: <T>(value: T) => T;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: numberWithCommas",
      "to": "/library/utils/use/numberWithCommas"
    },
    "next": {
      "label": "Utils: pagination",
      "to": "/library/utils/use/pagination"
    }
  }
}~
