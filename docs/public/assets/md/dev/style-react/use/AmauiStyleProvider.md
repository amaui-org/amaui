

### API

#### IAmauiStyleProvider

```ts
interface IAmauiStyleProvider extends AmauiStyle {
    updateWithRerender?: (value: any) => AmauiStyle;
}
```

#### AmauiStyleProvider

```ts
const AmauiStyleProvider: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
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
