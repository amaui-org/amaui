

### API

#### IOptions

```ts
interface IOptions {
    decode?: boolean;
    decodeMethod?: (value: string) => string;
}
```

#### castParam

```ts
const castParam: (value: any, options_?: IOptions) => any;
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