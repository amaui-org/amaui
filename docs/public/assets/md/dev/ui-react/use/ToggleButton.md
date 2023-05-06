

### API

#### IToggleButton

```ts
interface IToggleButton extends IChip {
}
```

#### ToggleButton

```ts
const ToggleButton: React.ForwardRefExoticComponent<Omit<IToggleButton, "ref"> & React.RefAttributes<unknown>>;
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
