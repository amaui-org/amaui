

### API

#### ITableCell

```ts
interface ITableCell extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    position?: 'head' | 'body';
    align?: TLineAlign;
    justify?: TLineJustify;
    noWeight?: boolean;
    DividerProps?: TPropsAny;
}
```

#### TableCell

```ts
const TableCell: React.ForwardRefExoticComponent<Omit<ITableCell, "ref"> & React.RefAttributes<unknown>>;
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
