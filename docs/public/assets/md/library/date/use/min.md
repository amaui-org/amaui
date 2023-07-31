
# min

Returns min AmauiDate from array of AmauiDates.

```ts
format(min([
  new AmauiDate('2014-04-14T14:04:14'),
  new AmauiDate('2014-04-17T14:04:14'),
  new AmauiDate('2014-04-14T14:40:14'),
  new AmauiDate('2014-04-14T14:41:14')
]));

// '2014-04-14T14:04:14'
```

## API

#### min

```ts
default function min(values?: Array<AmauiDate>): AmauiDate;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: max",
      "to": "/library/date/use/max"
    },
    "next": {
      "label": "Date: my",
      "to": "/library/date/use/my"
    }
  }
}~
