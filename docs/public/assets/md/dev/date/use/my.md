

### API

#### IMy

```ts
interface IMy {
    amauiDate: AmauiDate;
    timezone: ITimezone;
}
```

#### my

```ts
default function my(): IMy;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: min",
      "to": "/dev/date/use/min"
    },
    "next": {
      "label": "Date: myTimezone",
      "to": "/dev/date/use/myTimezone"
    }
  }
}~
