

### API

#### ILinearProress

```ts
interface ILinearProress extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: number | {
        progress?: number;
        buffer?: number;
    };
    version?: 'determinate' | 'indeterminate';
    buffer?: boolean;
    reverse?: boolean;
}
```

#### LinearProgress

```ts
const LinearProgress: React.ForwardRefExoticComponent<Omit<ILinearProress, "ref"> & React.RefAttributes<unknown>>;
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
