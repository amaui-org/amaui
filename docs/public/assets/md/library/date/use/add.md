
# add

Adds time unit to the AmauiDate value.

```ts
const amauiDate = new AmauiDate();

add(14, 'day', amauiDate);
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

#### add

```ts
default function add(value: number, unit: TTimeUnits, amauiDate_?: AmauiDate): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: Start",
      "to": "/dev/date/start"
    },
    "next": {
      "label": "Date: ago",
      "to": "/dev/date/use/ago"
    }
  }
}~
