
# hasObjectProperty

Returns true if any of the provided key paths resolve to a property of that path's object, array.

```ts
const value = { a: 1114, ad: { a: 114 }, a14: [1, { a: 14 }] };
const value1 = [1114, { a: 114 }];

hasObjectProperty(value, 'a.a1', 'ad.aad.a', 'ad.a');
hasObjectProperty(value1, '1.a');

// true
// true
```

## API

#### hasObjectProperty

```ts
const hasObjectProperty: (object: object, ...args: string[]) => boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hashFile",
      "to": "/library/utils/use/hashFile"
    },
    "next": {
      "label": "Utils: hasObjectPropertyValue",
      "to": "/library/utils/use/hasObjectPropertyValue"
    }
  }
}~
