
# to

Makes value provided into one of the types (second argument) provided.

```ts
to('1404040', 'size-format');

// 1.34 MB
```

### Type

- string: Value into string.
- arraybuffer: Value into ArrayBuffer.
- datauri: Value into DataUri.
- base64: Value into Base64.
- blob: Value into Blob.
- buffer: Value into Buffer.
- byte-size: Text size in bytes, as a number.
- size: Text size in bytes, as size formated value.
- size-format: Number into size formated value.

## API

#### TType

```ts
type TType = 'string' | 'arraybuffer' | 'datauri' | 'base64' | 'blob' | 'buffer' | 'byte-size' | 'size' | 'size-format';
```

#### TTo

```ts
type TTo = ArrayBuffer | Blob | Buffer | string | number;
```

#### IOptions

```ts
interface IOptions {
    // Used for: size, size-format
    // default: 2
    decimals?: number;
    // Used for: datauri
    // default: text/plain
    mime?: string;
}
```

#### to

```ts
// defaults
// options: interface IOptions
const to: (value_: any, type?: TType, options_?: IOptions) => TTo;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: stringify",
      "to": "/dev/utils/use/stringify"
    },
    "next": {
      "label": "Utils: try",
      "to": "/dev/utils/use/try"
    }
  }
}~
