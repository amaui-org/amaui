

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
      "to": "/library/ui-react/use/DropZone"
    },
    "next": {
      "label": "UI react: Fab",
      "to": "/library/ui-react/use/Fab"
    }
  }
}~
