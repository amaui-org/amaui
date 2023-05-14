

## API

#### IImageListItemBox

```ts
interface IImageListItemBox extends IListItem {
    position?: 'top' | 'bottom';
    backgroundOpacity?: number;
}
```

#### ImageListItemBox

```ts
const ImageListItemBox: React.ForwardRefExoticComponent<Omit<IImageListItemBox, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ImageListItem",
      "to": "/dev/ui-react/use/ImageListItem"
    },
    "next": {
      "label": "UI react: Interaction",
      "to": "/dev/ui-react/use/Interaction"
    }
  }
}~
