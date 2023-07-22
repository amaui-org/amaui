
# AmauiHuffmanCode

It is an algorithm that takes in a string, and makes a graph of all the characters, and characters that repeat the most, get the highest value.

Then the heigher the value is for a node, the smaller number of bits it gets to represent it, but building the Huffman Tree is done properly so those variables that are in bits, that represent characters don't overlap each other.

And then simply all chacters in the original string get replaced by their bit values, and new string of 0s and 1s gets further compressed by converting it from binary to hexadecimal representation, and then from there into string from hexadecimal character codes, which from there can be base64 encoded which sometimes further compresses it, and sometimes not.

In order to decode it, output is encoded string, with the dictionary of which character is replaced with what bits, which you need in order to decode the string properly.

### Options

#### encode\_values

If dictionary values ought to be encoded, default true.

#### base64

If both encoded value & encoded_values should be together base64 encoded, default true.

### Methods

#### encode

Making an instance of `AmauiHuffmanCode` with a value, encodes the values automatically.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

const response = amauiHuffmanCode.encoded;

response;

// {
//     "value": "AAL/6Mjb+q+srfy4u4qO2rjvr6y/uPjdqp+KyMjvjs3s7L6uvrmuzp+d/+rY+unJ3Ji6zb/7vu+PzuztnbrMu5iey62cu9van9z5/eiaiPu/27zp2cu8q+jN+d+8y7qrue3ensj6nfua7O392/25rK+O+4isiK387O2765/ruNuojM+tusy7r/jIzt37quz/ytuv+urY3p3vzr7bva27z6jOy6np+cq9qM/Muv2N3p3bq4jJ7sio/YzOy56ouPjcr/q+64usie/uvMjs3L2eyLrr+rvZ3qjt+c/52KvpicvMjY2v7ozsy9mdyJqImv7/rvnLq4/uub7Krr7turjvrs/sr6/ozsy/3ey4j+jcvNrq3Zy5rY65j+qL2Pzv34i5u5n42sva7f6Ymdua7On92s6d7e2O3p3NrKrc7O2e2a+8yO+p+c/Yntuq7JiLjb+v+tr7nMv6+O6tqZrojYiNv+u/6auunp37yri8/dnM76mduf+a2I/7vL+ejJj7qNuumtz5rtzOya36mbrMu+u/6NzL+anOztnt7Ymt9A==",
//     "values": {
//         "r": "0000",
//         "o": "0001",
//         "u": "0010",
//         "d": "00110",
//         "c": "00111",
//         "e": "010",
//         "n": "0110",
//         "p": "01110",
//         "g": "0111100",
//         "C": "01111010",
//         "v": "01111011",
//         "h": "0111110",
//         "I": "01111110",
//         "j": "01111111",
//         "t": "1000",
//         "i": "1001",
//         "s": "1010",
//         "l": "10110",
//         "m": "10111",
//         " ": "110",
//         "a": "1110",
//         ".": "111100",
//         "q": "1111010",
//         "f": "11110110",
//         "S": "111101110",
//         "P": "111101111",
//         ",": "111110",
//         "b": "1111110",
//         "D": "11111110",
//         "L": "111111110",
//         "F": "111111111"
//     },
//     "values_encoded": "1r\u0000\u0002 o\u0000\u0002 u\u0000\u0002 d\u0000\u0002 c\u0000\u0002 e\u0000\u0000\n n\u0000\u0002² p\u0000\u0002¶ g\u0000\u0002¾\u0002 C\u0000\u0002¾\u0006 v\u0000\u0002¾\u0007 h\u0000\u0002¿\u0002 I\u0000\u0002¿\u0006 j\u0000\u0002¿\u0007 t\u0000\u0002Â i\u0000\u0002Ã s\u0000\u0002Ò l\u0000\u0002Ö m\u0000\u0002×  \u0000\u0000\u000e a\u0000\u0002ò .\u0000\u0000ü q\u0000\u0002ý\u0002 f\u0000\u0002ý\u0006 S\u0000\u0000ý\u000e P\u0000\u0000ý\u000f ,\u0000\u0000þ b\u0000\u0002ÿ\u0002 D\u0000\u0002ÿ\u0006 L\u0000\u0000ÿ\u000e F\u0000\u0000ÿ\u000f",
//     "probabilities": {
//         "L": 0.0017,
//         "o": 0.0475,
//         "r": 0.0526,
//         "e": 0.0985,
//         "m": 0.039,
//         " ": 0.1511,
//         "i": 0.0764,
//         "p": 0.0187,
//         "s": 0.0815,
//         "u": 0.0526,
//         "d": 0.0306,
//         "l": 0.0407,
//         "t": 0.0781,
//         "a": 0.0696,
//         ",": 0.017,
//         "c": 0.0306,
//         "n": 0.0441,
//         "g": 0.0068,
//         ".": 0.017,
//         "F": 0.0017,
//         "f": 0.0051,
//         "h": 0.0051,
//         "b": 0.0068,
//         "S": 0.0017,
//         "I": 0.0034,
//         "C": 0.0034,
//         "q": 0.0085,
//         "v": 0.0034,
//         "P": 0.0017,
//         "D": 0.0034,
//         "j": 0.0017
//     },
//     "efficiency": 0.991,
//     "redundency": 0.037,
//     "entropy": 4.138,
//     "original_byte_size": 589,
//     "values_byte_size": 198,
//     "value_byte_size": 552,
//     "encoded_byte_size": 750,
//     "compression_ratio": 0.79,
//     "compression_percentage": -27.33,
//     "positive": false,
//     "average_code_word_length": 4.175,
//     "performance_milliseconds": 6,
//     "performance": "6 milliseconds"
// }
```

#### decode

Decodes the previously encoded `AmauiHuffmanCode` value, by providing the encoded value, and decoded values (if they were encoded), only if using the static decode method, if using same `AmauiHuffmanCode` instance after encoding it already has the values of the dictionary inside of itself.

Decode using the same instance.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

const response = amauiHuffmanCode.encoded;

amauiHuffmanCode.decode(response.value);

// {
//     "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.",
//     "original_byte_size": 589,
//     "value_byte_size": 552,
//     "performance_milliseconds": 5,
//     "performance": "5 milliseconds"
// }
```

