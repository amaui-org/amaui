

## API

#### IOptions

```ts
interface IOptions {
    clean?: boolean;
    cleanAfter?: boolean;
    optionsCleanValue?: IOptionsCleanValue;
    normalize?: {
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
const simpleNormalize: (value: any, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: shuffle",
      "to": "/dev/utils/use/shuffle"
    },
    "next": {
      "label": "Utils: slugify",
      "to": "/dev/utils/use/slugify"
    }
  }
}~