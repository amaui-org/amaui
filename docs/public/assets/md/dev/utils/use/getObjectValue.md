
# getObjectValue

Returns a value from the first key path that exists as a property on that path's object.

```ts
const value = { a: 1114, ad: { a: 114 }, a14: [1, { a: 14 }] };

getObjectValue(value, 'a.a1', 'ad.aad.a', 'ad.a');

// 114
```

## API

#### getObjectValue

```ts
const getObjectValue: (object: object, ...args: string[]) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getObjectPropertyValue",
      "to": "/dev/utils/use/getObjectPropertyValue"
    },
    "next": {
      "label": "Utils: getOrdinalNumber",
      "to": "/dev/utils/use/getOrdinalNumber"
    }
  }
}~
