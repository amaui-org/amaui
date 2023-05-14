

## API

#### IDivider

```ts
interface IDivider extends ISurface {
    inset?: boolean;
    middle?: boolean;
    padding?: number;
    opacity?: number;
    alignment?: 'start' | 'center' | 'end';
    orientation?: 'vertical' | 'horizontal';
    flex?: boolean;
}
```

#### Divider

```ts
const Divider: React.ForwardRefExoticComponent<Omit<IDivider, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: DateTimeRangePicker",
      "to": "/dev/ui-react/use/DateTimeRangePicker"
    },
    "next": {
      "label": "UI react: DonutChart",
      "to": "/dev/ui-react/use/DonutChart"
    }
  }
}~
