
# imageToPalette

Useful method for generating palette of most occuring colors in order, from an image.

Value (image url) can be both relative, or absolute, basically any url you would add on an img element, in the src attribute.

```ts
await imageToPalette(url);

// [
//   'rgb(204, 165, 44)',
//   'rgb(187, 217, 240)',
//   'rgb(83, 121, 135)',
//   'rgb(117, 185, 233)'
// ]
```

### Options

#### amount

Amount of colors the palette will produce.

#### size

Size to which original image will get resized to, for faster, but a bit less accurate, but faster method performance.

#### allowCrossOrigin

When image is from another origin, canvas including it might throw an error, unless this value is true.

### Why?

Use case of android system updating entire operating system theme colors, based on the mobile background image.

## API

#### imageToPalette

```ts
const imageToPalette: (value: string, options?: {
    // default: 4
    amount?: number;
    // default: 400
    size?: number;
    // default: false
    allowCrossOrigin?: boolean;
}) => Promise<Array<string>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hslToRgbPure",
      "to": "/library/utils/use/hslToRgbPure"
    },
    "next": {
      "label": "Utils: is",
      "to": "/library/utils/use/is"
    }
  }
}~
