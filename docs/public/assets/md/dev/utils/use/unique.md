
# unique

Makes a unique array of simple and/or complex values.

Referenced values are only compared based on values in those reference type values based on array of keys provided in the second argument in the method.

```ts
const value = [
    1,
    14,
    { a: { a: 1 } },
    { a: { a: 1 }, ab: 4 },
    { a: { a: 4 }, ab: 4 },
    [1, 4],
    [1, 3, 4],
    [1, 3]
];

unique(value, 'a.a', '1');

// [
//   1,
//   14,
//   { a: { a: 1 } },
//   { a: { a: 4 }, ab: 4 },
//   [1, 4],
//   [1, 3, 4]
// ]
```

### Why?

Useful for making a unique list of complex objects.

## API

#### unique

```ts
const unique: <T extends unknown>(object: T, ...args: string[]) => any[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: unflattenObject",
      "to": "/dev/utils/use/unflattenObject"
    },
    "next": {
      "label": "Utils: updateQueryParams",
      "to": "/dev/utils/use/updateQueryParams"
    }
  }
}~
