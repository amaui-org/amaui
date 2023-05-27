
# timezones

Entire list of all the timezones, and their details.

```ts
timezones;

// [
//   ...

//   {
//     label: 'Europe/Belgrade (GMT+01:00)',
//     code: 'Europe/Belgrade',
//     name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
//     utc: '+01:00',
//     abbr: 'CET'
//   },

//   ...
// ]
```

## API

#### ITimezone

```ts
interface ITimezone {
    label: string;
    code: string;
    name: string;
    abbr?: string;
    utc: string;
}
```

#### timezones

```ts
const timezones: Array<ITimezone>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: startOf",
      "to": "/dev/date/use/startOf"
    },
    "next": {
      "label": "Diff: Start",
      "to": "/dev/diff/start"
    }
  }
}~
