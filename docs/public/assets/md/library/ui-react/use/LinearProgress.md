

## API

#### ILinearProress

```ts
interface ILinearProress extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: number | {
        progress?: number;
        buffer?: number;
    };
    version?: 'determinate' | 'indeterminate';
    buffer?: boolean;
    reverse?: boolean;
}
```

#### LinearProgress

```ts
const LinearProgress: React.ForwardRefExoticComponent<Omit<ILinearProress, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: LinearMeter",
      "to": "/dev/ui-react/use/LinearMeter"
    },
    "next": {
      "label": "UI react: Link",
      "to": "/dev/ui-react/use/Link"
    }
  }
}~
