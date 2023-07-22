
# unflattenObject

Unflattens a previously flattened object.

```ts
const value = { a: 1114, 'ad.a': 114 };

unflattenObject(value);

// {
//   a: 1114,
//   ad: {
//       a: 114
//   }
// }
```

## API

#### unflattenObject

```ts
const unflattenObject: (object: object) => object;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: try",
      "to": "/dev/utils/use/try"
    },
    "next": {
      "label": "Utils: unique",
      "to": "/dev/utils/use/unique"
    }
  }
}~
