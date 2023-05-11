

### API

#### IDivider

```ts
interface IDivider extends ISurface {
    inset?: boolean;
    middle?: boolean;
    padding?: number;
    opacity?: number;
    alignment?: 'start' | 'center' | 'end';
    orientation?: 'vertical' | 'horizontal';
    flex?: boolean;
}
```

#### Divider

```ts
const Divider: React.ForwardRefExoticComponent<Omit<IDivider, "ref"> & React.RefAttributes<unknown>>;
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
