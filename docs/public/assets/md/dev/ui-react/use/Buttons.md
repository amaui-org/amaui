

### API

#### IconMaterialDoneSharp

```ts
const IconMaterialDoneSharp: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
```

#### IconDoneAnimated

```ts
const IconDoneAnimated: (props: any) => JSX.Element;
```

#### IButtons

```ts
interface IButtons extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    colorSelected?: TColor;
    size?: TSize;
    value?: any;
    valueDefault?: any;
    onChange?: (value: any) => any;
    select?: 'single' | 'multiple';
    unselect?: boolean;
    orientation?: 'vertical' | 'horizontal';
    noCheckIcon?: boolean;
    elevation?: boolean;
    border?: boolean;
    chip?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
}
```

#### Buttons

```ts
const Buttons: React.ForwardRefExoticComponent<Omit<IButtons, "ref"> & React.RefAttributes<unknown>>;
```

