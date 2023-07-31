
# AmauiTheme

Used for creating, updating, maintaining a theme object.

### Use

Value provided will be merged with defaults values using `@amaui/utils`'s `merge` method.

In the API part you can find more information of all available information in the `AmauiTheme` instance.

```ts
const amauiTheme = new AmauiTheme({
  palette: {
    light: true,
    color: {
      primary: {
        main: '#ff0'
      }
    },
    accessibility: 'colorblind'
  },
  typography: {
    font_family: {
      primary: FONT_FAMILY.primary,
      secondary: FONT_FAMILY.secondary,
      tertiary: FONT_FAMILY.tertiary
    },

    values: {
      d1: { fontFamily: FONT_FAMILY.primary },

      d2: { fontFamily: FONT_FAMILY.primary },

      d3: { fontFamily: FONT_FAMILY.primary },

      h1: { fontFamily: FONT_FAMILY.primary },

      h2: { fontFamily: FONT_FAMILY.primary },

      h3: { fontFamily: FONT_FAMILY.primary },

      t1: { fontFamily: FONT_FAMILY.primary },

      t2: { fontFamily: FONT_FAMILY.primary },

      t3: { fontFamily: FONT_FAMILY.primary },

      l1: {
        fontFamily: FONT_FAMILY.secondary,
        fontWeight: 700
      },

      l2: {
        fontFamily: FONT_FAMILY.secondary,
        fontWeight: 700
      },

      l3: {
        fontFamily: FONT_FAMILY.secondary,
        fontWeight: 700
      },

      b1: { fontFamily: FONT_FAMILY.secondary },

      b2: { fontFamily: FONT_FAMILY.secondary },

      b3: { fontFamily: FONT_FAMILY.secondary },

      m1: { fontFamily: FONT_FAMILY.tertiary },

      m2: { fontFamily: FONT_FAMILY.tertiary },

      m3: { fontFamily: FONT_FAMILY.tertiary }
    }
  }
});
```

### Update

Updates the current theme object with new values.

New values will be merged with previous, and override only values that have changed from previous values.

```ts
const amauiTheme = new AmauiTheme();

amauiTheme.update(value);
```

### Image

Usefull method that creates theme palette for primary, secondary, tertiary & quaternary colors, from the provided image's `src` value, ie. url of the image.

```ts
const amauiTheme = new AmauiTheme();

await amauiTheme.image(url);
```

### Methods

Methods property contains various very usefull methods you can use.

You can use the API part to get more information about it.

### Util methods

#### attributes

Defines array of attributes that will be added to an element, on which `AmauiTheme` instance will be attached to as a value.

#### Find `AmauiTheme` instance from an element

All these methods will try to find an element that has `AmauiTheme` instance attached to it, and return it.

```ts
AmauiTheme.get(element, 0);

AmauiTheme.first(element);

AmauiTheme.last(element);

AmauiTheme.nearest(element);

AmauiTheme.furthest(element);

AmauiTheme.all(element);

// AmauiTheme {}
// AmauiTheme {}
// AmauiTheme {}
// AmauiTheme {}
// AmauiTheme {}
// [AmauiTheme {}, AmauiTheme {}, AmauiTheme {}]
```

### Other

#### subscriptions

Subscriptions that emit for various use cases.

- update
```ts
const amauiTheme = new AmauiTheme();

// Emits on every theme update
amauiTheme.subscriptions.update.subscribe(method);
```

## API

#### IMethodsPaletteImageOptions

