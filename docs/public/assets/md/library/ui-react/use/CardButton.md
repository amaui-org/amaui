

## API

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
      "label": "UI react: Card",
      "to": "/library/ui-react/use/Card"
    },
    "next": {
      "label": "UI react: CardFooter",
      "to": "/library/ui-react/use/CardFooter"
    }
  }
}~
