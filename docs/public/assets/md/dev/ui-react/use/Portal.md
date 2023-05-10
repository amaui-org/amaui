

### API

#### IPortal

```ts
interface IPortal extends IBaseElement {
    element?: Element | DocumentFragment;
}
```

#### Portal

```ts
const Portal: React.ForwardRefExoticComponent<Omit<IPortal, "ref"> & React.RefAttributes<unknown>>;
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