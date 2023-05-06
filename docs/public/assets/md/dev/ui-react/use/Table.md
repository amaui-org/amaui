

### API

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

