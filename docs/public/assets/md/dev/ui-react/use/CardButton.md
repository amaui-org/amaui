

### API

#### ICardButton

```ts
interface ICardButton extends IBaseElement {
    focus?: boolean;
    selected?: boolean;
    href?: boolean;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    InteractionProps?: TPropsAny;
}
```

#### CardButton

```ts
const CardButton: React.ForwardRefExoticComponent<Omit<ICardButton, "ref"> & React.RefAttributes<unknown>>;
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
