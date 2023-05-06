

### API

#### IMongoOptions

```ts
interface IMongoOptions {
    name?: string;
    uri?: string;
}
```

#### IMongoSearchManyAdditional

```ts
interface IMongoSearchManyAdditional {
    pre?: Array<object>;
    prePagination?: Array<object>;
    post?: Array<object>;
}
```

#### IMongoSearchOneAdditional

```ts
interface IMongoSearchOneAdditional {
    pre?: Array<object>;
    post?: Array<object>;
}
```

#### MONGO_AGGREGATE_OPTIONS

```ts
const MONGO_AGGREGATE_OPTIONS: {
    allowDiskUse: boolean;
};
```

#### MONGO_LIMIT_COUNT

```ts
const MONGO_LIMIT_COUNT = 1000;
```

#### mongoOptionsDefault

```ts
const mongoOptionsDefault: IMongoOptions;
```

#### Mongo

```ts
class Mongo {
    db: mongodb.Db;
    connected: boolean;
    client: mongodb.MongoClient;
    private amalog;
    private options_;
    collections: Array<mongodb.CollectionInfo>;
    subscription: AmauiSubscription;
    get options(): IMongoOptions;
    set options(options: IMongoOptions);
    constructor(options?: IMongoOptions);
    getCollections(refetch?: boolean): Promise<Array<mongodb.CollectionInfo>>;
    get connection(): Promise<mongodb.Db> | Error;
    get disconnect(): Promise<void>;
    private connect;
    reset(db_name?: string): Promise<void>;
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
