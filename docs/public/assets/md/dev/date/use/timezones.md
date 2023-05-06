

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
