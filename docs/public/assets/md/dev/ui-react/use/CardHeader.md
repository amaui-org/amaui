

### API

#### ICardHeader

```ts
interface ICardHeader extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardHeader

```ts
const CardHeader: React.ForwardRefExoticComponent<Omit<ICardHeader, "ref"> & React.RefAttributes<unknown>>;
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
}
