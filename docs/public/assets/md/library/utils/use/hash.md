
# hash

Hashing method using external library `crypto-js`'s `sha256` method.

```ts
hash('a');

// 0xac8d8342bbb2362d13f0a559a3621bb407011368895164b628a54f7fc33fc43c
```

### Options

#### serialize

If the input value isn't a string, it will be serialized, by default true.

#### withPrefix

If true, adds `0x` prefix to the hash value.

## API

#### IOptions

```ts
interface IOptions {
    // default: true
    serialize?: boolean;
    // default: true
    withPrefix?: boolean;
}
```

#### hash

```ts
// defaults
// options: interface IOptions
const hash: (value_: any, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getUserLocalInfo",
      "to": "/library/utils/use/getUserLocalInfo"
    },
    "next": {
      "label": "Utils: hashFile",
      "to": "/library/utils/use/hashFile"
    }
  }
}~
