
# castParam

Converts value as a string, into its original value type.

```ts
castParam('a');
castParam('14');
castParam('true');
castParam('null');
castParam('undefined');

// a
// 14
// true
// null
// undefined
```

## API

#### IOptions

```ts
interface IOptions {
    decode?: boolean;
    decodeMethod?: (value: string) => string;
}
```

#### castParam

```ts
// defaults
// options: {}
const castParam: (value: any, options_?: IOptions) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: capitalize",
      "to": "/dev/utils/use/capitalize"
    },
    "next": {
      "label": "Utils: checkAppVersion",
      "to": "/dev/utils/use/checkAppVersion"
    }
  }
}~
