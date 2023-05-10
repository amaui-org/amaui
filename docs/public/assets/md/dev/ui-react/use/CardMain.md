

### API

#### ICardMain

```ts
interface ICardMain extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardMain

```ts
const CardMain: React.ForwardRefExoticComponent<Omit<ICardMain, "ref"> & React.RefAttributes<unknown>>;
```


{
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