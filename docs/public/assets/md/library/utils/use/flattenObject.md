
# flattenObject

Flattens an object, where there's only key values with no nested values, each previously nested value is displayed as a top level key defined as a path to that nested key.

```ts
const value = { a: 1114, ad: { a: 114 } };

flattenObject(value);

// { a: 1114, 'ad.a': 114 };
```

## API

#### flattenObject

```ts
const flattenObject: <T extends unknown>(object: T, output_?: T, keys_?: string, key_?: string | number, value_?: any) => T;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: fileToValue",
      "to": "/library/utils/use/fileToValue"
    },
    "next": {
      "label": "Utils: getContrastRatio",
      "to": "/library/utils/use/getContrastRatio"
    }
  }
}~
