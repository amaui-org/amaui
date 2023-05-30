
# amaui lz77

LZ77 compression algorithm implementation.

### Add

```sh
yarn add @amaui/lz77
```

### Use

```ts
import AmauiLz77 from '@amaui/lz77';

// Make a new lz77 instance with a value
const amauiLz77 = new AmauiLz77('Lorem u ipsum dolor sit amet amet amet amet amet amet amet, consectetur adipiscing elit. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.');

// Encoded
// or very simply amauiLz77.response
const response = amauiLz77.encoded;

// {
//   "value": "Lorem u ipsum dolor sit ame`5,v`, consectetur adipiscing elit. Proin egestas mauris elit,`2o,a`molestie nisi semper at. Cras interdum massa nec `1d,9`rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.`57,fl`",
//   "original_byte_size": 836,
//   "value_byte_size": 250,
//   "compression_ratio": 3.34,
//   "compression_percentage": 70.1,
//   "positive": true,
//   "performance_milliseconds": 14,
//   "performance": "14 milliseconds"
// }

// Decode
// with amauiLz77.decode or amauiLz77.decode a static method
AmauiLz77.decode(response.value);

// {
//   "value": "Lorem u ipsum dolor sit amet amet amet amet amet amet amet, consectetur adipiscing elit. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.",
//   "original_byte_size": 836,
//   "value_byte_size": 250,
//   "performance_milliseconds": 1,
//   "performance": "1 millisecond"
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
      "label": "Log: Start",
      "to": "/dev/log/start"
    },
    "next": {
      "label": "LZ77: Use",
      "to": "/dev/lz77/use"
    }
  }
}~
