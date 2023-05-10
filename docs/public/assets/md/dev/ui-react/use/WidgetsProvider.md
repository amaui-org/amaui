

### API

#### IWidgetsProvider

```ts
interface IWidgetsProvider {
    open: (value?: string) => void;
    openAll: () => void;
    close: (value?: string) => void;
    closeAll: () => void;
}
```

#### IWidgetsProvider

```ts
interface IWidgetsProvider extends IBaseElement {
    widgets?: TElement;
    position?: 'top' | 'bottom';
    move?: boolean;
    fixed?: boolean;
    onOpen?: (value: string) => any;
    onOpenAll?: () => any;
    onClose?: (value: string) => any;
    onCloseAll?: () => any;
    SpeedDialProps?: TPropsAny;
    MoveProps?: TPropsAny;
    Icon?: TElementReference;
    IconCloseItem?: TElementReference;
}
```

#### WidgetsProvider

```ts
const WidgetsProvider: React.ForwardRefExoticComponent<Omit<IWidgetsProvider, "ref"> & React.RefAttributes<unknown>>;
```


{
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
}