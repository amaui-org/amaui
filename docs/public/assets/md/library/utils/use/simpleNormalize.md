
# simpleNormalize

Normalizes value provided, based on a normalization map.

```ts
simpleNormalize(true);

// yes
```

### Options

#### clean

Cleans the string value before replacing the value based on the map.

#### cleanAfter

Cleans the string value after replacing the value based on the map.

#### optionsCleanValue

Options object passed into `cleanValue` util method.

#### normalize

##### map

Map of values to replace the string with.

### Why?

Useful when we wanna render some programming terms in the UI, where true, is rendered as yes, for example.

## API

#### IOptions

```ts
interface IOptions {
    // default: true
    clean?: boolean;
    // default: true
    cleanAfter?: boolean;
    // default: cleanValue default options
    optionsCleanValue?: IOptionsCleanValue;
    normalize?: {
        // default
        // const map = new Map<any, any>([
        //   ['id', 'ID'],
        //   ['api', 'API'],
        //   ['ui', 'UI'],
        //   ['true', 'yes'],
        //   ['false', 'no'],
        // ]);
        map?: Map<any, any>;
    };
}
```

#### map

```ts
const map: Map<any, any>;
```

#### simpleNormalize

```ts
// defaults
// options: interface IOptions
const simpleNormalize: (value: any, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: shuffle",
      "to": "/library/utils/use/shuffle"
    },
    "next": {
      "label": "Utils: slugify",
      "to": "/library/utils/use/slugify"
    }
  }
}~
