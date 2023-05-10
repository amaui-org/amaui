

### API

#### IOptions

```ts
interface IOptions {
    valueOverride?: boolean;
}
```

#### setObjectValue

```ts
const setObjectValue: <T extends unknown>(object: T, keys?: string | string[], value?: any, options_?: IOptions) => T;
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