

### API

#### IGrid

```ts
interface IGrid extends ILine {
    auto?: boolean;
    line?: boolean;
    columns?: number | Record<TValueBreakpoints, number>;
    offsets?: Record<TValueBreakpoints, number>;
    values?: Record<TValueBreakpoints, number>;
    RootProps?: TPropsAny;
}
```

#### Grid

```ts
const Grid: React.ForwardRefExoticComponent<Omit<IGrid, "ref"> & React.RefAttributes<unknown>>;
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
