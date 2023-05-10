

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


{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}