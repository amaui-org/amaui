

## API

#### ICard

```ts
interface ICard extends ISurface {
    focus?: boolean;
    selected?: boolean;
    button?: boolean;
    href?: boolean;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    InteractionProps?: TPropsAny;
}
```

#### Card

```ts
const Card: React.ForwardRefExoticComponent<Omit<ICard, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CalendarMonth",
      "to": "/library/ui-react/use/CalendarMonth"
    },
    "next": {
      "label": "UI react: CardButton",
      "to": "/library/ui-react/use/CardButton"
    }
  }
}~
