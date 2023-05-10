

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
      "label": "Models: Response",
      "to": "/dev/models/use/Response"
    },
    "next": {
      "label": "Models: ResponsePagination",
      "to": "/dev/models/use/ResponsePagination"
    }
  }
}~
