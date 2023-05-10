

### API

#### IOptions

```ts
interface IOptions {
    castParam?: boolean;
}
```

#### getQueryParams

```ts
const getQueryParams: (value_?: string, paramName?: string, options_?: IOptions) => object | string | number | boolean | undefined;
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