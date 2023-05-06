

### API

#### ITableRow

```ts
interface ITableRow extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: boolean;
    size?: TSize;
    page?: number;
    pageDefault?: number;
    onChange?: (value: number) => any;
    rowsPerPage?: number;
    rowsPerPageDefault?: number;
    rowsPerPageOptions?: Array<number>;
    rowsPerPageText?: string;
    onRowsPerPageChange?: (value: number) => any;
    total?: number;
    first?: boolean;
    before?: boolean;
    next?: boolean;
    last?: boolean;
    IconFirst?: TElementReference;
    IconBefore?: TElementReference;
    IconNext?: TElementReference;
    IconLast?: TElementReference;
}
```

#### TablePagination

```ts
const TablePagination: React.ForwardRefExoticComponent<Omit<ITableRow, "ref"> & React.RefAttributes<unknown>>;
```

