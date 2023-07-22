
# getOrdinalNumber

Returns ordinal number value, for a number as a value.

```ts
getOrdinalNumber(1);
getOrdinalNumber(2);
getOrdinalNumber(3);

// 1st
// 2nd
// 3rd
```

### Options

#### onlySufix

Returns only sufix, without the number.

```ts
getOrdinalNumber(3, { onlySufix: true });

// rd
```

## API

#### IOptions

```ts
interface IOptions {
    // default: false
    onlySufix?: boolean;
}
```

#### getOrdinalNumber

```ts
// defaults
// options: interface IOptions
const getOrdinalNumber: (value_: number, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getObjectValue",
      "to": "/dev/utils/use/getObjectValue"
    },
    "next": {
      "label": "Utils: getQueryParams",
      "to": "/dev/utils/use/getQueryParams"
    }
  }
}~
