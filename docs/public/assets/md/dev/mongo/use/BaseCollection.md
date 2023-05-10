### AP


### API

#### IUpdateOptions

```ts
interface IUpdateOptions extends mongodb.FindOneAndUpdateOptions {
    update_date?: boolean;
}
```

#### IUpdateManyOptions

```ts
interface IUpdateManyOptions extends mongodb.UpdateOptions {
    update_date?: boolean;
}
```

#### IAddOneOptions

```ts
interface IAddOneOptions extends mongodb.InsertOneOptions {
    add_date?: boolean;
}
```

#### IAddManyOptions

```ts
interface IAddManyOptions extends mongodb.BulkWriteOptions {
    add_date?: boolean;
}
```

#### BaseCollection

```ts
class BaseCollection {
    protected collectionName: string;
    mongo: Mongo;
    private db_;
    protected collections: Record<string, mongodb.Collection>;
    protected amalog: AmauiLog;
    constructor(collectionName: string, mongo: Mongo);
    get db(): Promise<mongodb.Db>;
    get paginatedField(): string;
    get paginatedAscending(): number;
    get addedField(): string;
    get updatedField(): string;
    get projection(): object;
    collection(name?: string, options?: mongodb.CreateCollectionOptions): Promise<mongodb.Collection>;
    transaction(method: TMethod): Promise<void | Error>;
    count(query?: Query, options?: mongodb.CountDocumentsOptions): Promise<number>;
    exists(value?: Array<object>, operator?: '$and' | '$or', options?: mongodb.FindOptions): Promise<boolean>;
    find(query: Query, options?: mongodb.FindOptions): Promise<IMongoQuery>;
    findOne(query: Query, options?: mongodb.FindOptions): Promise<any>;
    aggregate(query?: Query, options?: mongodb.AggregateOptions): Promise<Array<mongodb.Document>>;
    searchMany(query: Query, additional?: IMongoSearchManyAdditional, options?: mongodb.AggregateOptions): Promise<IMongoQuery>;
    searchOne(query: Query, additional?: IMongoSearchOneAdditional, options?: mongodb.AggregateOptions): Promise<mongodb.Document>;
    updateOne(query: Query, value?: any, operators?: mongodb.UpdateFilter<any>, options_?: IUpdateOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    removeOne(query: Query, options?: mongodb.FindOneAndDeleteOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    updateOneOrAdd(query: Query, value: any, options_?: IUpdateOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    addOne(value: any, options_?: IAddOneOptions): Promise<mongodb.Document>;
    addMany(values_: any[], options_?: IAddManyOptions): Promise<Array<mongodb.Document>>;
    updateMany(query: Query, value?: any, operators?: mongodb.UpdateFilter<any>, options_?: IUpdateManyOptions): Promise<number>;
    removeMany(query: Query, options?: mongodb.DeleteOptions): Promise<number>;
    protected response(start: number, collection: mongodb.Collection, method: string, value?: any, req?: express.Request): any;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Mongo: AmauiMongo",
      "to": "/dev/mongo/use/AmauiMongo"
    },
    "next": {
      "label": "Mongo: Mongo",
      "to": "/dev/mongo/use/Mongo"
    }
  }
}~
