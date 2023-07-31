
# checkObjectFilters

Checks filters provided against the value provided, and the operator `or`, `and`, and returns if the filters pass or not.

You can find filter & filter operator schema in the API below.

```ts
checkObjectFilters(
  {
    a: 4,
    ab: [1, 4, 7],
    ad: {
      a: 4
    }
  },
  [
    { field: 'a', operator: 'equal', value: 40 },
    { field: 'ab', operator: 'equal', value: 4 },
    { field: 'ad.a', operator: 'equal', value: 4 },
  ],
  'or'
);

// true
```

## API

#### TFilterOperator

```ts
type TFilterOperator = 'less-than' | 'less-than-equal' | 'equal' | 'not-equal' | 'array-all' | 'array-some' | 'starts-with' | 'ends-with' | 'contains' | 'greater-than-equal' | 'greater-than';
```

#### IFilter

```ts
interface IFilter {
    field: string;
    operator: TFilterOperator;
    value: any;
}
```

#### checkObjectFilters

```ts
// defaults
// filters: []
// operator: 'or'
const checkObjectFilters: (value: object, filters?: Array<IFilter>, operator?: 'or' | 'and') => boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: checkAppVersion",
      "to": "/library/utils/use/checkAppVersion"
    },
    "next": {
      "label": "Utils: clamp",
      "to": "/library/utils/use/clamp"
    }
  }
}~
