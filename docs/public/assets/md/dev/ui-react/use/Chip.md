

### API

#### IChip

```ts
interface IChip extends IButton {
    input?: boolean;
    filter?: boolean;
    onClick?: (event: React.MouseEvent<any>) => any;
    onRemove?: (event: React.MouseEvent<any>) => any;
    onSelected?: () => any;
    onUnselected?: () => any;
}
```

#### Chip

```ts
const Chip: React.ForwardRefExoticComponent<Omit<IChip, "ref"> & React.RefAttributes<unknown>>;
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