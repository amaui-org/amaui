
# BaseCollection

Used to extend for new classes representing individual collections. \
You can then use collection specific class, and call methods within it for querying.

### Collection

You can extend `BaseCollection` for any of the collections you have, that you want to read, write to.

You can optionally override the getters for default options for pagination field, ascending, etc.

You also have to pass the exact name of the collection & mongo instance that will be used for making requests within that collection.

```ts
class TodoCollection extends BaseCollection {

  public constructor('todos', mongo) { }

  // default: { 'added_at': -1 }
  public get sort() { return { added_at: -1 } }

  // default: 'added_at'
  public get sortProperty() { return 'added_at'; }

  // default: -1
  public get sortAscending() { return -1; }

  // default: 'added_at'
  public get addedProperty() { return 'added_at'; }

  // default: 'updated_at'
  public get updatedProperty() { return 'updated_at'; }

  // default: undefined
  public get projection() {

    return {
      _id: 1,
      meta: 1,
      data: 1
    };
  }

}
```

### Prerequisite

#### Query

For all queries either use object, or array (for aggregate pipeline) or `Query` model from `@amaui/models` library.

```ts
const query = new Query({
  queries: {
    aggregate: {
      todos: [
        {
          $match: {
            name: 'Todo 1'
          }
        }
      ]
    }
  },

  limit: 14,
  total: true
});
```

##### Queries

There are multiple queries types:
- **search**: When using `Query.fromRequest` it convers the request query into a usable search object for query methods ie. `searchMany` method.
- **api**: Inside your API logic you can add additional match query to go as a stage after the `search` stage, to further narrow down the query.
- **permissions**: Inside your API logic similar to the `api` you can add more `match` stages that will go after `search`, `api` stages, to narrow down what user is allowed to view.
- **aggregate**: Pure aggregate array of stages, used in the `aggregate` method.
- **find**: Above values are used in aggregation pipeline so they are all array of stages, whereas find used in `find`, `findOne`, `count`, `exists` etc. methods, is a simple find object defining a query.

##### Why Query?

As a general library, we have to cover most use cases. \
Query has most of the used properties packed inside of itself.

Additionally `query.queries` value `{ search, api, permissions, aggregate, find }` all cover various use cases, as there are use cases where for a single query results we might have to query multiple collections, so that's the main reason `Query` has an ability to package multiple collections query objects within 1 `Query` instance.

When you get used to it, it's very useful, and it won't require much maintenance, if at all, as you scale your API in the future.

#### Other

Every method times the start, and end of the mongo request, and logs the collection, method used, request ID and duration of the query, after it's done.

### Methods

#### db

Returns the native db from the client connection.

```ts
const todoCollection = new TodoCollection();

const db = todoCollection.db;
```

#### collection

Returns the native collection from the mongodb, that you can use for native requests if you want to.

```ts
const todoCollection = new TodoCollection();

const collection = await todoCollection.collection;
```

#### transaction

Makes a transactional request in the mongo, with 5 retries, as sometimes transaction fails unrelated to a developer error.

If after all the retries there's still an error, than the `DeveloperError` is thrown.

```ts
const todoCollection = new TodoCollection();

const todo = { _id: new mongodb.ObjectId() };

await todoCollection.transaction(
  // method
  async session => {
    return await todoCollection.addOne(todo, { session })
  },
  // optional options
  { retries: 4 }
);
```

#### count

Returns a count for a query.

Uses mongo's `count` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.count({
  name: { $regex: '^todo' }
});

// 1114
```

#### exists

Returns true if query resulted in at least 1 document found, using limit 1.

Uses mongo's `findOne` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.exists({
  name: { $regex: '^todo' }
});

// true
```

#### find

Returns a response object `{ response, total }`, with total being optional.

Total is by default false.

Uses mongo's `find` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.find(
  {
    name: 'Todo 14'
  },
  {
    skip: 40,
    limit: 14,
    total: true
  }
);

// or

