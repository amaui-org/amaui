

### API

#### MENUS

```ts
const MENUS: {
    open: any[];
    priority: (value: any) => boolean;
    add: (value: any) => void;
    remove: (value: any) => void;
};
```

#### IMenu

```ts
interface IMenu extends ITooltip {
    open?: boolean;
    include?: Array<Element>;
    autoSelect?: boolean;
    autoSelectOnBlur?: boolean;
    resetKeyboardNavigation?: boolean;
    closeOnClickAway?: boolean;
    onSelect?: (value: any) => any;
    onClose?: () => any;
    ListProps?: TPropsAny;
    ModalProps?: TPropsAny;
}
```

#### Menu

```ts
const Menu: React.ForwardRefExoticComponent<Omit<IMenu, "ref"> & React.RefAttributes<unknown>>;
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
}~
