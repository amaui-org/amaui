

## API

#### IModal

```ts
interface IModal extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    open?: boolean;
    openDefault?: boolean;
    mainRef?: TRef;
    backgroundRef?: TRef;
    partialyOpened?: number;
    minWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';
    maxWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';
    fullScreen?: boolean;
    fullWidth?: boolean;
    background?: boolean;
    modalWrapper?: boolean;
    modalWrapperSurface?: boolean;
    portal?: boolean;
    focus?: boolean;
    freezeScroll?: boolean;
    disableKeyboardClose?: boolean;
    disableBackgroundClose?: boolean;
    backgroundInvisible?: boolean;
    onClose?: TMethod;
    NoSurfaceProps?: TPropsAny;
    SurfaceProps?: TPropsAny;
    BackgroundProps?: TPropsAny;
    PortalProps?: TPropsAny;
    TransitionComponentProps?: TPropsAny;
    BackgroundComponent?: TElementReference;
    TransitionComponent?: TElementReference;
}
```

#### Modal

```ts
const Modal: React.ForwardRefExoticComponent<Omit<IModal, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: MenuDesktop",
      "to": "/dev/ui-react/use/MenuDesktop"
    },
    "next": {
      "label": "UI react: ModalFooter",
      "to": "/dev/ui-react/use/ModalFooter"
    }
  }
}~
