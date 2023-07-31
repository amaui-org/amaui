

## API

#### IBackdrop

```ts
interface IBackdrop extends ILine {
    open?: boolean;
    invisible?: boolean;
    disableKeyboardClose?: boolean;
    disableBackgroundClose?: boolean;
    BackgroundComponent?: TElementReference;
    ModalComponent?: TElementReference;
    BackgroundProps?: TPropsAny;
    ModalProps?: TPropsAny;
    onClose?: TMethod;
}
```

#### Backdrop

```ts
const Backdrop: React.ForwardRefExoticComponent<Omit<IBackdrop, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: AvatarGroup",
      "to": "/library/ui-react/use/AvatarGroup"
    },
    "next": {
      "label": "UI react: Badge",
      "to": "/library/ui-react/use/Badge"
    }
  }
}~
