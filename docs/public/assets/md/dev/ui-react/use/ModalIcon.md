

### API

#### IModalIcon

```ts
interface IModalIcon extends IIcon {
}
```

#### ModalIcon

```ts
const ModalIcon: React.ForwardRefExoticComponent<Omit<IModalIcon, "ref"> & React.RefAttributes<unknown>>;
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
