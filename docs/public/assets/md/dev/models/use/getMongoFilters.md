
# getMongoFilters

Value should be of type `QueryObject`, more on `query` page, and it makes an object where each key represents a collection, and the value is array of filters, that are ready to insert into mongo find, aggregate match objects (ie. using `$and` or `$or` operator).

```ts
getMongoFilters({
  a: [
    { operator: 'equal', field: 'a.a', value: 4 },
    { operator: 'not-equal', field: 'a.a', value: 4 },
    { operator: 'greater-than', field: 'a.a', value: 4 },
    { operator: 'greater-than-equal', field: 'a.a', value: 4 },
    { operator: 'less-than', field: 'a.a', value: 4 },
    { operator: 'less-than-equal', field: 'a.a', value: 4 },
    { operator: 'array-all', field: 'a.a', value: [1, 4] },
    { operator: 'array-some', field: 'a.a', value: [1, 4] },
    { operator: 'starts-with', field: 'a.a', value: 4 },
    { operator: 'ends-with', field: 'a.a', value: 4 },
    { operator: 'contains', field: 'a.a', value: 4 }
  ]
});

// {
//   a: [
//     { 'a.a': 4 },
//     { 'a.a': { $ne: 4 } },
//     { 'a.a': { $gt: 4 } },
//     { 'a.a': { $gte: 4 } },
//     { 'a.a': { $lt: 4 } },
//     { 'a.a': { $lte: 4 } },
//     { $and: [{ 'a.a': 1 }, { 'a.a': 4 }] },
//     { $or: [{ 'a.a': 1 }, { 'a.a': 4 }] },
//     { 'a.a': { "$regex": "^4", $options: 'i' } },
//     { 'a.a': { "$regex": "4$", $options: 'i' } },
//     { 'a.a': { "$regex": ".*4.*", $options: 'i' } },
//   ]
// }
```

## API

#### getMongoFilters

```ts
const getMongoFilters: (value_: IQueryObject<IFilter>, methodField?: (...args: any[]) => any) => IQueryObject;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: getMongoFilter",
      "to": "/dev/models/use/getMongoFilter"
    },
    "next": {
      "label": "Models: getMongoMatch",
      "to": "/dev/models/use/getMongoMatch"
    }
  }
}~
