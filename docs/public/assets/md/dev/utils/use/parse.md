
# parse

Parses a value to its original value type.

```ts
parse('{ "a": 1114 }');

// { a: 1114 }
```

### Options

#### log

If true, it will log parsing error.

#### returnSame

If true, returns the same value if the parse has an error.

## API

#### TType

```ts
type TType = 'JSON';
```

#### IOptions

```ts
interface IOptions {
    log?: boolean;
    // default: true
    returnSame?: boolean;
}
```

#### parse

```ts
// defaults
// type: 'JSON'
// options: interface IOptions
const parse: (value: any, type?: TType, options_?: IOptions) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: pagination",
      "to": "/dev/utils/use/pagination"
    },
    "next": {
      "label": "Utils: percentageFromValueWithinRange",
      "to": "/dev/utils/use/percentageFromValueWithinRange"
    }
  }
}~
