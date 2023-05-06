

### API

#### IModalHeader

```ts
interface IModalHeader extends ILine {
    align?: TLineAlign;
}
```

#### ModalHeader

```ts
const ModalHeader: React.ForwardRefExoticComponent<Omit<IModalHeader, "ref"> & React.RefAttributes<unknown>>;
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
