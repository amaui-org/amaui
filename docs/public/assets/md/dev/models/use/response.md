

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
      "label": "Models: query",
      "to": "/dev/models/use/query"
    },
    "next": {
      "label": "Models: validateMongoQuery",
      "to": "/dev/models/use/validateMongoQuery"
    }
  }
}~