
# amaui huffman code

Huffman code algorithm implementation.

### Add

```sh
yarn add @amaui/huffman-code
```

### Use

```ts
import AmauiHuffmanCode from '@amaui/huffman-code';

// Make a new AmauiHuffmanCode instance
// with an optional initial values
// string to encode, already calculated probabilities and
// already calculated values
// On making an instance encoding will be made
const amauiHuffmanCode = new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.');

// Initial byte size value
// is 589 bytes, and after using
// above method, encoded byte size is 444 bytes
// including huffman code dictionary,
// which is 7.3 compression percentage

// Encoded
// or very simply amauiHuffmanCode.response
const response = amauiHuffmanCode.encoded;

// {
//   "value": "AAL/AAgr6XUV8YbCGqY3XUfY4tSPAAoACDcaXTR5Z5laY83/KjrGGwAIalf7e3Hm01NakbIADo1TG66j7OfcAAoAA7frcxpjcTwl5vcjaTZ1uOg6N7K019r9ZUXG7AAFAABXzTVvM/NitAAEnVakbX4gmt7S0/irX6youN3merdVbnQmjRx5idQnka9FuNrTAAIdoEPRJozkGOLF+nsw1AAHfZyDSx06AAaz6bpuQ15n5oTxAAY5AAUVfYTSOk2AoAAK+/W5jTH2ZeiWe1aY3Wn0XXwmkft0YHwscqytMZVGZHyDo83vAAGWyeKo6tfiAAmsrTH2qY3XUa42VRKzTU6ldyDdHmeg6tLQgMV9fqrsyPrjZVErAAFAFfzfxTWON7iYc9pk3RNZ/KoAB+3HzhCO0K1irOVrJoVeiWpG838ACyPlGaanXUFXBA==",
//   "values": {
//       "r": "0000",
//       "o": "0001",
//       "u": "0010",
//       "d": "00110",
//       "c": "00111",
//       "e": "010",
//       "n": "0110",
//       "p": "01110",
//       "g": "0111100",
//       "C": "01111010",
//       "v": "01111011",
//       "h": "0111110",
//       "I": "01111110",
//       "j": "01111111",
//       "t": "1000",
//       "i": "1001",
//       "s": "1010",
//       "l": "10110",
//       "m": "10111",
//       " ": "110",
//       "a": "1110",
//       ".": "111100",
//       "q": "1111010",
//       "f": "11110110",
//       "S": "111101110",
//       "P": "111101111",
//       ",": "111110",
//       "b": "1111110",
//       "D": "11111110",
//       "L": "111111110",
//       "F": "111111111"
//   },
//   "values_encoded": "0000 ro 1 u 1 dc 1 e 1 n 1 p 2 g 1 Cv 1 h 1 Ij 4 ti 1 s 1 lm 1   1 a 2 . 1 q 1 f 1 SP 1 , 1 b 1 D 1 LF",
//   "probabilities": {
//       "L": 0.0017,
//       "o": 0.0475,
//       "r": 0.0526,
//       "e": 0.0985,
//       "m": 0.039,
//       " ": 0.1511,
//       "i": 0.0764,
//       "p": 0.0187,
//       "s": 0.0815,
//       "u": 0.0526,
//       "d": 0.0306,
//       "l": 0.0407,
//       "t": 0.0781,
//       "a": 0.0696,
//       ",": 0.017,
//       "c": 0.0306,
//       "n": 0.0441,
//       "g": 0.0068,
//       ".": 0.017,
//       "F": 0.0017,
//       "f": 0.0051,
//       "h": 0.0051,
//       "b": 0.0068,
//       "S": 0.0017,
//       "I": 0.0034,
//       "C": 0.0034,
//       "q": 0.0085,
//       "v": 0.0034,
//       "P": 0.0017,
//       "D": 0.0034,
//       "j": 0.0017
//   },
//   "efficiency": 0.991,
//   "redundency": 0.037,
//   "entropy": 4.138,
//   "original_byte_size": 589,
//   "values_byte_size": 102,
//   "value_byte_size": 444,
//   "encoded_byte_size": 546,
//   "compression_ratio": 1.08,
//   "compression_percentage": 7.3,
//   "positive": true,
//   "average_code_word_length": 4.175,
//   "performance_milliseconds": 4,
//   "performance": "4 milliseconds"
// }

// Decode
// with amauiHuffmanCode.decode or AmauiHuffmanCode.decode a static method
AmauiHuffmanCode.decode(response.value, response.values);

// {
//   "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi metus.",
//   "original_byte_size": 589,
//   "value_byte_size": 444,
//   "performance_milliseconds": 7,
//   "performance": "7 milliseconds"
// }
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Heap: Start",
      "to": "/library/heap/start"
    },
    "next": {
      "label": "Huffman Code: Use",
      "to": "/library/huffman-code/use"
    }
  }
}~