await todoCollection.find(
  new Query({
    query: {
      name: { $regex: '^todo' }
    },

    skip: 40,
    limit: 14,
    total: true
  })
);

// {
//   response: [
//     ...
//   ],
//
//   skip: 40,
//   limit: 14,
//   total: 1114
// }
```

#### findOne

Returns one mongo document if it's found, otherwise `null`.

Uses mongo's `findOne` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.findOne({
  name: { $regex: '^todo' }
});

// {
//   _id: ...
//
//   ...
// }
```

#### aggregate

Returns array of results.

Uses mongo's `aggregate` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.aggregate(
  new Query({
    query: [
      {
        $match: {
          name: { $regex: '^todo' }
        }
      },

      {
        $limit: 14
      },

      {
        $project: {
          _id: 1,
          name: 1,
          description: 1
        }
      }
    ]
  })
);

await todoCollection.aggregate([
  {
    $match: {
      name: { $regex: '^todo' }
    }
  },

  {
    $limit: 14
  },

  {
    $project: {
      _id: 1,
      name: 1,
      description: 1
    }
  }
]);

// [
//   {
//     _id: 1,
//
//     ...
//   }
//
//   ...
// ]
```

#### searchMany

Search many is the most usefull method. \
Use this method for any paginated search in most use cases.

- It uses mongo's `aggregation` method.
- It uses `query.queries`, `query.search`, `query.api`, `query.permissions`.
- You can use `query.aggregate` as a pure array of stages as well.
- You can also add stages pre all the stages, prePagination, and post all the stages.
- Next, previous cursors are automatically used if present in the `Query` instance, for the pagination, within the aggregation pipeline, or alterantively `skip`, with `limit`, `total` as well.

Order of queries in the aggregation pipeline:
- `pre`
- `queries.aggregate`
- `queries.search`
- `queries.api`
- `queries.permissions`
- `prePagination`
- all of the pagination stages
- `post`

```ts
const todoCollection = new TodoCollection();

await todoCollection.searchMany(
  [
    {
      $match: {
        name: { $regex: '^todo' }
      }
    }
  ],
  {
    skip: 14,
    limit: 14,
    total: true
  }
);

// or

await todoCollection.searchMany(
  new Query({
    query: [
      {
        $match: {
          name: { $regex: '^todo' }
        }
      }
    ],

    next: ...,
    total: true
  })
);

// or

await todoCollection.searchMany(
  new Query({
    queries: {
      search: {
        todos: [
          {
            name: { $regex: '^todo' }
          }
        ]
      },

      permissions: {
        todos: [
          {
            'meta.created_by': user._id
          }
        ]
      }
    },

    next: ...,
    total: true
  })
);


// {
//   response: [
//     ...
//   ],

//   skip: 40,
//   limit: 14,
//   next: ...,
//   previous: '...,
//   hasNext: true,
//   hasPrevious: false,
//   total: 1114
// }
```

#### searchOne

Search one method utilizes almost entirely the same flow as `searchMany` method, only without the pagination, total, while using `limit: 1`.

```ts
const todoCollection = new TodoCollection();

await todoCollection.searchOne(
  [
    {
      $match: {
        name: { $regex: '^todo' }
      }
    }
  ]
);

// or

await todoCollection.searchOne(
  new Query({
    query: [
      {
        $match: {
          name: { $regex: '^todo' }
        }
      }
    ]
  })
);

// or

await todoCollection.searchOne(
  new Query({
    queries: {
      search: {
        todos: [
          {
            name: { $regex: '^todo' }
          }
        ]
      },

      permissions: {
        todos: [
          {
            'meta.created_by': user._id
          }
        ]
      }
    }
  })
);

// {
//   _id: ...,

//   ...
// }
```

#### addOne

Adds one document to the collection.

If `options.add\_date: true`, by default true, it will add to `this.addedProperty` (getter), `AmauiDate.utc.unix` value.

Uses mongo's `insertOne` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.addOne(
  {
    name
  }
);

// {
//   _id: ...,
//   name,
//   added_at
// }
```

