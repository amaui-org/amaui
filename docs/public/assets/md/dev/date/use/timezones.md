

### API

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
