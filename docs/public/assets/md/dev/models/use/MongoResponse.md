
# MongoResponse

A class in which you can package a response from mongo aggregation pipeline.

### Properties

#### response

Any value.

#### next

Next cursor.

#### previous

Previous cursor.

#### hasNext

If it has a next page.

#### hasPrevious

If it has a previous page.

#### sort

Sort that was used for the query.

#### size

Number of response documents in this page.

#### total

Total number of response documents.

#### skip

How many documents have been skipped.

#### limit

What limit was used in the query.

## API

#### TMongoResponseSort

type TMongoResponseSort = Record<string, 1 | -1 | 'asc' | 'desc' | 'ascending' | 'descending'>;

#### IMongoResponse

```ts
interface IMongoResponse {
    response: any[];
    next?: string;
    previous?: string;
    hasNext?: boolean;
    hasPrevious?: boolean;
    sort?: TMongoResponseSort;
    size?: number;
    total?: number;
    skip?: number;
    limit?: number;
}
```

#### MongoResponse

```ts
class MongoResponse extends Base implements IMongoResponse {
    response: any[];
    next?: string;
    previous?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    sort?: TMongoResponseSort;
    size?: number;
    total?: number;
    skip?: number;
    limit?: number;
    constructor(response?: any[], next?: string, previous?: string, hasPrevious?: boolean, hasNext?: boolean, sort?: TMongoResponseSort, size?: number, total?: number, skip?: number, limit?: number);
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
