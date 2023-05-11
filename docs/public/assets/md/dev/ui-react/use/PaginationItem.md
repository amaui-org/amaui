

### API

#### IPaginationItem

```ts
interface IPaginationItem extends IButton {
    TypeProps?: TPropsAny;
}
```

#### PaginationItem

```ts
const PaginationItem: React.ForwardRefExoticComponent<Omit<IPaginationItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Pagination",
      "to": "/dev/ui-react/use/Pagination"
    },
    "next": {
      "label": "UI react: Parallax",
      "to": "/dev/ui-react/use/Parallax"
    }
  }
}~
