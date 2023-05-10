

### API

#### IBanner

```ts
interface IBanner extends IBaseElement {
    size?: TSize;
    maxWidth?: string | number;
    actions?: TElement;
}
```

#### Banner

```ts
const Banner: React.ForwardRefExoticComponent<Omit<IBanner, "ref"> & React.RefAttributes<unknown>>;
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