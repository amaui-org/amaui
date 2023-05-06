

### API

#### ICountry

```ts
interface ICountry {
    flag: string;
    name: string;
    full_name: string;
    sovereignty: string;
    'alpha-2': string;
    'alpha-3': string;
    numeric: string;
    subdivision: string;
    tlds: string[];
}
```

#### countries

```ts
const countries: Array<ICountry>;
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
