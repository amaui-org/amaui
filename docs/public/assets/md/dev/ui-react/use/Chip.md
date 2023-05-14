

## API

#### IChip

```ts
interface IChip extends IButton {
    input?: boolean;
    filter?: boolean;
    onClick?: (event: React.MouseEvent<any>) => any;
    onRemove?: (event: React.MouseEvent<any>) => any;
    onSelected?: () => any;
    onUnselected?: () => any;
}
```

#### Chip

```ts
const Chip: React.ForwardRefExoticComponent<Omit<IChip, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Checkbox",
      "to": "/dev/ui-react/use/Checkbox"
    },
    "next": {
      "label": "UI react: Chips",
      "to": "/dev/ui-react/use/Chips"
    }
  }
}~
