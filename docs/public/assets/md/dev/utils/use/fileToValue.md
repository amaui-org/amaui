

### API

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~