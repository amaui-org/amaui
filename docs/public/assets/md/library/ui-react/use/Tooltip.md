

## API

#### ITooltip

```ts
interface ITooltip extends Omit<IModal, 'maxWidth'> {
    tonal?: TTonal;
    color?: TColor;
    open?: boolean;
    label?: TElement;
    parent?: THTMLElement;
    position?: 'top' | 'left' | 'bottom' | 'right';
    switch?: boolean;
    alignment?: 'start' | 'center' | 'end';
    portal?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl' | 'unset';
    arrow?: boolean;
    anchor?: DOMRect;
    anchorElement?: THTMLElement;
    noMargin?: string;
    classNameSwitch?: string;
    transformOrigin?: string;
    transformOriginSwitch?: string;
    transformOriginRtl?: string;
    transformOriginRtlSwitch?: string;
    touch?: boolean;
    longPress?: boolean;
    hover?: boolean;
    focus?: boolean;
    inset?: boolean;
    nowrap?: boolean;
    follow?: boolean;
    interactive?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    onExited?: TMethodTransition;
    TransitionComponent?: TElementReference;
    TransitionComponentProps?: TPropsAny;
    AppendProps?: TPropsAny;
    ModalProps?: TPropsAny;
    LabelProps?: TPropsAny;
}
```

#### Tooltip

```ts
const Tooltip: React.ForwardRefExoticComponent<Omit<ITooltip, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ToggleButtons",
      "to": "/library/ui-react/use/ToggleButtons"
    },
    "next": {
      "label": "UI react: TopAppBar",
      "to": "/library/ui-react/use/TopAppBar"
    }
  }
}~
