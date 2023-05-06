

### API

#### TType

```ts
type TType = 'JSON';
```

#### IOptions

```ts
interface IOptions {
    log?: boolean;
    returnSame?: boolean;
}
```

#### parse

```ts
const parse: (value: any, type?: TType, options_?: IOptions) => any;
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
