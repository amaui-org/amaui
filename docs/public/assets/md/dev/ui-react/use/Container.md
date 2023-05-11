

### API

#### IContainer

```ts
interface IContainer extends ILine {
    alignment?: 'start' | 'center' | 'end' | Record<TValueBreakpoints, 'start' | 'center' | 'end'>;
    paddingVertical?: 'both' | 'start' | 'end' | 'none' | Record<TValueBreakpoints, 'both' | 'start' | 'end' | 'none'>;
    paddingHorizontal?: 'both' | 'start' | 'end' | 'none' | Record<TValueBreakpoints, 'both' | 'start' | 'end' | 'none'>;
    fullWidth?: boolean | Record<TValueBreakpoints, boolean>;
    maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset' | Record<TValueBreakpoints, 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset'>;
}
```

#### Container

```ts
const Container: React.ForwardRefExoticComponent<Omit<IContainer, "ref"> & React.RefAttributes<unknown>>;
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
