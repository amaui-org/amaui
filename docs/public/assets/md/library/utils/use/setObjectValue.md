
# setObjectValue

Sets a value to the property defined as a key path on an object.

Updates the object in memory, the same reference value, and returns the same value.

```ts
const value = { a: 1114, ad: { a: 1114 } };

setObjectValue(value, 'ad.a', 114);

// { a: 1114, ad: { a: 114 } };
```

### Options

#### valueOverride

Allows to override the existing value on the provided key path, by default if value exists, it's not overriden.

## API

#### IOptions

```ts
interface IOptions {
    // default: false
    valueOverride?: boolean;
}
```

#### setObjectValue

```ts
// defaults
// options: interface IOptions
const setObjectValue: <T extends unknown>(object: T, keys?: string | string[], value?: any, options_?: IOptions) => T;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: serialize",
      "to": "/library/utils/use/serialize"
    },
    "next": {
      "label": "Utils: setStringVariables",
      "to": "/library/utils/use/setStringVariables"
    }
  }
}~
