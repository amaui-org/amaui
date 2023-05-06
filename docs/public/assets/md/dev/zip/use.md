

### API

#### AmauiZipResponse

```ts
class AmauiZipResponse {
    value?: any;
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

#### IOptions

```ts
interface IOptions {
    encode_values?: boolean;
    huffman_code?: 'auto' | boolean;
}
```

#### AmauiZip

```ts
class AmauiZip {
    value?: any;
    options: IOptions;
    serialized: boolean;
    response: AmauiZipResponse;
    static get AmauiZipResponse(): typeof AmauiZipResponse;
    static decode(value: string): AmauiZipResponse;
    get encoded(): AmauiZipResponse;
    constructor(value?: any, options?: IOptions);
    private init;
    encode(): AmauiZipResponse;
    decode(value_: string): AmauiZipResponse;
}
```

