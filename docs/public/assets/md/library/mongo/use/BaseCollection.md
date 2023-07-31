
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

For all queries `Query` model is used from `@amaui/models` library.

Most of the methods expect `Query` instance as an argument to perform the query. \
You can find for each method an example of what it expects.

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

#### Modeling data

Data schema this library assumes is an example which nicely organizes any API data (with small nested overhead), but obviously in the collection class getters define how ever your own data models look like, what properties they have, and for what.

```ts
{
  _id: ...,
  meta: {
    created_by: User ObjectID
  },
  // any
  data: {
    ...
  },
  // any, used for db scale
  // to make specific indexes
  namespace: {
    ...
  },
  api_meta: {
    added_at: Date | number,
    updated_at: Date | number
  }
}
```

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

await todoCollection.count(
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  })
);

// 1114
```

#### exists

Returns true if query resulted in at least 1 document found, using limit 1.

Uses mongo's `findOne` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.exists(
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  })
);

// true
```

#### find

Returns a response object `{ response, total }`, with total being optional.

Total is by default false.

Uses mongo's `find` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.find(
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
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

await todoCollection.findOne(
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  })
);

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
    queries: {
      aggregate: {
        todos: [
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
      }
    }
  })
);

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
    meta,
    data
  }
);

// {
//   _id: ...,
//   data,
//   meta,
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
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  }),
  {
    'meta.a': 114
  }
);

// {
//   _id: ...,
//   meta: {
//     created_by: ...,
//     a: 114
//   },
//   data,
//   updated_at
// }
```

#### removeOne

Removes one document from the collection based on the provided query.

Uses mongo's `findOneAndDelete` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.removeOne(
  new Query({
    queries: {
      find: {
        todos: {
          _id: ...
        }
      }
    }
  })
);

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

await todoCollection.updateOne(
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  }),
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
      meta,
      data
    },
    {
      meta,
      data
    },
    {
      meta,
      data
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
  new Query({
    queries: {
      find: {
        todos: {
          name: { $regex: '^todo' }
        }
      }
    }
  }),
  {
    'meta.a': 114
  }
);

// {
//   modifiedCount: 1114
// }
```

#### removeMany

Removes multiple document from the collection based on the provided query.

Uses mongo's `deleteMany` method.

```ts
const todoCollection = new TodoCollection();

await todoCollection.removeMany(
  new Query({
    queries: {
      find: {
        todos: {
          _id: { $in: [ ..., ..., ... ] }
        }
      }
    }
  })
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
         meta,
         data,
         api_meta
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
//   insertedCount: 1114,
//   modifiedCount: 1114,
//   upsertedCount: 1114,
//   deletedCount: 1114,
//
//   ...
// }
```

## API

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
    get sort(): Record<string, number>;
    get sortProperty(): string;
    get sortAscending(): number;
    get addedProperty(): string;
    get updatedProperty(): string;
    get projection(): object;
    collection(name?: string, options?: mongodb.CreateCollectionOptions): Promise<mongodb.Collection>;
    transaction(method: TMethod, options?: {
        retries: number;
        retriesWait: number;
    }): Promise<void | Error>;
    count(query?: Query, options?: mongodb.CountDocumentsOptions): Promise<number>;
    exists(query: Query, options?: mongodb.FindOptions): Promise<boolean>;
    find(query: Query, options?: mongodb.FindOptions): Promise<IMongoResponse>;
    findOne(query: Query, options?: mongodb.FindOptions): Promise<any>;
    aggregate(query?: Query, options?: mongodb.AggregateOptions): Promise<Array<mongodb.Document>>;
    searchMany(query: Query, additional?: IMongoSearchManyAdditional, options?: mongodb.AggregateOptions): Promise<IMongoResponse>;
    searchOne(query: Query, additional?: IMongoSearchOneAdditional, options?: mongodb.AggregateOptions): Promise<mongodb.Document>;
    addOne(value: any, options_?: IAddOneOptions): Promise<mongodb.Document>;
    updateOne(query: Query, value?: any, operators?: mongodb.UpdateFilter<any>, options_?: IUpdateOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    removeOne(query: Query, options?: mongodb.FindOneAndDeleteOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    updateOneOrAdd(query: Query, value: any, options_?: IUpdateOrAddOptions): Promise<mongodb.ModifyResult<mongodb.Document>>;
    addMany(values_: any[], options_?: IAddManyOptions): Promise<Array<mongodb.Document>>;
    updateMany(query: Query, value?: any, operators?: mongodb.UpdateFilter<any>, options_?: IUpdateManyOptions): Promise<number>;
    removeMany(query: Query, options?: mongodb.DeleteOptions): Promise<number>;
    bulkWrite(values?: mongodb.AnyBulkWriteOperation[], options_?: mongodb.BulkWriteOptions): Promise<Array<mongodb.Document>>;
    protected response(start: number, collection: mongodb.Collection, method: string, value?: any, req?: express.Request): any;
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
