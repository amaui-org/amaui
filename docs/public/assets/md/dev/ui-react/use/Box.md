

### API

#### IBox

```ts
interface IBox extends IBaseElement {
    styles?: string | TValue;
}
```

#### Box

```ts
const Box: React.ForwardRefExoticComponent<Omit<IBox, "ref"> & React.RefAttributes<unknown>>;
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
