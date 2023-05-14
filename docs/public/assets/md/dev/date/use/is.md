

## API

#### TTimeUnits

```ts
type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';
```

#### TIsQuery

```ts
type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';
```

#### is

```ts
default function is(value: AmauiDate, query: TIsQuery, value1?: AmauiDate, unit?: TTimeUnits, value2?: AmauiDate): boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: in",
      "to": "/dev/date/use/in"
    },
    "next": {
      "label": "Date: max",
      "to": "/dev/date/use/max"
    }
  }
}~
