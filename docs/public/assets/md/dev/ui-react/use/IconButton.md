

### API

#### IIconButton

```ts
interface IIconButton extends IButton {
}
```

#### IconButton

```ts
const IconButton: React.ForwardRefExoticComponent<Omit<IIconButton, "ref"> & React.RefAttributes<unknown>>;
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