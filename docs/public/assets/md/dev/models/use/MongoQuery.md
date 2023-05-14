

## API

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
      "label": "Models: models",
      "to": "/dev/models/use/models"
    },
    "next": {
      "label": "Models: Query",
      "to": "/dev/models/use/Query"
    }
  }
}~
