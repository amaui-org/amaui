

## API

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
      "label": "Models: MongoQuery",
      "to": "/dev/models/use/MongoQuery"
    },
    "next": {
      "label": "Models: ResponsePagination",
      "to": "/dev/models/use/ResponsePagination"
    }
  }
}~