

## API

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: TablePagination",
      "to": "/library/ui-react/use/TablePagination"
    },
    "next": {
      "label": "UI react: Tabs",
      "to": "/library/ui-react/use/Tabs"
    }
  }
}~
