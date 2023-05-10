

### API

#### IReveal

```ts
interface IReveal extends IBaseElement {
    inDefault?: boolean;
    offset?: number;
    offsetReveal?: number;
    offsetUnreveal?: number;
    unreveal?: boolean;
    inClassName?: string;
    onChange?: (value: boolean) => any;
    noTransition?: boolean;
}
```

#### Reveal

```ts
const Reveal: React.ForwardRefExoticComponent<Omit<IReveal, "ref"> & React.RefAttributes<unknown>>;
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