```ts
interface IMethodsPaletteImageOptions {
    amount?: number;
    size?: number;
    allowCrossOrigin?: boolean;
}
```

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
        contrast_threshold?: number;
    };
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
    keys?: string[];
    unit?: number;
}
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
    media?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        [p: string]: string;
    };
    keys?: string[];
    unit?: string;
}
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
    keys?: string[];
    unit?: number;
}
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
    opacities?: Array<number>;
}
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
    font_family?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
    };
    values?: {
        d1?: ITypographyVersion;
        d2?: ITypographyVersion;
        d3?: ITypographyVersion;
        h1?: ITypographyVersion;
        h2?: ITypographyVersion;
        h3?: ITypographyVersion;
        t1?: ITypographyVersion;
        t2?: ITypographyVersion;
        t3?: ITypographyVersion;
        l1?: ITypographyVersion;
        l2?: ITypographyVersion;
        l3?: ITypographyVersion;
        b1?: ITypographyVersion;
        b2?: ITypographyVersion;
        b3?: ITypographyVersion;
        m1?: ITypographyVersion;
        m2?: ITypographyVersion;
        m3?: ITypographyVersion;
        [p: string]: any;
    };
}
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
    elements?: {
        [p: string]: {
            className?: {
                static?: boolean;
            };
            style?: {
                add?: TValue;
                override?: TValue;
            };
            props?: {
                default?: Record<any, any>;
            };
        };
    };
}
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
    element?: HTMLElement;
    direction: TDirection;
    preference: TPreference;
    mode: TMode;
    palette: IPalette;
    shape: IShape;
    breakpoints: IBreakpoints;
    space: ISpace;
    shadows: IShadows;
    typography: ITypography;
    transitions: ITransitions;
    z_index: IzIndex;
    methods: {
        palette: {
            image: (image: string, options?: IMethodsPaletteImageOptions) => Promise<string[]>;
            color: {
                value: (version: TPaletteVersion | 'default', tone: TTone, light?: boolean, palette?: IColor) => any;
                text: (background: string, max?: boolean, prefer?: 'light' | 'dark', maxOpacity?: string) => any;
                alpha: (value: string, opacity: number) => string;
                emphasize: (value: string, coefficient?: number) => string;
                lighten: (value: string, coefficient: number) => string;
                darken: (value: string, coefficient: number) => string;
                getLuminance: (value: string) => number;
                getContrastRatio: (valueA: string, valueB: string) => number;
                colorToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
                rgbToRgba: (value: string, opacity?: number, array?: boolean) => string | number[];
                rgbToHsl: (value: string, opacity?: number, array?: boolean) => string | number[];
                rgbToHex: (value: string, opacity_?: number, array?: boolean) => string | number[];
                hslToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
                hexToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
            };
        };
        color: (value: string) => IColor;
        shadow: (value?: string, opacities?: Array<number>) => IShadow;
        space: {
            value: (value: TSpaceKey | number, unit?: string, add?: number) => any;
        };
        shape: {
            radius: {
                value: (value: TRadiusKey | number, unit?: string, add?: number) => string | number;
            };
        };
        breakpoints: {
            up: (value: number, media?: string) => string;
            down: (value: number, media?: string) => string;
            between: (value1: number, value2: number, media?: string) => string;
            only: (value: number) => string;
            not: (value: TBreakpoint, media?: string) => string;
        };
        transitions: {
            make: (properties: string | Array<string>, options?: {
                duration?: TTransitionsDurationProperties | number;
                timing_function?: TTransitionsTimingFunctionProperties;
                delay?: TTransitionsDurationProperties | number;
            }) => any;
        };
    };
    ui?: IUi;
    [p: string]: any;
    constructor(value?: IAmauiTheme, options?: IOptions);
    init(value_?: IAmauiTheme | AmauiTheme): void;
    image(value_: string, other?: any, options?: IMethodsPaletteImageOptions): Promise<void>;
    update(value: IAmauiTheme): void;
    static get amaui_theme(): AmauiTheme;
    static get make(): {
        color: (value: string) => IColor;
        shadow: (value: string, opacities?: Array<number>) => IShadow;
    };
    static attributes: string[];
    static get(value: HTMLElement, index?: number): AmauiTheme;
    static first(value: HTMLElement): AmauiTheme;
    static last(value: HTMLElement): AmauiTheme;
    static nearest(value: HTMLElement): AmauiTheme;
    static furthest(value: HTMLElement): AmauiTheme;
    static all(value: HTMLElement): Array<AmauiTheme>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyleSheetManager",
      "to": "/library/style/use/AmauiStyleSheetManager"
    },
    "next": {
      "label": "Style: classNames",
      "to": "/library/style/use/classNames"
    }
  }
}~
