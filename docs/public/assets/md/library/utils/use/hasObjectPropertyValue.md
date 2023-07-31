
# hasObjectPropertyValue

Returns true if the provided key resolve to a property of that path's object, array.

```ts
const value = { a: 1114, ad: { a: 114 }, a14: [1, { a: 114 }] };
const value1 = [1114, { a: 114 }];

hasObjectPropertyValue(value, 'ad.a');
// Array in the path, use an index as a key in the path
hasObjectPropertyValue(value, 'a14.1.a');
// Array can be the top level value as well
hasObjectPropertyValue(value1, '1.a');

// true
// true
// true
```

## API

#### hasObjectPropertyValue

```ts
const hasObjectPropertyValue: (object: object, keys?: string | string[]) => boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hasObjectProperty",
      "to": "/library/utils/use/hasObjectProperty"
    },
    "next": {
      "label": "Utils: hexadecimalStringToBinary",
      "to": "/library/utils/use/hexadecimalStringToBinary"
    }
  }
}~
