
# AmauiLZ77

#### Value

Value can be a `string`, `Buffer` or `Uint8Array`.

### Methods

#### encode

Making an `AmauiLZ77` instance it, encodes the value automatically.

```ts
const amauiLZ77 = new AmauiLZ77('Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fuscem dolor em, facilisis sed eratr sit amet,pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus mmalesuad.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestassed maurelit, eratr sit molestie nisi semper at.Cras interdum massa nec mmolestierutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.');

amauiLZ77.response;

// {
//     "value": " Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fusce'1f,8'em, facilisis sed erat'23,b'pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus m'1i,8'.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestas'6c,8'elit,'9d,b'molestie nisi semper at.Cras interdum massa nec m'1d,8'rutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.",
//     "original_byte_size": 583,
//     "value_byte_size": 566,
//     "compression_ratio": 1.03,
//     "compression_percentage": 2.92,
//     "positive": true,
//     "performance_milliseconds": 13,
//     "performance": "13 milliseconds"
// }
```

#### encoded

An alias for the `response` property.

```ts
const amauiLZ77 = new AmauiLZ77('Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fuscem dolor em, facilisis sed eratr sit amet,pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus mmalesuad.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestassed maurelit, eratr sit molestie nisi semper at.Cras interdum massa nec mmolestierutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.');

amauiLZ77.encoded;

// {
//     "value": " Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fusce'1f,8'em, facilisis sed erat'23,b'pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus m'1i,8'.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestas'6c,8'elit,'9d,b'molestie nisi semper at.Cras interdum massa nec m'1d,8'rutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.",
//     "original_byte_size": 583,
//     "value_byte_size": 566,
//     "compression_ratio": 1.03,
//     "compression_percentage": 2.92,
//     "positive": true,
//     "performance_milliseconds": 13,
//     "performance": "13 milliseconds"
// }
```

#### decode

Value provided should be the value previously encoded with `AmauiLZ77`.

```ts
const amauiLZ77 = new AmauiLZ77('Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fuscem dolor em, facilisis sed eratr sit amet,pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus mmalesuad.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestassed maurelit, eratr sit molestie nisi semper at.Cras interdum massa nec mmolestierutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.');

amauiLZ77.decode(amauiLZ77.response.value);

// {
//     "value": "Lorem u ipsum dolor sit amet, consectetur adipiscing elit.Fuscem dolor em, facilisis sed eratr sit amet,pharetra blandit augue.Sed id placerat felis, malesuada rutrum nisl.In ultrices sed mauris finibus mmalesuad.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat.Proin egestassed maurelit, eratr sit molestie nisi semper at.Cras interdum massa nec mmolestierutrum.Duis commodo venenatis justo, ac porta tellus pellentesque sed.Donec et nisi aumus.",
//     "original_byte_size": 583,
//     "value_byte_size": 566,
//     "performance_milliseconds": 0,
//     "performance": "0 milliseconds"
// }
```

### Util methods

### decode

Decode method as a static method.

```ts
AmauiLZ77.decode('value');
```

### prefix

Returns the first available prefix that's able to be added as quotes for the coordinates, that doesn't exist in the original string.

```ts
AmauiLZ77.prefix('value');

// '
```

### AmauiLZ77Response

Returns `AmauiLZ77Response` class constructor.

```ts
AmauiLZ77.AmauiLZ77Response;

// AmauiLZ77Response { }
```


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
