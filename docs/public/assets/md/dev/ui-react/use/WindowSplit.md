

### API

#### IWindowSplit

```ts
interface IWindowSplit extends ILine {
    tonal?: TTonal;
    color?: TColor;
    valueDefault?: number;
    value?: number;
    onChange?: (value: number) => any;
    padding?: number;
    paddingStart?: number;
    paddingEnd?: number;
    iconButton?: TElement;
    orientation?: 'vertical' | 'horizontal';
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    iconButtonComponent?: TElement;
    iconOrientationHorizontal?: TElement;
    iconOrientationVertical?: TElement;
    IconButtonProps?: TPropsAny;
    DividerProps?: TPropsAny;
}
```

#### WindowSplit

```ts
const WindowSplit: React.ForwardRefExoticComponent<Omit<IWindowSplit, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useWidgets",
      "to": "/dev/ui-react/use/useWidgets"
    },
    "next": {
      "label": "UI react: Zoom",
      "to": "/dev/ui-react/use/Zoom"
    }
  }
}~
