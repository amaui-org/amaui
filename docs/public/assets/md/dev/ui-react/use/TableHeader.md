

### API

#### ITableHeader

```ts
interface ITableHeader extends ISurface {
    size?: TSize;
}
```

#### TableHeader

```ts
const TableHeader: React.ForwardRefExoticComponent<Omit<ITableHeader, "ref"> & React.RefAttributes<unknown>>;
```

