
# getObjectValue

Returns a value from the first key path that exists as a property on that path's object.

```ts
const value = { a: 1114, ad: { a: 114 }, a14: [1, { a: 14 }] };
const value1 = [1114, { a: 114 }];

getObjectValue(value, 'a.a1', 'ad.aad.a', 'ad.a');
getObjectValue(value1, '1.a');

// 114
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
      "to": "/library/utils/use/getObjectPropertyValue"
    },
    "next": {
      "label": "Utils: getOrdinalNumber",
      "to": "/library/utils/use/getOrdinalNumber"
    }
  }
}~
