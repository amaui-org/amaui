

## API

#### IMasonry

```ts
interface IMasonry extends Omit<ILine, 'gap'> {
    gap?: number | Record<TValueBreakpoints, number>;
    columns?: number | Record<TValueBreakpoints, number>;
}
```

#### Masonry

```ts
const Masonry: React.ForwardRefExoticComponent<Omit<IMasonry, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Markdown",
      "to": "/library/ui-react/use/Markdown"
    },
    "next": {
      "label": "UI react: Menu",
      "to": "/library/ui-react/use/Menu"
    }
  }
}~
