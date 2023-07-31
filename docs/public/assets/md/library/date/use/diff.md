
# diff

Difference between 2 AmauiDates in a provided time unit.

```ts
AmauiDate.diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/13/2014 14:04:14'), 'day');

// 1
```

### Units

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

## API

#### diff

```ts
default function diff(value: AmauiDate, value1: AmauiDate, unit?: TTimeUnits): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: AmauiDate",
      "to": "/library/date/use/AmauiDate"
    },
    "next": {
      "label": "Date: duration",
      "to": "/library/date/use/duration"
    }
  }
}~
