

## API

#### TArrayVariant

```ts
type TArrayVariant = 'preorder';
```

#### IAmauiNode

```ts
interface IAmauiNode {
    value: number;
    word?: any;
    path?: string;
    left: AmauiNode;
    right: AmauiNode;
    [p: string]: any;
}
```

#### AmauiHuffmanCodeResponse

```ts
class AmauiHuffmanCodeResponse {
    value: any;
    values?: Record<string, string>;
    values_encoded?: any;
    probabilities?: Record<string, number>;
    efficiency?: number;
    redundency?: number;
    entropy?: number;
    original_byte_size?: number;
    values_byte_size?: number;
    value_byte_size?: number;
    encoded_byte_size?: number;
    compression_ratio?: number;
    compression_percentage?: number;
    positive?: boolean;
    average_code_word_length?: number;
    performance_milliseconds?: number;
    performance?: string;
    constructor(value?: any, values?: Record<string, string>, values_encoded?: any, probabilities?: Record<string, number>, efficiency?: number, redundency?: number, entropy?: number, original_byte_size?: number, values_byte_size?: number, value_byte_size?: number, encoded_byte_size?: number, compression_ratio?: number, compression_percentage?: number, positive?: boolean, average_code_word_length?: number, performance_milliseconds?: number, performance?: string);
}
```

#### AmauiNode

```ts
class AmauiNode implements IAmauiNode {
    value: number;
    word?: any;
    left: AmauiNode;
    right: AmauiNode;
    [p: string]: any;
    constructor(value?: number, word?: any);
    get leaf(): boolean;
    get maxDepth(): number;
}
```

#### IAmauiHuffmanTree

```ts
interface IAmauiHuffmanTree {
    root: AmauiNode;
}
```

#### AmauiHuffmanTree

```ts
class AmauiHuffmanTree implements IAmauiHuffmanTree {
    root: AmauiNode;
    static make(value: Array<any>): AmauiHuffmanTree;
    get array(): Array<any>;
    isRoot(value: AmauiNode): boolean;
    preorder(value: AmauiNode, method: TMethod): void;
    make(value_: Array<any>): AmauiHuffmanTree;
}
```

#### TEncoding

```ts
type TEncoding = 'binary' | 'hexadecimal';
```

#### IOptions

```ts
interface IOptions {
    encode_values?: boolean;
    base64?: boolean;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### AmauiHuffmanCode

```ts
class AmauiHuffmanCode {
    value?: string;
    options: IOptions;
    huffmanTree: AmauiHuffmanTree;
    probabilities: Record<string, number>;
    values: Record<string, string>;
    response: AmauiHuffmanCodeResponse;
    private startTime;
    static get AmauiHuffmanCodeResponse(): typeof AmauiHuffmanCodeResponse;
    static get AmauiNode(): typeof AmauiNode;
    static get AmauiHuffmanTree(): typeof AmauiHuffmanTree;
    static encodeValue(value: string): string;
    static decodeValue(value_: string): string;
    static encodeValues(values: Record<string, string>, encodeValues?: boolean): string | object;
    static decodeValues(value: string): object;
    static getValues(amauiHuffmanTree: AmauiHuffmanTree): Record<string, string>;
    static decode(value: string, values: Record<string, string>): AmauiHuffmanCodeResponse;
    static encodeBase64(value: string): string;
    static decodeBase64(value: string): string;
    get encoded(): AmauiHuffmanCodeResponse;
    get entropy(): number;
    get averageCodeWordLength(): number;
    get redundency(): number;
    get efficiency(): number;
    constructor(value?: string, options?: IOptions);
    private init;
    encode(): AmauiHuffmanCodeResponse;
    decode(value_: string): AmauiHuffmanCodeResponse;
    getProbabilities(): Record<string, number>;
    normalizeProbabilities(): Record<string, number>;
    makeHuffmanTree(): AmauiHuffmanTree;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Huffman Code: Start",
      "to": "/dev/huffman-code/start"
    },
    "next": {
      "label": "Linked List: Start",
      "to": "/dev/linked-list/start"
    }
  }
}~
