

### API

#### TTone

```ts
type TTone = 0 | 1 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100;
```

#### TColorVersion

```ts
type TColorVersion = 'light' | 'main' | 'dark';
```

#### TColorValues

```ts
type TColorValues = 'light' | 'main' | 'dark' | 0 | 1 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100;
```

#### TColorBackgroundVersion

```ts
type TColorBackgroundVersion = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
```

#### TColorTextVersion

```ts
type TColorTextVersion = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
```

#### TPaletteVersion

```ts
type TPaletteVersion = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
```

#### IColorBackground

```ts
type IColorBackground = {
    [key in TColorBackgroundVersion]?: string;
};
```

#### IColorText

```ts
type IColorText = {
    [key in TColorTextVersion]?: string;
};
```

#### IColor

```ts
type IColor = {
    [key in TColorValues]?: string;
};
```

#### IOptions

```ts
interface IOptions {
    element?: HTMLElement;
    rule?: IOptionsRule;
}
```

#### TValueColorValue

```ts
type TValueColorValue = {
    [key in TColorValues]?: string;
};
```

#### IPaletteColor

```ts
type IPaletteColor = {
    primary?: TValueColorValue;
    secondary?: TValueColorValue;
    tertiary?: TValueColorValue;
    quaternary?: TValueColorValue;
    info?: TValueColorValue;
    success?: TValueColorValue;
    warning?: TValueColorValue;
    error?: TValueColorValue;
    neutral?: TValueColorValue;
    [p: string]: string | TValueColorValue;
};
```

#### IPaletteBackground

```ts
interface IPaletteBackground {
    default?: IColorBackground;
    primary?: IColorBackground;
    secondary?: IColorBackground;
    tertiary?: IColorBackground;
    quaternary?: IColorBackground;
    info?: IColorBackground;
    success?: IColorBackground;
    warning?: IColorBackground;
    error?: IColorBackground;
    light?: IColorBackground;
    dark?: IColorBackground;
    neutral?: IColorBackground;
    [p: string]: string | IColorBackground;
}
```

#### IPaletteText

```ts
interface IPaletteText {
    default?: IColorText;
    primary?: IColorText;
    secondary?: IColorText;
    tertiary?: IColorText;
    quaternary?: IColorText;
    info?: IColorText;
    success?: IColorText;
    warning?: IColorText;
    error?: IColorText;
    neutral?: IColorText;
    light?: IColorText;
    dark?: IColorText;
    divider?: string;
    active?: string;
    hover?: string;
    selected?: string;
    focus?: string;
    disabled?: string;
    [p: string]: string | any;
}
```

#### TVisualContrastItem

```ts
type TVisualContrastItem = 'default' | 'low' | 'regular' | 'high';
```

#### TVisualContrastItemItems

```ts
type TVisualContrastItemItems = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'active' | 'hover' | 'selected' | 'focus' | 'press' | 'drag' | 'disabled' | 'divider';
```

#### TVisualContrast

```ts
type TVisualContrast = {
    [p in TVisualContrastItem]?: {
        opacity?: {
            [i in TVisualContrastItemItems]?: number;
        };
```

#### TPreferenceItems

```ts
type TPreferenceItems = 'visual_contrast' | 'background' | 'text' | 'shadow';
```

#### TPreference

```ts
type TPreference = {
    [key in TPreferenceItems]?: {
        default?: TPaletteVersion | TVisualContrastItem;
    };
```

#### TAccessibility

```ts
type TAccessibility = 'regular' | 'colorblind' | 'tritanopia';
```

#### IPalette

```ts
interface IPalette {
    light?: boolean;
    accessibility?: TAccessibility;
    visual_contrast?: TVisualContrast;
    image?: string;
    color?: IPaletteColor;
    text?: IPaletteText;
    background?: IPaletteBackground;
}
```

#### TRadiusKey

```ts
type TRadiusKey = 'xxs' | 'xs' | 'sm' | 'rg' | 'md' | 'lg' | 'xl' | 'xxl';
```

#### IRadius

