
# startOf

Start of provided time unit, from a provided AmauiDate.

```ts
const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

const value = startOf(amauiDate, 'day');

format(value);

// '2014-04-14T00:00:00'
```

### Units

- second
- minute
- hour
- day
- month
- year

## API

#### startOf

```ts
default function startOf(amauiDate_?: AmauiDate, unit?: TTimeUnits): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: set",
      "to": "/dev/date/use/set"
    },
    "next": {
      "label": "Date: timezones",
      "to": "/dev/date/use/timezones"
    }
  }
}~
