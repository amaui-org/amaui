
# set

Set AmauiDate to a specific time unit.

```ts
format(set(4, 'day', new AmauiDate('2014-04-14T14:04:14.147')));

// '2014-04-04T14:04:14'
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

#### set

```ts
default function set(value: number, unit: TTimeUnits, amauiDate_?: AmauiDate): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: remove",
      "to": "/library/date/use/remove"
    },
    "next": {
      "label": "Date: startOf",
      "to": "/library/date/use/startOf"
    }
  }
}~
