

## API

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
      "to": "/dev/models/use/ResponseMeta"
    },
    "next": {
      "label": "Models: base",
      "to": "/dev/models/use/base"
    }
  }
}~