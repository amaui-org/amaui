

## API

#### ITabs

```ts
interface ITabs extends Omit<ISurface, 'version'> {
    version?: 'primary' | 'secondary';
    value?: number;
    valueDefault?: number;
    onChange?: (value: number) => any;
    activateOnFocus?: boolean;
    align?: TLineAlign;
    justify?: TLineJustify;
    orientation?: 'vertical' | 'horizontal';
    initialLineUpdateTimeout?: number;
    arrows?: boolean;
    arrowsMobile?: boolean;
    fixed?: boolean;
    IconStart?: TElementReference;
    IconEnd?: TElementReference;
    IconTop?: TElementReference;
    IconBottom?: TElementReference;
    SurfaceProps?: TPropsAny;
}
```

#### Tabs

```ts
const Tabs: React.ForwardRefExoticComponent<Omit<ITabs, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: TableRow",
      "to": "/library/ui-react/use/TableRow"
    },
    "next": {
      "label": "UI react: TextField",
      "to": "/library/ui-react/use/TextField"
    }
  }
}~
