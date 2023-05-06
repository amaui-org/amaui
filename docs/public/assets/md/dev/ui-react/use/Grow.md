

### API

#### IGrow

```ts
interface IGrow extends ITransition {
}
```

#### Grow

```ts
const Grow: React.ForwardRefExoticComponent<Omit<IGrow, "ref"> & React.RefAttributes<unknown>>;
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
