

### API

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

