
# getMongoMatch

Takes array of filters, and an operator optionally, and returns match object ready to be added to the mongo aggregate pipeline.

```ts
getMongoMatch([{ a: 114 }]);
getMongoMatch([{ a: 114 }], '$or');

// [{ $match: { $and: [{ a: 114 }] } }]
// [{ $match: { $or: [{ a: 114 }] } }]
```

## API

#### getMongoMatch

```ts
const getMongoMatch: (query: Array<object>, operator?: TMatchOperator) => Array<TMatch>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: getMongoFilters",
      "to": "/library/models/use/getMongoFilters"
    },
    "next": {
      "label": "Models: getMongoOperator",
      "to": "/library/models/use/getMongoOperator"
    }
  }
}~
