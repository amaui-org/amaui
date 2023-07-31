
# my

Returns user's local AmauiDate, and the timezone.

```ts
my();

// {
//     amauiDate: AmauiDate { },
//     timezone: {
//         label: 'Europe/Belgrade (GMT+01:00)',
//         code: 'Europe/Belgrade',
//         name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
//         utc: '+01:00',
//         abbr: 'GMT+2'
//     }
// }
```

## API

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
      "to": "/library/date/use/min"
    },
    "next": {
      "label": "Date: myTimezone",
      "to": "/library/date/use/myTimezone"
    }
  }
}~
