

## API

#### IGrid

```ts
interface IGrid extends ILine {
    auto?: boolean;
    line?: boolean;
    columns?: number | Record<TValueBreakpoints, number>;
    offsets?: Record<TValueBreakpoints, number>;
    values?: Record<TValueBreakpoints, number>;
    RootProps?: TPropsAny;
}
```

#### Grid

```ts
const Grid: React.ForwardRefExoticComponent<Omit<IGrid, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Focus",
      "to": "/library/ui-react/use/Focus"
    },
    "next": {
      "label": "UI react: Grow",
      "to": "/library/ui-react/use/Grow"
    }
  }
}~
