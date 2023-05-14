

## API

#### TMethod

```ts
type TMethod = (...args: any[]) => any;
```

#### TFilterOperator

```ts
type TFilterOperator = 'less-than' | 'less-than-equal' | 'equal' | 'not-equal' | 'array-all' | 'array-some' | 'starts-with' | 'contains' | 'greater-than-equal' | 'greater-than';
```

#### IFilter

```ts
interface IFilter {
    field: string;
    operator: TFilterOperator;
    value: any;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: merge",
      "to": "/dev/utils/use/merge"
    },
    "next": {
      "label": "Utils: numberWithCommas",
      "to": "/dev/utils/use/numberWithCommas"
    }
  }
}~
