

## API

#### ICountdown

```ts
interface ICountdown extends Omit<ISurface, 'version'> {
    version?: 'linear' | 'round';
    renderValue?: (value: string) => TElement;
    icon?: boolean;
    onStart?: (event: React.MouseEvent<any>) => any;
    onPause?: (event: React.MouseEvent<any>) => any;
    onStop?: (event: React.MouseEvent<any>) => any;
    onResume?: (event: React.MouseEvent<any>) => any;
    Icon?: TElementReference;
    IconStart?: TElementReference;
    IconPause?: TElementReference;
    IconStop?: TElementReference;
    TreeProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    RoundProgressProps?: TPropsAny;
    NumericTextFieldProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    LinearProgressProps?: TPropsAny;
    IconProps?: TPropsAny;
}
```

#### Countdown

```ts
const Countdown: React.ForwardRefExoticComponent<Omit<ICountdown, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Container",
      "to": "/library/ui-react/use/Container"
    },
    "next": {
      "label": "UI react: DatePicker",
      "to": "/library/ui-react/use/DatePicker"
    }
  }
}~
