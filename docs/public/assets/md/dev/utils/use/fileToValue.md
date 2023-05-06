

### API

#### TType

```ts
type TType = 'text' | 'binary' | 'array-buffer' | 'datauri';
```

#### fileToValue

```ts
const fileToValue: (file: Blob | File, type?: TType) => Promise<string | ArrayBuffer>;
```

