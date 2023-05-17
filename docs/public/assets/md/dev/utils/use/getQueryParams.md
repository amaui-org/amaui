
# getQueryParams

Returns query params from the URL, or with second argument a specific value of a parameter.

Every value is decoded with `decodeURIComponent` method.

```ts
// url https://amaui.me?a=114&ad1114

getQueryParams();
getQueryParams(undefined, 'a');

// { a: 114, ad: 1114 }
// 114
```

### Options

#### castParam

Makes value into an actual value type, '114' into 114, for a query param value.

## API

#### IOptions

```ts
interface IOptions {
    // default: true
    castParam?: boolean;
}
```

#### getQueryParams

```ts
// defaults
// value: window.location.search
// options: interface IOptions
const getQueryParams: (value_?: string, paramName?: string, options_?: IOptions) => object | string | number | boolean | undefined;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getOrdinalNumber",
      "to": "/dev/utils/use/getOrdinalNumber"
    },
    "next": {
      "label": "Utils: getRedirectTo",
      "to": "/dev/utils/use/getRedirectTo"
    }
  }
}~
