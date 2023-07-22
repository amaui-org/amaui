
# hashFile

A very useful method, that reads the file as array of bytes, or a buffer (in node), then based on array of bytes, using `String.fromCharCode` returns sequence of UTF-16 code units, as a string value, and then the string gets hashed, which is the output value.

```ts
await hashFile(file);

// 0xacad7342bbb2362d13f0a559a3621bb407011368895164b628a54f7fc33fc43c
```

### Options

#### withPrefix

If true, adds `0x` prefix to the hash value.

## API

#### IOptions

```ts
interface IOptions {
    // default: true
    withPrefix?: boolean;
}
```

#### hashFile

```ts
// defaults
// options: interface IOptions
const hashFile: (value_: any, options_?: IOptions) => Promise<string>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hash",
      "to": "/dev/utils/use/hash"
    },
    "next": {
      "label": "Utils: hasObjectProperty",
      "to": "/dev/utils/use/hasObjectProperty"
    }
  }
}~
