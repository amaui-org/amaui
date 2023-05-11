

### API

#### ISnackbarsProvider

```ts
interface ISnackbarsProvider {
    add: (value: any) => void;
    remove: (value: 'first' | 'last' | string) => void;
}
```

#### ISnackbarsProvider

```ts
interface ISnackbarsProvider extends IBaseElement {
    max?: number;
    position?: 'top' | 'bottom';
    alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
    SnackbarProps?: TPropsAny;
}
```

#### SnackbarsProvider

```ts
const SnackbarsProvider: React.ForwardRefExoticComponent<Omit<ISnackbarsProvider, "ref"> & React.RefAttributes<unknown>>;
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
}
