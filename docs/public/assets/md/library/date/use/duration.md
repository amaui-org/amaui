
# duration

Returns duration from provided value as a number, as optionally a nicely formatted string.

```ts
duration(144444444140);

// '4 years 7 months 21 days 19 hours 27 minutes 24 seconds 140 milliseconds'
```

### Options

#### unitAbbr

If to abbreviate units, default false.

#### raw

If return object with values for each unit instead of a nicely formatted string, default false.

#### separator

Separator between units, default ' '.

#### display

Which units to display, default `['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']`.

## API

#### duration

```ts
default function duration(value: number, unitAbbr?: boolean, raw?: boolean, separator?: string, display?: string[]): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: diff",
      "to": "/dev/date/use/diff"
    },
    "next": {
      "label": "Date: endOf",
      "to": "/dev/date/use/endOf"
    }
  }
}~
