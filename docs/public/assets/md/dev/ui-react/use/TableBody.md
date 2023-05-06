

### API

#### ITableBody

```ts
interface ITableBody extends ISurface {
    size?: TSize;
}
```

#### TableBody

```ts
const TableBody: React.ForwardRefExoticComponent<Omit<ITableBody, "ref"> & React.RefAttributes<unknown>>;
```

