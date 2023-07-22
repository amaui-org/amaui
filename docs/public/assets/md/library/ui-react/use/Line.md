

## API

#### TLineAlign

```ts
type TLineAlign = 'inherit' | 'initial' | 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
```

#### TLineJustify

```ts
type TLineJustify = 'inherit' | 'initial' | 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
```

#### TLineDirection

```ts
type TLineDirection = 'inherit' | 'row' | 'row-reverse' | 'column' | 'column-reverse';
```

#### TLineWrap

```ts
type TLineWrap = 'inherit' | 'wrap' | 'nowrap' | 'wrap-reverse';
```

#### TLineDisplay

```ts
type TLineDisplay = 'inherit' | 'flex' | 'inline-flex';
```

#### ILine

```ts
interface ILine extends IBaseElement {
    display?: TLineDisplay | Record<TValueBreakpoints, TLineDisplay>;
    direction?: TLineDirection | Record<TValueBreakpoints, TLineDirection>;
    align?: TLineAlign | Record<TValueBreakpoints, TLineAlign>;
    justify?: TLineJustify | Record<TValueBreakpoints, TLineJustify>;
    wrap?: TLineWrap | Record<TValueBreakpoints, TLineWrap>;
    gap?: number | Record<TValueBreakpoints, number>;
    rowGap?: number | Record<TValueBreakpoints, number>;
    columnGap?: number | Record<TValueBreakpoints, number>;
    divider?: boolean | Record<TValueBreakpoints, boolean>;
    DividerProps?: TPropsAny;
}
```

#### Line

```ts
const Line: React.ForwardRefExoticComponent<Omit<ILine, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Label",
      "to": "/dev/ui-react/use/Label"
    },
    "next": {
      "label": "UI react: LineChart",
      "to": "/dev/ui-react/use/LineChart"
    }
  }
}~
