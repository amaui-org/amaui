

## API

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
      "label": "UI react: Masonry",
      "to": "/dev/ui-react/use/Masonry"
    },
    "next": {
      "label": "UI react: MenuDesktop",
      "to": "/dev/ui-react/use/MenuDesktop"
    }
  }
}~
