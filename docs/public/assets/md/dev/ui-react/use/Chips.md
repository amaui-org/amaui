

### API

#### IChips

```ts
interface IChips extends IChip {
    wrap?: boolean;
}
```

#### Chips

```ts
const Chips: React.ForwardRefExoticComponent<Omit<IChips, "ref"> & React.RefAttributes<unknown>>;
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
