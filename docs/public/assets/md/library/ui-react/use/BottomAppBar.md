

## API

#### IBottomAppBar

```ts
interface IBottomAppBar extends ISurface {
    size?: TSize;
    main?: TElement;
    fixed?: boolean;
    noTransition?: boolean;
}
```

#### BottomAppBar

```ts
const BottomAppBar: React.ForwardRefExoticComponent<Omit<IBottomAppBar, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Banner",
      "to": "/library/ui-react/use/Banner"
    },
    "next": {
      "label": "UI react: BottomSheet",
      "to": "/library/ui-react/use/BottomSheet"
    }
  }
}~
