
# getMongoOperator

Returns mongo operator based on predefined names for operators.

```ts
getMongoOperator('equal');
getMongoOperator('not-equal');
getMongoOperator('greater-than');
getMongoOperator('greater-than-equal');
getMongoOperator('less-than');
getMongoOperator('less-than-equal');
getMongoOperator('array-all');
getMongoOperator('array-some');
getMongoOperator('starts-with');
getMongoOperator('contains');

// '$eq'
// '$ne'
// '$gt'
// '$gte'
// '$lt'
// '$lte'
// '$eq'
// '$eq'
// '$regex'
// '$regex'
```

## API

#### getMongoOperator

```ts
const getMongoOperator: (operator: string) => string | undefined;
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: getMongoMatch",
      "to": "/dev/models/use/getMongoMatch"
    },
    "next": {
      "label": "Models: models",
      "to": "/dev/models/use/models"
    }
  }
}~