#### updateOne

Updates one document, by providing a query, value to be set (updated) optionally, and/or mongo update operators.

If `options.update\_date: true`, by default true, it will add to `this.updatedProperty` (getter), `AmauiDate.utc.unix` value.

Uses mongo's `findOneAndUpdate` method.

[Update mongo operators](https://www.mongodb.com/docs/manual/reference/operator/update/#update-operators-1)

```ts
const todoCollection = new TodoCollection();

await todoCollection.updateOne(
  {
    _id: ...
  },
  {
    'name': 'Au 114'
  }
);

// {
//   _id: ...,
//   name: 'Au 114',
//   added_at,
//   updated_at
// }
```

#### removeOne

Removes one document from the collection based on the provided query.

Uses mongo's `findOneAndDelete` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.removeOne({
  _id: ...
});

// {
//   ...
//
//   ok: 1
//
//   ...
// }
```

#### updateOneOrAdd

Updates one document, by providing a query, value to be set (updated), or upserts the document if query resulted in no results.

If `options.add\_date: true`, by default true, it will add to `this.addedProperty` (getter), `AmauiDate.utc.unix` value, if document is upserted.

If `options.update\_date: true`, by default true, it will add to `this.updatedProperty` (getter), `AmauiDate.utc.unix` value, if document is updated & upserted.

Uses mongo's `findOneAndUpdate` method, with `upsert: true` option.

```ts
const todoCollection = new TodoCollection();

await todoCollection.updateOneOrAdd(
  {
    name: { $regex: '^todo' }
  },
  {
    'meta.a': 114
  }
);

// {
//   _id: ...,
//   meta: {
//     a: 114
//   },
//   added_at,
//   updated_at
// }
```

#### addMany

Adds multiple document to the collection.

If `options.add\_date: true`, by default true, it will add to `this.addedProperty` (getter), `AmauiDate.utc.unix` value, to every item.

Uses mongo's `insertMany` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.addMany(
  [
    {
      name: '...'
    },
    {
      name: '...'
    },
    {
      name: '...'
    }
  ]
);

// {
//   ...
//
//   insertedIds: [ ... ],
//
//   ...
// }
```

#### updateMany

Updates multiple documents, by providing a query, value to be set (updated) optionally, and/or mongo update operators.

If `options.update\_date: true`, by default true, it will add to `this.updatedProperty` (getter), `AmauiDate.utc.unix` value, to every item.

Uses mongo's `updateMany` method.

[Update mongo operators](https://www.mongodb.com/docs/manual/reference/operator/update/#update-operators-1)

```ts
const todoCollection = new TodoCollection();

await todoCollection.updateMany(
  {
    name: { $regex: '^todo' }
  },
  {
    name: 'A 114',
    'meta.a': 114,

    $inc: {
      a: 114
    }
  }
);

// {
//   modifiedCount: 114
// }
```

#### removeMany

Removes multiple document from the collection based on the provided query.

Uses mongo's `deleteMany` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.removeMany(
  {
    _id: { $in: [ ..., ..., ... ] }
  }
);

// {
//   ...
//
//   deletedCount: 1114
//
//   ...
// }
```

#### bulkWrite

Makes multiple operations in the same request in a collection.

Uses mongo's `bulkWrite` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.bulkWrite(
  [
    {
      insertOne: {
        document: {
         _id,
         name
        }
      }
    },
    {
      updateOne: {
        filter: {
          _id: ...
        },
        update: {
          'meta.a': 1114
        }
      }
    },
    {
      deleteOne: {
        filter: {
          _id: ...
        }
      }
    }
  ]
);

// {
//   ...
//
//   insertedIds: [ ... ],
//   upsertedIds: [ ... ],
//
//   insertedCount: 114,
//   modifiedCount: 114,
//   upsertedCount: 114,
//   deletedCount: 114,
//
//   ...
// }
```

## API

#### IUpdateFilters

