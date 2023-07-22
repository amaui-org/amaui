
# removeObjectValue

Removes values of an object on all provided key paths.

```ts
const value = { a: 1114, a14: [1114, { a: 1114, ad: 114 }] };

removeObjectValue(value, 'a14.1.a');

// { a: 1114, a14: [1114, { ad: 114 }] }
```

## API

#### removeObjectValue

```ts
const removeObjectValue: (object: object | any[], keys: string | string[]) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: randomString",
      "to": "/dev/utils/use/randomString"
    },
    "next": {
      "label": "Utils: rgbToHex",
      "to": "/dev/utils/use/rgbToHex"
    }
  }
}~
