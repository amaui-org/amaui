

### API

#### IResponse

```ts
interface IResponse {
    make: () => Promise<void>;
}
```

#### css

```ts
function css(value__: TValue, options_?: ICSSOptions): IResponse;
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
