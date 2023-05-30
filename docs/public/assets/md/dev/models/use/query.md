
# Query

Used to create a `Query` instance that you can pass into `@amaui/mongo` methods to perform the queries.

The main idea about it is:
- You can use the `fromRequest` static method to create a new `Query` instance from the request.
- In the new instance you can manually add to `query.queries.api` or `query.queries.permissions` new filter items, that `@amaui/mongo`'s methods will utilize to add onto the user query, ie. if you want to attach permission query onto the user query, to only give the user ability to see stuff he has permission to, etc.
- All other defaults, or query specific values, ie. `limit`, `sort`, `projection`, `total`, etc.

### Properties

#### queries

Queries is a property which will contain all query filters per collection, per specific use case ie. `search`, `api`, `permissions`, etc.

#### settings

Default query settings.

##### type

`$and` or `$or`.

#### params

Path params & query params.

#### limit

Query limit.

#### skip

Query skip.

#### sort

Query sort.

#### next

Query next.

#### previous

Query previous.

#### total

Query total.

#### projection

Query projection.

### Util properties

#### keys

Static keys value for ie. `validateMongoQuery`'s second argument.

#### collections

Static all collection names you want to query in your API.

#### limit

Static default limit value, default `14`.

#### sort

Static default sort value, default `{ 'api_meta.added_at': -1 }`.

#### LIMIT\_MIN

Used in `getMetaValue` as a min value, to clamp the limit provided by user to allowed value.

#### LIMIT\_MAX

Used in `getMetaValue` as a max value, to clamp the limit provided by user to allowed value.

### Methods

#### fromRequest

Static method to extract values from the request object, and makes a new `Query` instance out of it.

It automatically validates the query from the request using `validateMongoQuery`, and if validation fails, this entire method throws an error.

```ts
// Express request object
Query.fromRequest({
  ...

  body: {
    query: {
      a: [
        {
          field: 'meta.created_by',
          operator: 'equal',
          value: 'a',
        },
      ],
    },

    limit: 114,
    total: true,
    next: 'eyJhcGlfbWV0YS5hZGRlZF9hdCI6eyIkZ3QiOjE0NDEyMjc0NDB9fQ== '
  },

  ...
});

// Query { }
```

#### getMeta

Extracts meta properties from the query used to instantiate `Query`, ie. `['limit', 'total', 'next', 'previous', 'sort', 'skip']`.

For each of the meta properties, it also calls `Query.getMetaValue` on them, to parse them into their intended value type.

```ts
const query = new Query();

query.getMeta({ limit: 114, total: true });
```

#### getMetaValue

Parses meta properties into their intended value type.

```ts
// Clamps the limit provided by the user to allowed value
Query.getMetaValue('140', 'limit');
// Parses paginator provided value to usable object for $sort stage in aggregation pipeline
Query.getMetaValue('eyJhcGlfbWV0YS5hZGRlZF9hdCI6eyIkZ3QiOjE0NDEyMjc0NDB9fQ==', 'paginator');
// Casts total param to the boolean value from the string value
Query.getMetaValue('true', 'total');
// Clamps skip provided by the user to allowed value
Query.getMetaValue('-14', 'skip');

// 40
// { 'api_meta.added_at': { '$gt': 1441227440 } }
// true
// 0
```

#### addToAllQueries

Adds array or object of made filters to all collections in the provided type property in `queries`.

```ts
const query = new Query();

query.addToAllQueries(
  [
    { a: 1114 }
  ],

  'api'
);

query.addToAllQueries(
  { a: 1114 },

  'find'
);

query.queries;

// {
//   ...

//   api: [
//     a: [
//       { a: 1114 }
//     ],
//     a114: [
//       { a: 1114 }
//     ]
//   ],

//   find: [
//     a: {
//       a: 1114
//     }
//     a114: {
//       a: 1114
//     }
//   ],

//   ...
// }
```

## API

#### TMatchOperator

```ts
type TMatchOperator = '$and' | '$or';
```

#### TMatch

```ts
type TMatch = {
    [p in TMatchOperator]: object;
};
```

#### TFilterOperator

```ts
type TFilterOperator = 'less-than' | 'less-than-equal' | 'equal' | 'not-equal' | 'array-all' | 'array-some' | 'starts-with' | 'ends-with' | 'contains' | 'greater-than-equal' | 'greater-than';
```

#### IFilter

```ts
interface IFilter {
    field: string;
    operator: TFilterOperator;
    value: any;
}
```

#### IQueryObject

```ts
interface IQueryObject<T = object> {
    [p: string]: Array<T>;
}
```

#### IRequestParams

```ts
interface IRequestParams {
    path: object;
    query: object;
}
```

#### IRequestParams

```ts
interface IRequestParams {
    path: object;
    query: object;
}
```

#### IQueryFind

```ts
interface IQueryFind {
    [key: string]: object;
}
```

#### IQueryObjects

```ts
interface IQueryObjects {
    search?: IQueryObject;
    api?: IQueryObject;
    permissions?: IQueryObject;
    aggregate?: IQueryObject;
    find?: IQueryFind;
}
```

#### IQuerySettings

```ts
interface IQuerySettings {
    type?: '$and' | '$or';
}
```

#### TQueryMetaProperty

```ts
type TQueryMetaProperty = 'limit' | 'total' | 'next' | 'previous' | 'sort' | 'skip';
```

#### IQueryMeta

```ts
type IQueryMeta = {
    [p in TQueryMetaProperty]?: any;
};
```

#### IKeys

```ts
interface IKeys {
    allowed: string[];
}
```

#### IQuery

```ts
interface IQuery {
    queries?: IQueryObjects;
    setting?: IQuerySettings;
    params?: IRequestParams;
    projection?: object;
    sort?: Sort;
    limit?: number;
    skip?: number;
    total?: boolean;
}
```

#### Query

```ts
class Query extends Base implements IQuery {
    queries: IQueryObjects;
    settings: IQuerySettings;
    params: IRequestParams;
    limit: number;
    skip: number;
    sort: Sort;
    next: string | Record<string, any>;
    previous: string | Record<string, any>;
    total: boolean;
    projection?: object;
    static keys: IKeys;
    static collections: string[];
    static limit: number;
    static sort: Sort;
    constructor(query?: IQuery);
    getMeta(value: IQuery): IQueryMeta;
    static getMetaValue(value: any, type?: string): any;
    static fromRequest(req: express.Request): Query;
    addToAllQueries(filters: any[] | object, type?: string): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: MongoResponse",
      "to": "/dev/models/use/MongoResponse"
    },
    "next": {
      "label": "Models: ResponseMeta",
      "to": "/dev/models/use/ResponseMeta"
    }
  }
}~
