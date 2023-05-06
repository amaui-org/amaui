

### API

#### IPaginationItem

```ts
interface IPaginationItem extends IButton {
    TypeProps?: TPropsAny;
}
```

#### PaginationItem

```ts
const PaginationItem: React.ForwardRefExoticComponent<Omit<IPaginationItem, "ref"> & React.RefAttributes<unknown>>;
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
