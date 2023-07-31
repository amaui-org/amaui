
# is

Asserts the query between AmauiDate values.

### Time units

- millisecond
- milliseconds
- second
- minute
- hour
- day
- dayWeek
- dayYear
- week
- month
- year

### Query

- before
- after
- same
- between
- before or same
- after or same
- leap-year
- leap-month

### Examples

```ts
is(new AmauiDate('2014-04-14T14:04:14.144'), 'before', new AmauiDate('2014-04-14T14:04:14.147'));
is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'));
is(new AmauiDate('2014-04-14T14:04:14.147'), 'same', new AmauiDate('2014-04-14T14:04:14.147'));
is(new AmauiDate('2014-04-14T14:04:14.147'), 'between', new AmauiDate('2014-04-04T14:04:14.147'), 'day', new AmauiDate('2014-04-10T14:04:14.147'));
is(new AmauiDate('2014-04-14T14:04:14.147'), 'after or same', new AmauiDate('2014-04-14T14:04:14.147'));
is(new AmauiDate('2014-04-14T14:04:14.147'), 'after', new AmauiDate('2014-04-14T14:04:14.144'));
is(new AmauiDate('2020-04-14T14:04:14.147'), 'leap-year');
is(new AmauiDate('2020-02-14T14:04:14.147'), 'leap-month');

// true
// true
// true
// true
// true
// true
// true
// true
```

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
      "to": "/library/date/use/in"
    },
    "next": {
      "label": "Date: max",
      "to": "/library/date/use/max"
    }
  }
}~