```ts
interface IUpdateFilters extends mongodb.UpdateFilter<unknown> {
    [p: string]: any;
}
```

#### IUpdateOrAddOptions

```ts
interface IUpdateOrAddOptions extends mongodb.FindOneAndUpdateOptions {
    add_date?: boolean;
    update_date?: boolean;
}
```

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
    original?: boolean;
    add_date?: boolean;
}
```

#### IFindOptions

```ts
interface IFindOptions extends mongodb.FindOptions {
    total?: boolean;
    sort?: any;
    projection?: any;
}
```

#### ISearchOne

```ts
interface ISearchOne extends mongodb.AggregateOptions {
    projection?: any;
}
```

#### ISearchManyOptions

```ts
interface ISearchManyOptions extends mongodb.AggregateOptions {
    total?: boolean;
    limit?: number;
    skip?: number;
    sort?: any;
    next?: any;
    previous?: any;
    projection?: any;
}
```

#### BaseCollection

```ts
class BaseCollection {
    protected collectionName: string;
    mongo: Mongo;
    Model?: IClass;
    defaults?: TDefaults;
    private db_;
    protected collections: Record<string, mongodb.Collection>;
    protected amalog: AmauiLog;
    static defaults: TDefaults;
    constructor(collectionName: string, mongo: Mongo, Model?: IClass, defaults?: TDefaults);
    get sort(): Record<string, number>;
    get sortProperty(): string;
    get sortAscending(): number;
    get addedProperty(): string;
    get updatedProperty(): string;
    get projection(): object;
    get db(): Promise<mongodb.Db>;
    collection(name?: string, options?: mongodb.CreateCollectionOptions): Promise<mongodb.Collection>;
    transaction(method: TMethod, options?: {
        retries: number;
        retriesWait: number;
    }): Promise<any>;
    count(query?: any, options?: mongodb.CountDocumentsOptions): Promise<number>;
    exists(query: any, options?: mongodb.FindOptions): Promise<boolean>;
    find(query: any, options?: IFindOptions): Promise<IMongoResponse>;
    findOne(query: any, options?: mongodb.FindOptions): Promise<IModel>;
    aggregate(query?: any, options?: mongodb.AggregateOptions): Promise<Array<IModel>>;
    searchMany(query: any, additional?: IMongoSearchManyAdditional, options?: ISearchManyOptions): Promise<IMongoResponse>;
    searchOne(query: any, additional?: IMongoSearchOneAdditional, options?: ISearchOne): Promise<IModel>;
    addOne(value_: any, options_?: IAddOneOptions): Promise<IModel>;
    updateOne(query: any, value: IUpdateFilters, options_?: IUpdateOptions): Promise<IModel>;
    removeOne(query: any, options?: mongodb.FindOneAndDeleteOptions): Promise<mongodb.ModifyResult<IModel>>;
    updateOneOrAdd(query: any, value: any, options_?: IUpdateOrAddOptions): Promise<IModel>;
    addMany(values_: any[], options_?: IAddManyOptions): Promise<Array<IModel>>;
    updateMany(query: any, value: IUpdateFilters, options_?: IUpdateManyOptions): Promise<number>;
    removeMany(query: any, options?: mongodb.DeleteOptions): Promise<number>;
    bulkWrite(values?: mongodb.AnyBulkWriteOperation[], options_?: mongodb.BulkWriteOptions): Promise<mongodb.BulkWriteResult>;
    protected toModel(value: any): any;
    protected response(start: number, collection: mongodb.Collection, method: string, value?: any, req?: express.Request): any;
    query(query: any, aggregate?: boolean): any;
    getDefaults(method: TMethods): void;
    static value(value: any): any;
    static isAmauiQuery(value: any): any;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Mongo: AmauiMongo",
      "to": "/library/mongo/use/AmauiMongo"
    },
    "next": {
      "label": "Mongo: Mongo",
      "to": "/library/mongo/use/Mongo"
    }
  }
}~
