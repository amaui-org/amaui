

## API

#### IMove

```ts
interface IMove extends IBaseElement {
    version?: 'regular' | 'fixed';
    manage?: boolean;
    manageLevel?: number;
    onMouseDown?: (event: React.MouseEvent<any>) => any;
    onTouchStart?: (event: React.TouchEvent<any>) => any;
}
```

#### Move

```ts
const Move: React.ForwardRefExoticComponent<Omit<IMove, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ModalTitle",
      "to": "/dev/ui-react/use/ModalTitle"
    },
    "next": {
      "label": "UI react: NavigationBar",
      "to": "/dev/ui-react/use/NavigationBar"
    }
  }
}~
