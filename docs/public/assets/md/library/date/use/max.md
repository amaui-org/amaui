
# max

Returns max AmauiDate from array of AmauiDates.

```ts
format(max([
  new AmauiDate('2014-04-14T14:04:14'),
  new AmauiDate('2014-04-17T14:04:14'),
  new AmauiDate('2014-04-14T14:40:14'),
  new AmauiDate('2014-04-14T14:41:14')
]));

// '2014-04-17T14:04:14'
```

## API

#### max

```ts
default function max(values?: Array<AmauiDate>): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: is",
      "to": "/library/date/use/is"
    },
    "next": {
      "label": "Date: min",
      "to": "/library/date/use/min"
    }
  }
}~
