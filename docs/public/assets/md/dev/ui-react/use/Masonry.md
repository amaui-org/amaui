

### API

#### IMasonry

```ts
interface IMasonry extends Omit<ILine, 'gap'> {
    gap?: number | Record<TValueBreakpoints, number>;
    columns?: number | Record<TValueBreakpoints, number>;
}
```

#### Masonry

```ts
const Masonry: React.ForwardRefExoticComponent<Omit<IMasonry, "ref"> & React.RefAttributes<unknown>>;
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
