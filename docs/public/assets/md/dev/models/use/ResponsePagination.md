

### API

#### IResponsePagination

```ts
interface IResponsePagination {
    next?: string;
    previous?: string;
    hasNext?: boolean;
    hasPrevious?: boolean;
    length?: number;
    total?: number;
    skip?: number;
    limit?: number;
}
```

#### ResponsePagination

```ts
class ResponsePagination extends Base implements IResponsePagination {
    next?: string;
    previous?: string;
    hasNext?: boolean;
    hasPrevious?: boolean;
    length?: number;
    total?: number;
    skip?: number;
    limit?: number;
    constructor(next?: string, previous?: string, hasNext?: boolean, hasPrevious?: boolean, length?: number, total?: number, skip?: number, limit?: number);
    static fromMongoQuery(value: MongoQuery): ResponsePagination;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: ResponseMeta",
      "to": "/dev/models/ResponseMeta"
    },
    "next": {
      "label": "Models: validateMongoQuery",
      "to": "/dev/models/validateMongoQuery"
    }
  }
}~
