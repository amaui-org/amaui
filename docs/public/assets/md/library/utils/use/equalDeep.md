
# equalDeep

Equality match for any 2 values, even the deeply nested ones, by values not reference.

```ts
const value1 = { a: 114, ad: { a: 1114 } };
const value2 = { a: 114, ad: { a: 1114 } };

equalDeep(value1, value2);

// true
```

## API

#### equalDeep

```ts
const equalDeep: (valueA: any, valueB: any) => boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: encrypt",
      "to": "/library/utils/use/encrypt"
    },
    "next": {
      "label": "Utils: factorial",
      "to": "/library/utils/use/factorial"
    }
  }
}~
