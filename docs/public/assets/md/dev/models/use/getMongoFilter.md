
# getMongoFilter

Returns an object that represents a mongo query filter.

### Operators

- equal
- not-equal
- array-all
- array-some
- starts-with
- ends-with
- contains
- default (others)
  - greater-than
  - greater-than-equal
  - less-than
  - less-than-equal

### Examples

#### Equal

```ts
getMongoFilter('a.ad', `equal`, 114);

// { 'a.ad': 114 }
```

#### Not equal

```ts
getMongoFilter('a.ad', 'not-equal', 114);

// { 'a.ad': { $ne: 114 } }
```

#### Array all

```ts
getMongoFilter('a.ad', 'array-all', [14, 114, 1114]);

// {
//   $and: [
//     { 'a.ad': 14 },
//     { 'a.ad': 114 },
//     { 'a.ad': 1114 }
//   ]
// }
```

#### Array some

```ts
getMongoFilter('a.ad', 'array-some', [14, 114, 1114]);

// {
//   $or: [
//     { 'a.ad': 14 },
//     { 'a.ad': 114 },
//     { 'a.ad': 1114 }
//   ]
// }
```

#### Starts with

```ts
getMongoFilter('a.ad', 'starts-with', 'a');

// { 'a.ad': { $regex: '^a', $options: 'i' } }
```

#### Ends with

```ts
getMongoFilter('a.ad', 'ends-with', 'a');

// { 'a.ad': { $regex: 'a$', $options: 'i' } }
```

#### Contains

```ts
getMongoFilter('a.ad', 'contains', 'a');

// { 'a.ad': { $regex: 'a', $options: 'i' } }
```

#### Greater than

```ts
getMongoFilter('a.ad', 'greater-than', 114);

// { 'a.ad': { $gt: 114 } }
```

#### Greater than equal

```ts
getMongoFilter('a.ad', 'greater-than-equal', 114);

// { 'a.ad': { $gte: 114 } }
```

#### Less than

```ts
getMongoFilter('a.ad', 'less-than', 114);

// { 'a.ad': { $lt: 114 } }
```

#### Less than equal

```ts
getMongoFilter('a.ad', 'less-than-equal', 114);

// { 'a.ad': { $lte: 114 } }
```

## API

#### getMongoFilter

```ts
const getMongoFilter: (field: string, operator: string, value: any) => Record<string, any>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: getExpressParamValue",
      "to": "/dev/models/use/getExpressParamValue"
    },
    "next": {
      "label": "Models: getMongoFilters",
      "to": "/dev/models/use/getMongoFilters"
    }
  }
}~
