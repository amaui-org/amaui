

## API

#### IBanner

```ts
interface IBanner extends IBaseElement {
    size?: TSize;
    maxWidth?: string | number;
    actions?: TElement;
}
```

#### Banner

```ts
const Banner: React.ForwardRefExoticComponent<Omit<IBanner, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Badge",
      "to": "/library/ui-react/use/Badge"
    },
    "next": {
      "label": "UI react: BottomAppBar",
      "to": "/library/ui-react/use/BottomAppBar"
    }
  }
}~
