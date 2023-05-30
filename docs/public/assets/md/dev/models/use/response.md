
# Response

A class in which you can package your entire request's JSON response value.

### Properties

#### response

Any value.

#### meta

`ResponseMeta` instance.

#### pagination

`ResponsePagination` instance.

## API

#### IResponse

```ts
interface IResponse {
    meta: IResponseMeta;
    pagination: IResponsePagination;
    response: any;
}
```

#### Response

```ts
class Response extends Base {
    response: any;
    meta: ResponseMeta;
    pagination?: ResponsePagination;
    constructor(response: any, meta: ResponseMeta, pagination?: ResponsePagination);
    static fromObject(value: TObject, original?: boolean): Response;
    static fromCreated(value: TObject): Response;
    static fromQuery(value: MongoQuery): Response;
    static fromAny(value: any, moreMeta?: any): Response;
    static fromExpress(res: express.Response, data?: {}, status?: number): express.Response<any, Record<string, any>>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: ResponsePagination",
      "to": "/dev/models/use/ResponsePagination"
    },
    "next": {
      "label": "Models: validateMongoQuery",
      "to": "/dev/models/use/validateMongoQuery"
    }
  }
}~
