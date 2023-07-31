

## API

#### IList

```ts
interface IList extends ISurface {
    size?: TSize;
    menu?: TElement;
    menuOpen?: boolean;
    noMaxWidth?: boolean;
    indent?: number;
    paddingHorizontal?: 'both' | 'start' | 'end' | 'none';
    paddingVertical?: 'both' | 'start' | 'end' | 'none';
    SurfaceProps?: any;
}
```

#### List

```ts
const List: React.ForwardRefExoticComponent<Omit<IList, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Link",
      "to": "/library/ui-react/use/Link"
    },
    "next": {
      "label": "UI react: ListItem",
      "to": "/library/ui-react/use/ListItem"
    }
  }
}~
