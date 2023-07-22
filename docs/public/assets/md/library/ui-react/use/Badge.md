

## API

#### IBadge

```ts
interface IBadge extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: number;
    max?: number;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
    indicator?: boolean;
}
```

#### Badge

```ts
const Badge: React.ForwardRefExoticComponent<Omit<IBadge, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Backdrop",
      "to": "/dev/ui-react/use/Backdrop"
    },
    "next": {
      "label": "UI react: Banner",
      "to": "/dev/ui-react/use/Banner"
    }
  }
}~
