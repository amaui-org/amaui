

### API

#### IFade

```ts
interface IFade extends ITransition {
}
```

#### Fade

```ts
const Fade: React.ForwardRefExoticComponent<Omit<IFade, "ref"> & React.RefAttributes<unknown>>;
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
