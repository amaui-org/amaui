
# fileToValue

Reads the file, and returns an output in type provided, as a value.

```ts
await fileToValue(file, 'text');

// A text in a file
```

## API

#### TType

```ts
type TType = 'text' | 'binary' | 'array-buffer' | 'datauri';
```

#### fileToValue

```ts
const fileToValue: (file: Blob | File, type?: TType) => Promise<string | ArrayBuffer>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: factorial",
      "to": "/dev/utils/use/factorial"
    },
    "next": {
      "label": "Utils: flattenObject",
      "to": "/dev/utils/use/flattenObject"
    }
  }
}~
