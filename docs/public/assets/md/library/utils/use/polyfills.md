
# polyfills

Adds many polyfills from various util methods from this library, and attaches them to native classes for value types, ie. String.

```ts
polyfills();

'abcdefghijklmnopqrstuvwxyz'.pick(3, 4);

// auyi
```

All polyfills are in the API below.

## API

#### stringPolyfills

```ts
const stringPolyfills: (additions?: boolean) => void;
```

#### numberPolyfills

```ts
const numberPolyfills: (additions?: boolean) => void;
```

#### booleanPolyfills

```ts
const booleanPolyfills: (additions?: boolean) => void;
```

#### arrayPolyfills

```ts
const arrayPolyfills: (additions?: boolean) => void;
```

#### objectPolyfills

```ts
const objectPolyfills: (additions?: boolean) => void;
```

#### filePolyfills

```ts
const filePolyfills: (additions?: boolean) => void;
```

#### blobPolyfills

```ts
const blobPolyfills: (additions?: boolean) => void;
```

#### functionPolyfills

```ts
const functionPolyfills: (additions?: boolean) => void;
```

#### arrayBufferPolyfill

```ts
const arrayBufferPolyfill: () => void;
```

#### browserPolyfills

```ts
const browserPolyfills: (additions?: boolean) => void;
```

#### polyfills

```ts
const polyfills: (additions?: boolean) => void;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: pick",
      "to": "/library/utils/use/pick"
    },
    "next": {
      "label": "Utils: promisify",
      "to": "/library/utils/use/promisify"
    }
  }
}~
