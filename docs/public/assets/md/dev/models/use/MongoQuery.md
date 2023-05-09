

### API

#### IMongoQuery

```ts
interface IMongoQuery {
    response: any[];
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

#### MongoQuery

```ts
class MongoQuery extends Base implements IMongoQuery {
    response: any[];
    next?: string;
    previous?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    length?: number;
    total?: number;
    skip?: number;
    limit?: number;
    constructor(response?: any[], next?: string, previous?: string, hasPrevious?: boolean, hasNext?: boolean, length?: number, total?: number, skip?: number, limit?: number);
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