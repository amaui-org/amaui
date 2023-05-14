
# amaui zip

Library for zipping & unzipping any data.

### Zip

More or less any value can be zipped, as if it's not `uint8array`, `buffer` or `string` it will be serialized, so a javascript object will get zipped as a serialized JSON, and on unzip it will be parsed back into an object. Very useful yes. :)

Value zipped is stateless, meaning it doesn't require any information other than the information in itself to be unzipped on the other end.

Under the hood AmauiZip uses 2 data compression algorithms, also with amaui libraries AmauiHuffmanCode, AmauiLZ77.

Library **AmauiHuffmanCode** essentially takes the string, and orders all characters by their frequency, and to the them assigns the lowest byte value, while in the process of replacing each charater with 0s and 1s.

Library **AmauiLZ77** algorithm finds already mentioned parts of the string on its left, and just removes it from that location, and instead replaces it with a pointer where that data is on the left, and how many characters it is. That way if string has redundency in itself it will get compressed well.

Meaning the more redundency the data has, the better the compression will be.

```ts
new AmauiZip('Value to zip');

new AmauiZip(14);

new AmauiZip({ a: 14 });
```

### Unzip

```ts
const response = new AmauiZip('Value to zip');

const unzipped = AmauiZip.decode(response.value);

unzipped.value;

// Value to zip
```

### Options

```ts
const options = {
  // default true
  encode_values: true,
  // default 'auto'
  huffman_code: 'auto'
};

const response = new AmauiZip('Value to zip', options);
```

#### encode\_values

Values: `true`, `false`

Is an option passed into the AmauiHuffmanCode, for it to either encode the huffman code values or not.

In some use cases it depends, and toggling it might influence difference in value byte size.

#### huffman\_code

Values: `'auto'`, `true`, `false`

If auto, than if encoding value with huffman code algorithm produces larger data size than the original input, huffman code algorithm isn't used, otherwise it is used.

If true, even if huffman code produces larger output than the input, it will still be used.

If false, huffman code algorithm won't be used.

### Response

Inside the zip response you have the value, and other useful meta data, including whether the zip was positive.

If zip is positive it means that the zipped value in byte size is smaller, than the original data, which means we succesfully compressed the data.

If zip is negative it means that the zipped value in byte size is larger, than the original data, in that case using original data (if smaller data size is your goal) is a better way to go.

```ts
{
    // Compressed value
    "value": "00 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo'1n,9' mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor t'30,8'. Fusce neque't,6', commodo nec justo nec,'n,9'euismod erat. Vivamus at t'5e,9'massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non '35,9'rat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus.'5v,a'uctor quis erat a porta.\n\nMauris vel dui at lectus t'cm,9'finibus id u'7m,7'. Phasellus in velit elit. Etiam eu dapibus lorem. Maecena'9s,f'urna. Cras vulputate lobortis urna quis condimentum. Ut si'gk,7'sodales metus, eu eleifend arcu. In sed porta elit. Duis s'ie,8'dictum v's,6'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed c'ej,7'vitae magna eu c'np,a'.'c7,9'f'gg,8'v'le,7' dignissim. Aliquam'21,9'uris lacinia,'7r,9'ante eu,'24,a'leo. Suspendisse vel s'1b,7'lacus. A'2k,7'erat v'q4,8'\n\nMaecenas m'p2,8'neque vel purus aliquam,'47,7'pharetra purus m'ql,7'.'q5,7's't6,8'odio'dg,c', bibendu'bc,7' 'kx,b','lj,a'lorem. Aenean vestibulum lacus 'vt,9'lectus sagittis consequat.'7e,d'est ante,'a0,a' eget 'lv,7'ac, d'k6,7'ornare purus. Proin porta p'6s,8'ipsum,'ib,d'erat c'11d,b'pretium. Nullam s'c8,7'nisi non metus '10w,8','u2,8'blandit tellus iaculis. Quisque el'36,c'orci, ac elementum nunc c'157,c't. Ve'8y,9'curs'cw,8'et ferm'ou,a'fringilla ligula sed quam p'71,7', sed congue metus euismod.\n\nQ'4l,7'v's2,9'i'uc,8'vel v'17h,9'Fusce sollicitudin sed risus et v'18n,9'A'j6,8'get nisi vel risus tempor i'84,8'In l'v6,8'c'1cd,b'ipsum, sed cons'1d0,8'mi e'ur,9'.'y0,a'egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras s'6b,c'non augue volutpat ultricies. Mauris finibus urna velit, a e'44,7'tellus f'11,8't. Nam a tortor et ligula v'dv,b'o'1jt,a's'1is,8'ac mi'in,7' '1kr,c'diam vitae elit t'6t,8' 'f2,9'. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex'oa,8'convallis, eros et viverra f'3i,8', orci purus u'8x,8' lectus, rutrum ultrices odio nibh non odio.'ni,9'imperdiet elit eu s'1kt,8'suscipit. Pellentesque s'1lp,8'ex sed mattis im'21,7'.'15x,9'e'c3,8'r'8w,8'nisl non ornare. Duis f'ok,9'maximus venenatis. P'w0,9'titor eget quam s'1vh,8'v'1v7,9'Nulla arcu purus,'187,8' id v'hf,9't, t'1xm,9's'1pe,8'. Donec ullamcorper id lacus in placerat.'7k,e'a'da,8'u'1y8,9'e'6x,7'pulvinar. M'1c5,8'oreet sem augue, eget auctor erat semper '1ux,9'Nulla e'1q6,9'mi. Etiam s'16d,8'libero at lobortis t'20u,a'S'1ea,b'sem ligula,'39,9'u'85,b','15w,a's'19f,9'acus. Fusce quis arcu v'nz,9','6h,9' neque u'ib,8','u1,9'justo.",
    // Byte size of the original input
    "original_byte_size": 2941,
    // Value byte size
    "value_byte_size": 2664,
    // Compression ratio, above 1 it's positive, and below is negative compression
    "compression_ratio": 1.1,
    // Data compression in percentage as a number value
    "compression_percentage": 9.42,
    // If compression is positive or negative
    "positive": true,
    // Time it took to compress the data in milliseconds
    "performance_milliseconds": 57,
    // Perfomance time as a formated value
    "performance": "57 milliseconds"
}
```

### Try it

~{
  "element": "Example",
  "props": {
    "label": "Zip",
    "id": "Zip-examples-zip"
  }
}~

~{
  "element": "Example",
  "props": {
    "label": "Unzip",
    "id": "Zip-examples-unzip"
  }
}~

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Zip: Start",
      "to": "/dev/zip/start"
    }
  }
}~
