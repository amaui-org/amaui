

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
      "label": "Models: MongoQuery",
      "to": "/dev/models/use/MongoQuery"
    },
    "next": {
      "label": "Models: Response",
      "to": "/dev/models/use/Response"
    }
  }
}~
