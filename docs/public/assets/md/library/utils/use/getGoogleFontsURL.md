
# getGoogleFontsURL

Makes a google fonts url to add to html, based on the list of objects, each object providing font options.

```ts
getGoogleFontsURL([
  { name: 'Roboto', weights: [400, 700] },
  { name: 'Source Sans 3', weights: ['italic 200', 400, 700] },
 ]);

 // https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Source+Sans+3:ital,wght@0,400;0,700;1,200&display=swap
```

## API

#### IGoogleFont

```ts
interface IGoogleFont {
    name: string;
    weights: Array<string | number>;
}
```

#### getGoogleFontsURL

```ts
const getGoogleFontsURL: (value: Array<IGoogleFont>) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getFileName",
      "to": "/library/utils/use/getFileName"
    },
    "next": {
      "label": "Utils: getID",
      "to": "/library/utils/use/getID"
    }
  }
}~
