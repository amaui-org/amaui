

### API

#### types="node"

```ts
/// <reference types="node" />
```

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
    decimals?: number;
    mime?: string;
}
```

#### to

```ts
const to: (value_: any, type?: TType, options_?: IOptions) => TTo;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~