Or using the `AmauiHuffmanCode` static decode method.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

const response = amauiHuffmanCode.encoded;

AmauiHuffmanCode.decode(response.value, response.values);

// {
//     "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.",
//     "original_byte_size": 589,
//     "value_byte_size": 552,
//     "performance_milliseconds": 5,
//     "performance": "5 milliseconds"
// }
```

### Other

Usually all of these are only used if you make an instance of `AmauiHuffmanCode` without a value, and plan to manually add the value after, and call each of these methods manually.

##### getProbabilities

Method that creates an object of all characters in the string, and for each how much it occurs.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode();

amauiHuffmanCode.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.';

amauiHuffmanCode.getProbabilities();

// { 'L': 1, 'o': 28, 'r': 31, 'e': 58, 'm': 23, ' ': 89, 'i': 45, 'p': 11, 's': 48, 'u': 31, 'd': 18, 'l': 24, 't': 46, 'a': 41, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 }
```

##### normalizeProbabilities

Normalizes the probabilities of each character occuring in the string relative to total occurence of all characters, how much percentage wise in the number format between 0 & 1, ie. `0.114`.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode();

amauiHuffmanCode.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.';

amauiHuffmanCode.getProbabilities();

amauiHuffmanCode.normalizeProbabilities();

// { 'L': 0.0017, 'o': 0.0475, 'r': 0.0526, 'e': 0.0985, 'm': 0.039, ' ': 0.1511, 'i': 0.0764, 'p': 0.0187, 's': 0.0815, 'u': 0.0526, 'd': 0.0306, 'l': 0.0407, 't': 0.0781, 'a': 0.0696, ',': 0.017, 'c': 0.0306, 'n': 0.0441, 'g': 0.0068, '.': 0.017, 'F': 0.0017, 'f': 0.0051, 'h': 0.0051, 'b': 0.0068, 'S': 0.0017, 'I': 0.0034, 'C': 0.0034, 'q': 0.0085, 'v': 0.0034, 'P': 0.0017, 'D': 0.0034, 'j': 0.0017 }
```

##### makeHuffmanTree

Makes a huffman tree based on the probabilities of all characters in the string value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode();

amauiHuffmanCode.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.';

amauiHuffmanCode.getProbabilities();

amauiHuffmanCode.normalizeProbabilities();

amauiHuffmanCode.makeHuffmanTree();

// AmauiHuffmanTree { }
```

