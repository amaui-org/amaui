

### API

#### IImageListItem

```ts
interface IImageListItem extends ILine {
    rows?: number | Record<TValueBreakpoints, number>;
    columns?: number | Record<TValueBreakpoints, number>;
    version?: 'standard' | 'vowen' | 'masonry';
}
```

#### ImageListItem

```ts
const ImageListItem: React.ForwardRefExoticComponent<Omit<IImageListItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ImageList",
      "to": "/dev/ui-react/use/ImageList"
    },
    "next": {
      "label": "UI react: ImageListItemBox",
      "to": "/dev/ui-react/use/ImageListItemBox"
    }
  }
}~
