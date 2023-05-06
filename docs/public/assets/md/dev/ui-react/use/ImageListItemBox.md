

### API

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