##### encoded

Returns the response after encoding the value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

amauiHuffmanCode.encoded;

// {
//     "value": "AAL/6Mjb+q+srfy4u4qO2rjvr6y/uPjdqp+KyMjvjs3s7L6uvrmuzp+d/+rY+unJ3Ji6zb/7vu+PzuztnbrMu5iey62cu9van9z5/eiaiPu/27zp2cu8q+jN+d+8y7qrue3ensj6nfua7O392/25rK+O+4isiK387O2765/ruNuojM+tusy7r/jIzt37quz/ytuv+urY3p3vzr7bva27z6jOy6np+cq9qM/Muv2N3p3bq4jJ7sio/YzOy56ouPjcr/q+64usie/uvMjs3L2eyLrr+rvZ3qjt+c/52KvpicvMjY2v7ozsy9mdyJqImv7/rvnLq4/uub7Krr7turjvrs/sr6/ozsy/3ey4j+jcvNrq3Zy5rY65j+qL2Pzv34i5u5n42sva7f6Ymdua7On92s6d7e2O3p3NrKrc7O2e2a+8yO+p+c/Yntuq7JiLjb+v+tr7nMv6+O6tqZrojYiNv+u/6auunp37yri8/dnM76mduf+a2I/7vL+ejJj7qNuumtz5rtzOya36mbrMu+u/6NzL+anOztnt7Ymt9A==",
//     "values": {
//         "r": "0000",
//         "o": "0001",
//         "u": "0010",
//         "d": "00110",
//         "c": "00111",
//         "e": "010",
//         "n": "0110",
//         "p": "01110",
//         "g": "0111100",
//         "C": "01111010",
//         "v": "01111011",
//         "h": "0111110",
//         "I": "01111110",
//         "j": "01111111",
//         "t": "1000",
//         "i": "1001",
//         "s": "1010",
//         "l": "10110",
//         "m": "10111",
//         " ": "110",
//         "a": "1110",
//         ".": "111100",
//         "q": "1111010",
//         "f": "11110110",
//         "S": "111101110",
//         "P": "111101111",
//         ",": "111110",
//         "b": "1111110",
//         "D": "11111110",
//         "L": "111111110",
//         "F": "111111111"
//     },
//     "values_encoded": "1r\u0000\u0002 o\u0000\u0002 u\u0000\u0002 d\u0000\u0002 c\u0000\u0002 e\u0000\u0000\n n\u0000\u0002² p\u0000\u0002¶ g\u0000\u0002¾\u0002 C\u0000\u0002¾\u0006 v\u0000\u0002¾\u0007 h\u0000\u0002¿\u0002 I\u0000\u0002¿\u0006 j\u0000\u0002¿\u0007 t\u0000\u0002Â i\u0000\u0002Ã s\u0000\u0002Ò l\u0000\u0002Ö m\u0000\u0002×  \u0000\u0000\u000e a\u0000\u0002ò .\u0000\u0000ü q\u0000\u0002ý\u0002 f\u0000\u0002ý\u0006 S\u0000\u0000ý\u000e P\u0000\u0000ý\u000f ,\u0000\u0000þ b\u0000\u0002ÿ\u0002 D\u0000\u0002ÿ\u0006 L\u0000\u0000ÿ\u000e F\u0000\u0000ÿ\u000f",
//     "probabilities": {
//         "L": 0.0017,
//         "o": 0.0475,
//         "r": 0.0526,
//         "e": 0.0985,
//         "m": 0.039,
//         " ": 0.1511,
//         "i": 0.0764,
//         "p": 0.0187,
//         "s": 0.0815,
//         "u": 0.0526,
//         "d": 0.0306,
//         "l": 0.0407,
//         "t": 0.0781,
//         "a": 0.0696,
//         ",": 0.017,
//         "c": 0.0306,
//         "n": 0.0441,
//         "g": 0.0068,
//         ".": 0.017,
//         "F": 0.0017,
//         "f": 0.0051,
//         "h": 0.0051,
//         "b": 0.0068,
//         "S": 0.0017,
//         "I": 0.0034,
//         "C": 0.0034,
//         "q": 0.0085,
//         "v": 0.0034,
//         "P": 0.0017,
//         "D": 0.0034,
//         "j": 0.0017
//     },
//     "efficiency": 0.991,
//     "redundency": 0.037,
//     "entropy": 4.138,
//     "original_byte_size": 589,
//     "values_byte_size": 198,
//     "value_byte_size": 552,
//     "encoded_byte_size": 750,
//     "compression_ratio": 0.79,
//     "compression_percentage": -27.33,
//     "positive": false,
//     "average_code_word_length": 4.175,
//     "performance_milliseconds": 1,
//     "performance": "1 millisecond"
// }
```

##### entropy

Returns the entropy of the encoded value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

amauiHuffmanCode.entropy;

// 4.138
```

