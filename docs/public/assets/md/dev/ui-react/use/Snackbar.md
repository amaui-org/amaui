

### API

#### ISnackbar

```ts
interface ISnackbar extends ISurface {
    size?: TSize;
    open?: boolean;
    primary?: TElement;
    end?: TElement;
    position?: 'top' | 'bottom';
    alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
    autoHide?: boolean;
    autoHideDuration?: number;
    fixed?: boolean;
    closeButton?: boolean;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    onClose?: () => any;
    TransitionComponent?: TElementReference;
    TransitionComponentProps?: TPropsAny;
}
```

#### Snackbar

```ts
const Snackbar: React.ForwardRefExoticComponent<Omit<ISnackbar, "ref"> & React.RefAttributes<unknown>>;
```

