

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