```ts
interface IRadius {
    values?: {
        xxs?: number;
        xs?: number;
        sm?: number;
        rg?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
        round?: string;
        [p: string]: string | number;
    };
```

#### IShape

```ts
interface IShape {
    radius?: IRadius;
}
```

#### TBreakpoint

```ts
type TBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

#### IBreakpoints

```ts
interface IBreakpoints {
    values?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        [p: string]: number;
    };
```

#### TSpaceKey

```ts
type TSpaceKey = 'xxs' | 'xs' | 'sm' | 'rg' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'round';
```

#### ISpace

```ts
interface ISpace {
    values?: {
        xxs?: number;
        xs?: number;
        sm?: number;
        rg?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
        xxxl?: number;
        [p: string]: string | number;
    };
```

#### TShadowValues

```ts
type TShadowValues = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;
```

#### IShadow

```ts
type IShadow = {
    [key in TShadowValues]?: string;
};
```

#### IShadows

```ts
interface IShadows {
    values?: {
        default?: IShadow;
        primary?: IShadow;
        secondary?: IShadow;
        tertiary?: IShadow;
        quaternary?: IShadow;
        info?: IShadow;
        success?: IShadow;
        warning?: IShadow;
        error?: IShadow;
        neutral?: IShadow;
        [p: string]: any;
    };
```

#### TTransitionsTimingFunctionProperties

```ts
type TTransitionsTimingFunctionProperties = 'standard' | 'emphasized' | 'decelerated' | 'accelerated';
```

#### ITransitionsTimingFunction

```ts
interface ITransitionsTimingFunction {
    standard?: string;
    emphasized?: string;
    decelerated?: string;
    accelerated?: string;
    [p: string]: string;
}
```

#### TTransitionsDurationProperties

```ts
type TTransitionsDurationProperties = 'xxs' | 'xs' | 'sm' | 'rg' | 'enter' | 'leave' | 'complex';
```

#### ITransitionsDuration

```ts
interface ITransitionsDuration {
    xxs?: number;
    xs?: number;
    sm?: number;
    rg?: number;
    enter?: number;
    leave?: number;
    complex?: number;
    [p: string]: number;
}
```

#### ITransitions

```ts
interface ITransitions {
    timing_function?: ITransitionsTimingFunction;
    duration?: ITransitionsDuration;
}
```

#### IzIndex

```ts
interface IzIndex {
    tooltip?: number;
    modal?: number;
    menu_modal?: number;
    menu?: number;
    button_float?: number;
    app_bar?: number;
    main?: number;
    text?: number;
    [p: string]: number;
}
```

#### ITypographyVersion

```ts
interface ITypographyVersion {
    fontSize?: string | number;
    fontFamily?: string;
    lineHeight?: string | number;
    letterSpacing?: string | number;
    fontWeight?: string | number;
}
```

#### TTypographyItem

```ts
type TTypographyItem = 'd1' | 'd2' | 'd3' | 'h1' | 'h2' | 'h3' | 't1' | 't2' | 't3' | 'l1' | 'l2' | 'l3' | 'b1' | 'b2' | 'b3' | 'm1' | 'm2' | 'm3';
```

#### ITypography

```ts
interface ITypography {
    unit?: string;
    font_size?: {
        html?: string | number;
    };
```

#### TMode

```ts
type TMode = 'regular' | 'read' | 'print';
```

#### IUi

```ts
interface IUi {
    className?: {
        static?: boolean;
    };
```

#### IAmauiTheme

```ts
interface IAmauiTheme {
    preference?: TPreference;
    mode?: TMode;
    palette?: IPalette;
    shape?: IShape;
    breakpoints?: IBreakpoints;
    space?: ISpace;
    shadows?: IShadows;
    typography?: ITypography;
    transitions?: ITransitions;
    z_index?: IzIndex;
    ui?: IUi;
    [p: string]: any;
}
```

#### AmauiTheme

```ts
class AmauiTheme {
    options: IOptions;
    id?: string;
    subscriptions: {
        update: AmauiSubscription;
    };
```

