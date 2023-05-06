

### API

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

