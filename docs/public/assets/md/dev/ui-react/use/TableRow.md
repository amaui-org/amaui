

### API

#### ITableRow

```ts
interface ITableRow extends ISurface {
    size?: TSize;
    hover?: boolean;
    selected?: boolean;
    position?: 'head' | 'body';
}
```

#### TableRow

```ts
const TableRow: React.ForwardRefExoticComponent<Omit<ITableRow, "ref"> & React.RefAttributes<unknown>>;
```

