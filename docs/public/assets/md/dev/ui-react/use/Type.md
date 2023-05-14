

## API

#### IType

```ts
interface IType extends IBaseElement {
    color?: TColor;
    priority?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    version?: TTypographyItem;
    size?: string | number;
    disabled?: boolean;
}
```

#### Type

```ts
const Type: React.ForwardRefExoticComponent<Omit<IType, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Tree",
      "to": "/dev/ui-react/use/Tree"
    },
    "next": {
      "label": "UI react: ViewSplit",
      "to": "/dev/ui-react/use/ViewSplit"
    }
  }
}~
