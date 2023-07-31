
# validateMongoQuery

Used for validating `QueryObject` value.

Second argument keys, you can add which collections are allowed in the `QueryObject`.

### Validation

#### Query

Only allowed collection names in the `QueryObject` value as properties.

```ts
try {
  validateMongoQuery('a', { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'Query has to be an object, with collection being properties'
```

#### Allowed keys

Only allowed collection names in the `QueryObject` value as properties.

```ts
try {
  validateMongoQuery({
    a: [],
    a1114: []
  }, { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'Query property can only be one of the following values: a, a114'
```

#### Object

```ts
try {
  validateMongoQuery({
    a: 1114,
  }, { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'a's value has to be an array of filter objects'
```

#### Field

Field property value has to be a string.

```ts
try {
  validateMongoQuery({
    a: [
      { field: true, operator: '', value: 4 }
    ],
  }, { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'a's 'true' field value has to be a string'
```

#### Operator

Operator property value has to be one of the allowed operators.

```ts
try {
  validateMongoQuery({
    a: [
      { field: 'a', operator: 'a', value: 4 }
    ],
  }, { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'a's 'a' operator is invalid value'
```

#### Value

Value for specific operators has to be of required data type.

```ts
try {
  validateMongoQuery({
    a: [
      { field: 'a', operator: 'array-all', value: 4 }
    ],
  }, { allowed: ['a', 'a114'] });
} catch (error) {
  console.log(error);
}

// Error: 'For array-all and array-some operators, value has to be a non-empty array of values'
```

### Example

#### Good

```ts
validateMongoQuery({
  a: [
    { field: 'a', operator: 'array-all', value: [1, 3, 4] }
  ],
}, { allowed: ['a', 'a114'] });

// true
```

## API

#### validateMongoQuery

```ts
const validateMongoQuery: (value: object, keys?: IQueryKeys) => Error | boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: Response",
      "to": "/library/models/use/Response"
    },
    "next": {
      "label": "Mongo: Start",
      "to": "/library/mongo/start"
    }
  }
}~
