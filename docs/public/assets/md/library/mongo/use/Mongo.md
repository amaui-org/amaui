
# Mongo

Main `@amaui/mongo` class for making, managing the connection to the mongodb.

### Options

#### uri

MongoDB connection uri.

#### name

MongoDB database name.

### Methods

#### connection

Makes a connection.

- If connection is made:
  - Makes a client.
  - Gets the db as a reference.
  - Gets collections.
  - Adds collections to `Query.collections` property.
  - Emits `subscription`'s `connected` value.
  - Returns the db reference.
- If connection fails:
  - Logs
  - Emits `subscription`'s `error` value.
  - Throws `ConnectionError` error.
- If connection already exists, it just returns the db reference.

```ts
const mongo = new Mongo(options);

await mongo.connection;

// 04-04-2014 04:04:14.141 (info):

// Mongo
// Connected

```

#### disconnect

Disconnects from the mongo.

- Emits `subscription`'s `disconnected` value.

```ts
const mongo = new Mongo(options);

await mongo.disconnect;

// 04-04-2014 04:04:14.141 (info):

// Mongo
// Connected

```

#### getCollections

Gets all collections from the db, with optional refrech, default false.

```ts
const mongo  = new Mongo();

await mongo.connection;

await getCollections();

// [ { name: 'a', ... }, { name: 'a114', ... } ]
```

#### reset

**Very important** \
This is a very dangerous method, it calls `this.db.dropDatabase()` in itself, and is usually only used for dropping the test database for locally running tests, to start with clean environment for each new test run.

It requires an exact database name to be able to run.

- Emits `subscription`'s `reset` value.

```ts
const mongo  = new Mongo();

await mongo.connection;

await mongo.reset();
```

### Other

#### defaults

##### aggregateOptions

Default aggregate options.

```ts
Mongo.defaults.aggregateOptions;

// { allowDiskUse: false }
```

##### limitCount

In methods ie. `searchMany` for counting total amount of documents, for performance reasons on scale, it's not good to always count exact number of documents, unless that's what you want.

Limit is default set to `1000` so in your front end you can say `More than 1000 results found`.

If you want to count all the documents for total result in the ie. `searchMany` method, set this static value to something else.

```ts
Mongo.defaults.limitCount;

// 1e3

// To update the limitCount
Mongo.defaults.limitCount = 1e4;

// To allow any count
Mongo.defaults.limitCount = Number.MAX_SAFE_INTEGER;
```

#### subscription

Using `@amaui/subscription`, you can subscribe for various values.

- 'connected'
- 'disconnected'
- 'error'
- 'reset'

## API

#### IMongoOptions

```ts
interface IMongoOptions {
    name?: string;
    uri?: string;
}
```

#### IDefaults

```ts
interface IDefaults {
    aggregateOptions?: mongodb.AggregateOptions;
    limitCount?: number;
}
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
    static defaults: IDefaults;
    get options(): IMongoOptions;
    set options(options: IMongoOptions);
    constructor(options?: IMongoOptions);
    get connection(): Promise<mongodb.Db> | Error;
    get disconnect(): Promise<void>;
    getCollections(refetch?: boolean): Promise<Array<mongodb.CollectionInfo>>;
    reset(name: string): Promise<void>;
    private connect;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Mongo: BaseCollection",
      "to": "/library/mongo/use/BaseCollection"
    },
    "next": {
      "label": "Node: start",
      "to": "/library/node/start"
    }
  }
}~
