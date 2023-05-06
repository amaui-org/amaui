

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
