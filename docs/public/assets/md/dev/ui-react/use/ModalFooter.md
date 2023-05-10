

### API

#### IModalFooter

```ts
interface IModalFooter extends IBaseElement {
}
```

#### ModalFooter

```ts
const ModalFooter: React.ForwardRefExoticComponent<Omit<IModalFooter, "ref"> & React.RefAttributes<unknown>>;
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