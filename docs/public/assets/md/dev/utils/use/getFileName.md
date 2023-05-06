

### API

#### IOptions

```ts
interface IOptions {
    prefix?: string;
    sufix?: string;
    clean?: boolean;
    capitalize?: boolean;
    withExt?: boolean;
}
```

#### getFileName

```ts
const getFileName: (file: File, options_?: IOptions) => string;
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