##### averageCodeWordLength

Returns the averageCodeWordLength of the encoded value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

amauiHuffmanCode.averageCodeWordLength;

// 4.175
```

##### redundency

Returns the redundency of the encoded value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

amauiHuffmanCode.redundency;

// 0.037
```

##### efficiency

Returns the efficiency of the encoded value.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

amauiHuffmanCode.efficiency;

// 0.991
```

### Util methods

#### AmauiHuffmanCodeResponse

Returns `AmauiHuffmanCodeResponse` class constructor.

```ts
AmauiHuffmanCode.AmauiHuffmanCodeResponse;

// AmauiHuffmanCodeResponse
```

#### AmauiNode

Returns `AmauiNode` class constructor.

```ts
AmauiHuffmanCode.AmauiNode;

// AmauiNode
```

#### AmauiHuffmanTree

Returns `AmauiHuffmanTree` class constructor.

```ts
AmauiHuffmanCode.AmauiHuffmanTree;

// AmauiHuffmanTree
```

#### encodeValue

Encodes a binary string value.

```ts
AmauiHuffmanCode.encodeValue('101110111101');

// '\x00\x00Þý'
```

#### decodeValue

Decodes encoded value into initial binary value.

```ts
AmauiHuffmanCode.decodeValue('\x00\x00Þý');

// '101110111101'
```

#### encodeValues

Encodes the dictionary values, each property being a character, and its value binary string value representing that character in the new compressed string value.

```ts
AmauiHuffmanCode.encodeValues({ a: '101110111101' });

// '1a\x00\x00Þý'
```

#### decodeValues

Decodes the previously encoded string using `encodeValues` static method, and returns the original dictionary object.

```ts
AmauiHuffmanCode.decodeValues('1a\x00\x00Þý');

// { a: '101110111101' }
```

#### getValues

Returns the dictionary values from the `AmauiHuffmanTree`.

```ts
const amauiHuffmanCode = new AmauiHuffmanCode();

amauiHuffmanCode.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.';

amauiHuffmanCode.getProbabilities();

amauiHuffmanCode.normalizeProbabilities();

amauiHuffmanCode.makeHuffmanTree();

AmauiHuffmanCode.getValues(amauiHuffmanCode.huffmanTree);

// {
//     'r': '0000',
//     'o': '0001',
//     'u': '0010',
//     'd': '00110',
//     'c': '00111',
//     'e': '010',
//     'n': '0110',
//     'p': '01110',
//     'g': '0111100',
//     'C': '01111010',
//     'v': '01111011',
//     'h': '0111110',
//     'I': '01111110',
//     'j': '01111111',
//     't': '1000',
//     'i': '1001',
//     's': '1010',
//     'l': '10110',
//     'm': '10111',
//     ' ': '110',
//     'a': '1110',
//     '.': '111100',
//     'q': '1111010',
//     'f': '11110110',
//     'S': '111101110',
//     'P': '111101111',
//     ',': '111110',
//     'b': '1111110',
//     'D': '11111110',
//     'L': '111111110',
//     'F': '111111111'
// }
```

#### encodeBase64

Encodes a string using `@amaui/utils`'s `to` method with 'base64' as a second argument in it.

```ts
AmauiHuffmanCode.encodeBase64('a');

// 'YQ=='
```

#### decodeBase64

Decodes a string using `@amaui/utils`'s `to` method with 'string' as a second argument in it.

```ts
AmauiHuffmanCode.decodeBase64('YQ==');

// 'a'
```

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
      "label": "Huffman code: Start",
      "to": "/dev/huffman code/start"
    },
    "next": {
      "label": "Huffman code: Start",
      "to": "/dev/huffman code/start"
    }
  }
}~
