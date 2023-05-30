
# ResponseMeta

A class in which you can package response's meta property value.

### Properties

#### status

Request's response status code value.

#### message

Message for the request's response.


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
      "label": "Models: Query",
      "to": "/dev/models/use/Query"
    },
    "next": {
      "label": "Models: ResponsePagination",
      "to": "/dev/models/use/ResponsePagination"
    }
  }
}~
