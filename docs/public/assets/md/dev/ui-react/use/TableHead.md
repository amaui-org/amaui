

### API

#### ITableHead

```ts
interface ITableHead extends ISurface {
    size?: TSize;
    sticky?: boolean;
}
```

#### TableHead

```ts
const TableHead: React.ForwardRefExoticComponent<Omit<ITableHead, "ref"> & React.RefAttributes<unknown>>;
```

