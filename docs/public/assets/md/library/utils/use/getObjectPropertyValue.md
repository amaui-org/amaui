
# getObjectPropertyValue

Returns a value from any property, even deep nested ones.

```ts
const value = { a: 1114, ad: { a: 114 }, a14: [1, { a: 114 }] };
const value1 = [1114, { a: 114 }];

getObjectPropertyValue(value, 'ad.a');
// Array in the path, use an index as a key in the path
getObjectPropertyValue(value, 'a14.1.a');
// Array can be the top level value as well
getObjectPropertyValue(value1, '1.a');

// 114
// 114
// 114
```

## API

#### getObjectPropertyValue

```ts
const getObjectPropertyValue: (object: object, keys?: string | string[]) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getLuminance",
      "to": "/dev/utils/use/getLuminance"
    },
    "next": {
      "label": "Utils: getObjectValue",
      "to": "/dev/utils/use/getObjectValue"
    }
  }
}~
