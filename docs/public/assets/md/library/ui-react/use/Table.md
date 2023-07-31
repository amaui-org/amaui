

## API

#### ITable

```ts
interface ITable extends ISurface {
    size?: TSize;
    header?: TElement;
    footer?: TElement;
    WrapperComponentProps?: TPropsAny;
    TableComponent?: TElementReference;
    WrapperComponent?: TElementReference;
}
```

#### Table

```ts
const Table: React.ForwardRefExoticComponent<Omit<ITable, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Tab",
      "to": "/library/ui-react/use/Tab"
    },
    "next": {
      "label": "UI react: TableBody",
      "to": "/library/ui-react/use/TableBody"
    }
  }
}~
