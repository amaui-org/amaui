
# ResponsePagination

A class in which you can package response's pagination property value.

### Properties

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

#### IResponsePagination

```ts
interface IResponsePagination {
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

#### ResponsePagination

```ts
class ResponsePagination extends Base implements IResponsePagination {
    next?: string;
    previous?: string;
    hasNext?: boolean;
    hasPrevious?: boolean;
    sort?: TMongoResponseSort;
    size?: number;
    total?: number;
    skip?: number;
    limit?: number;
    constructor(next?: string, previous?: string, hasNext?: boolean, hasPrevious?: boolean, sort?: TMongoResponseSort, size?: number, total?: number, skip?: number, limit?: number);
    static fromMongoQuery(value: MongoResponse): ResponsePagination;
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
      "label": "Models: Response",
      "to": "/dev/models/use/Response"
    }
  }
}~
