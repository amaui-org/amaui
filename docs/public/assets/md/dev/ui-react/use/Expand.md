

### API

#### IExpand

```ts
interface IExpand extends ITransition {
    expandSize?: number;
    orientation?: 'veritcal' | 'horizontal';
    WrapperProps?: TPropsAny;
}
```

#### Expand

```ts
const Expand: React.ForwardRefExoticComponent<Omit<IExpand, "ref"> & React.RefAttributes<unknown>>;
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