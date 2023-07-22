

## API

#### IExpand

```ts
interface IExpand extends ITransition {
    expandSize?: number;
    orientation?: 'veritcal' | 'horizontal';
    WrapperProps?: TPropsAny;
}
```

#### Expand

```ts
const Expand: React.ForwardRefExoticComponent<Omit<IExpand, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: DropZone",
      "to": "/dev/ui-react/use/DropZone"
    },
    "next": {
      "label": "UI react: Fab",
      "to": "/dev/ui-react/use/Fab"
    }
  }
}~
