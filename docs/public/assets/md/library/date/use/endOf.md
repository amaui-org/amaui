
# endOf

End of provided time unit, from a provided AmauiDate.

```ts
const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

const value = endOf(amauiDate, 'day');

format(value);

// '2014-04-14T23:59:59'
```

### Units

- second
- minute
- hour
- day
- month
- year

## API

#### endOf

```ts
default function endOf(amauiDate_?: AmauiDate, unit?: TTimeUnits): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: duration",
      "to": "/dev/date/use/duration"
    },
    "next": {
      "label": "Date: format",
      "to": "/dev/date/use/format"
    }
  }
}~
