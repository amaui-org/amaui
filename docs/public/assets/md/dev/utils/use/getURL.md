
# getURL

Returns a valid url string from a value.

```ts
getURL('a.com');
getURL('https://a.com/a?a=a4');

//
// https://a.com/a?a=a4
```

### Options

#### URL

If true, returns URL object, otherwise url as a string value.

## API

#### IOptions

```ts
interface IOptions {
    URL?: boolean;
}
```

#### getURL

```ts
const getURL: (value: string, options_?: IOptions) => URL | string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getStringVariables",
      "to": "/dev/utils/use/getStringVariables"
    },
    "next": {
      "label": "Utils: getUserLocalInfo",
      "to": "/dev/utils/use/getUserLocalInfo"
    }
  }
}~
