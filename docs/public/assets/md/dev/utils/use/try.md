

### API

#### IOptions

```ts
interface IOptions {
    log?: boolean;
}
```

#### Try

```ts
const Try: (value: () => any, options_?: IOptions) => any;
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
