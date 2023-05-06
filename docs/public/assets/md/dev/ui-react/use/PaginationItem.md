

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

