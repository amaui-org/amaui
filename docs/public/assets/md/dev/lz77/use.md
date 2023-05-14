

## API

#### TVariant

```ts
type TVariant = Buffer | Uint8Array | string;
```

#### AmauiLZ77Response

```ts
class AmauiLZ77Response {
    value: any;
    original_byte_size?: number;
    value_byte_size?: number;
    compression_ratio?: number;
    compression_percentage?: number;
    positive?: boolean;
    performance_milliseconds?: number;
    performance?: string;
    constructor(value?: any, original_byte_size?: number, value_byte_size?: number, compression_ratio?: number, compression_percentage?: number, positive?: boolean, performance_milliseconds?: number, performance?: string);
}
```

#### AmauiLZ77

```ts
class AmauiLZ77 {
    value?: TVariant;
    variant: TVariant;
    response: AmauiLZ77Response;
    valueString: string;
    valueEncoded: Uint8Array | Buffer;
    static get AmauiLZ77Response(): typeof AmauiLZ77Response;
    static decode(value: string): AmauiLZ77Response;
    static prefix(value: string): string;
    get encoded(): AmauiLZ77Response;
    constructor(value?: TVariant);
    private into;
    encode(): AmauiLZ77Response;
    decode(value_: string): AmauiLZ77Response;
    private valueToVariant;
    private variantToValue;
    private valueEncode;
    private valueDecode;
    private getVariant;
    private equal;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "LZ77: Start",
      "to": "/dev/lz77/start"
    },
    "next": {
      "label": "Meta: Start",
      "to": "/dev/meta/start"
    }
  }
}~
