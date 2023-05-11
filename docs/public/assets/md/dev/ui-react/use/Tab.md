

### API

#### ITab

```ts
interface ITab extends Omit<ISurface, 'version'> {
    version?: 'primary' | 'secondary';
    value?: number;
    onChange?: (value: number, index: number) => any;
    active?: boolean;
    index?: number;
    label?: TElement;
    icon?: TElement;
    iconPosition?: 'start' | 'top' | 'bottom' | 'end';
    activateOnFocus?: boolean;
    disabled?: boolean;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onFocus?: (event: React.FocusEvent<any>) => any;
    LineProps?: TPropsAny;
}
```

#### Tab

```ts
const Tab: React.ForwardRefExoticComponent<Omit<ITab, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Switch",
      "to": "/dev/ui-react/use/Switch"
    },
    "next": {
      "label": "UI react: Table",
      "to": "/dev/ui-react/use/Table"
    }
  }
}~
