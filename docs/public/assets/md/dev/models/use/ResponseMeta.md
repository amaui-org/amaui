

### API

#### IResponseMeta

```ts
interface IResponseMeta {
    status: number;
    message?: string;
}
```

#### ResponseMeta

```ts
class ResponseMeta extends Base implements IResponseMeta {
    status: number;
    message?: string;
    constructor(status: number, message?: string);
}
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