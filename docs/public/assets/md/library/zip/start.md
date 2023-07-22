
# amaui zip

Library for compressing, uncompressing any data in front end & back end.

### Add

```sh
yarn add @amaui/zip
```

### Use

More redundant and bigger in size input is, better compression will be.

For small and low redundant input, you will most likely get negative compression (zipped value is larger in size, than the original input), which you can check in `response.positive` value.

```ts
import AmauiZip from '@amaui/zip';

// Make a new zip instance
// with value to be zipped
const amauiZip = new AmauiZip('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.

Mauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.

Maecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.

Quisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.

Integer ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.');

// Encoded
// or very simply amauiZip.response
const response = amauiZip.encoded;

//  {
//     "value": "00 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo`1n,9` mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor t`30,8`. Fusce neque`t,6`, commodo nec justo nec,`n,9`euismod erat. Vivamus at t`5e,9`massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non `35,9`rat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus.`5v,a`uctor quis erat a porta.\n\nMauris vel dui at lectus t`cm,9`finibus id u`7m,7`. Phasellus in velit elit. Etiam eu dapibus lorem. Maecena`9s,f`urna. Cras vulputate lobortis urna quis condimentum. Ut si`gk,7`sodales metus, eu eleifend arcu. In sed porta elit. Duis s`ie,8`dictum v`s,6`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed c`ej,7`vitae magna eu c`np,a`.`c7,9`f`gg,8`v`le,7` dignissim. Aliquam`21,9`uris lacinia,`7r,9`ante eu,`24,a`leo. Suspendisse vel s`1b,7`lacus. A`2k,7`erat v`q4,8`\n\nMaecenas m`p2,8`neque vel purus aliquam,`47,7`pharetra purus m`ql,7`.`q5,7`s`t6,8`odio`dg,c`, bibendu`bc,7` `kx,b`,`lj,a`lorem. Aenean vestibulum lacus `vt,9`lectus sagittis consequat.`7e,d`est ante,`a0,a` eget `lv,7`ac, d`k6,7`ornare purus. Proin porta p`6s,8`ipsum,`ib,d`erat c`11d,b`pretium. Nullam s`c8,7`nisi non metus `10w,8`,`u2,8`blandit tellus iaculis. Quisque el`36,c`orci, ac elementum nunc c`157,c`t. Ve`8y,9`curs`cw,8`et ferm`ou,a`fringilla ligula sed quam p`71,7`, sed congue metus euismod.\n\nQ`4l,7`v`s2,9`i`uc,8`vel v`17h,9`Fusce sollicitudin sed risus et v`18n,9`A`j6,8`get nisi vel risus tempor i`84,8`In l`v6,8`c`1cd,b`ipsum, sed cons`1d0,8`mi e`ur,9`.`y0,a`egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras s`6b,c`non augue volutpat ultricies. Mauris finibus urna velit, a e`44,7`tellus f`11,8`t. Nam a tortor et ligula v`dv,b`o`1jt,a`s`1is,8`ac mi`in,7` `1kr,c`diam vitae elit t`6t,8` `f2,9`. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex`oa,8`convallis, eros et viverra f`3i,8`, orci purus u`8x,8` lectus, rutrum ultrices odio nibh non odio.`ni,9`imperdiet elit eu s`1kt,8`suscipit. Pellentesque s`1lp,8`ex sed mattis im`21,7`.`15x,9`e`c3,8`r`8w,8`nisl non ornare. Duis f`ok,9`maximus venenatis. P`w0,9`titor eget quam s`1vh,8`v`1v7,9`Nulla arcu purus,`187,8` id v`hf,9`t, t`1xm,9`s`1pe,8`. Donec ullamcorper id lacus in placerat.`7k,e`a`da,8`u`1y8,9`e`6x,7`pulvinar. M`1c5,8`oreet sem augue, eget auctor erat semper `1ux,9`Nulla e`1q6,9`mi. Etiam s`16d,8`libero at lobortis t`20u,a`S`1ea,b`sem ligula,`39,9`u`85,b`,`15w,a`s`19f,9`acus. Fusce quis arcu v`nz,9`,`6h,9` neque u`ib,8`,`u1,9`justo.",
//     "original_byte_size": 2941,
//     "value_byte_size": 2664,
//     "compression_ratio": 1.1,
//     "compression_percentage": 9.42,
//     "positive": true,
//     "performance_milliseconds": 44,
//     "performance": "44 milliseconds"
// }

// Value unzip / decode
// with amauiZip.decode or AmauiZip.decode as a static AmauiZip method
AmauiZip.decode(response.value);

// {
//     "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.",
//     "original_byte_size": 2941,
//     "value_byte_size": 2664,
//     "performance_milliseconds": 1,
//     "performance": "1 millisecond"
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
