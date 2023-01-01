
### Add

```sh
// yarn
yarn add @amaui/zip

// npm
npm install @amaui/zip
```

### Use

More redundant and bigger in size input is, better compression will be.

For small and low redundant input, you will probably get negative compression (zipped value is larger in size, than the original input), which you can check in `response.positive` value.

```javascript
import AmauiZip from '@amaui/zip';

// Make a new zip instance
// with value to be zipped
const amauiZip = new AmauiZip("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.

Mauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.

Maecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.

Quisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.

Integer ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.");

// Encoded
// or very simply amauiZip.response
const response = amauiZip.encoded;

// {
//   "value": "000   1 is 2 a, 1 t 1 m 1 1 2 kx 1 h 1 3N 4 u 1 o 1 p8 1 e 1 c 1 v 4 PI 1 SM 2 DA 1 w 1 VE 4 ln 1 r 1 . 1 qb 1 ' 4 9 2 45 1 j\n 1 g 1 f 1 02 1 d 1 7 1 6 2 CQ 1 y 1 F 1 z 1 LU,   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",
//   "original_byte_size": 2941,
//   "value_byte_size": 2381,
//   "compression_ratio": 1.24,
//   "compression_percentage": 19.04,
//   "positive": true,
//   "performance_milliseconds": 54,
//   "performance": "54 milliseconds"
// }

// Value unzip / decode
// with amauiZip.decode or AmauiZip.decode as a static AmauiZip method
AmauiZip.decode(response.value);

// {
//   "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.",
//   "original_byte_size": 2941,
//   "value_byte_size": 2381,
//   "performance_milliseconds": 44,
//   "performance": "44 milliseconds"
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
      "label": "Utils: Start",
      "to": "/dev/utils/start"
    },
    "next": {
      "label": "Zip: Use",
      "to": "/dev/zip/use"
    }
  }
}~
