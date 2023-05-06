

### API

#### reflow

```ts
function reflow(element: HTMLElement): void;
```

#### staticClassName

```ts
const staticClassName: (name: string, theme: any) => any;
```

#### iconSizeToFontSize

```ts
const iconSizeToFontSize: (value: string | number) => any;
```

#### valueBreakpoints

```ts
const valueBreakpoints: (item: any, value: any, breakpoints: any, theme: any) => any;
```

#### image

```ts
const image: (uri: string) => Promise<HTMLImageElement>;
```

#### canvasBrightness

```ts
const canvasBrightness: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### canvasContrast

```ts
const canvasContrast: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### canvasSaturation

```ts
const canvasSaturation: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### canvasFade

```ts
const canvasFade: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### canvasInvert

```ts
const canvasInvert: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### canvasOldPhoto

```ts
const canvasOldPhoto: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
```

#### print

```ts
const print: (element: HTMLElement) => void;
```

#### save

```ts
const save: (element: HTMLElement) => void;
```

#### matches

```ts
const matches: (value: any) => any;
```

#### angleToCoordinates

```ts
const angleToCoordinates: (degrees: number, centerX: number, centerY: number, radius: number) => {
    x: number;
    y: number;
};
```

#### TPoint

```ts
type TPoint = [number, number];
```

#### line

```ts
const line: (pointA: TPoint, pointB: TPoint) => {
    length: number;
    angle: number;
};
```

#### controlPoint

```ts
const controlPoint: (current: TPoint, previous_: TPoint, next_: TPoint, reverse?: boolean, smoothRatio?: number) => number[];
```

#### minMaxBetweenNumbers

```ts
const minMaxBetweenNumbers: (value?: number, min?: number, max?: number) => number[];
```

#### TTonal

```ts
type TTonal = true | false | 'secondary';
```

#### RGB

```ts
type RGB = `rgb(${number}, ${number}, ${number})`;
```

#### RGBA

```ts
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
```

#### HSL

```ts
type HSL = `hsl(${number}, ${number}, ${number})`;
```

#### HSLA

```ts
type HSLA = `hsla(${number}, ${number}, ${number}, ${number})`;
```

#### HEX

```ts
type HEX = `#${string}`;
```

#### Color

```ts
type Color = RGB | RGBA | HSL | HSLA | HEX;
```

#### TColor

```ts
type TColor = 'default' | 'themed' | 'inverted' | 'inherit' | TPaletteVersion | Color;
```

#### TVersion

```ts
type TVersion = 'filled' | 'outlined' | 'outlined-without-background' | 'text';
```

#### TSize

```ts
type TSize = 'small' | 'regular' | 'large';
```

#### TSizeAny

```ts
type TSizeAny = TSize | number;
```

#### TElevation

```ts
type TElevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;
```

#### TElementReference

```ts
type TElementReference = React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
```

#### TElement

```ts
type TElement = React.ReactNode | React.ReactNode[] | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
```

#### TElementAny

```ts
type TElementAny = TElement | string | number | boolean | null | undefined;
```

#### THTMLElement

```ts
type THTMLElement = Element | HTMLElement;
```

#### TPropsAny

```ts
type TPropsAny = Record<string, any>;
```

#### TStyle

```ts
type TStyle = React.CSSProperties | undefined;
```

#### TChildren

```ts
type TChildren = React.ReactNode | React.ReactNode[];
```

#### TRef

```ts
type TRef = React.MutableRefObject<any>;
```

#### IBaseElement

```ts
interface IBaseElement {
    Component?: TElementReference;
    className?: string;
    style?: TStyle;
    children?: TChildren;
    [property: string]: any;
}
```

#### TMethodTransition

```ts
type TMethodTransition = (element?: THTMLElement) => any;
```

#### TValueBreakpoints

```ts
type TValueBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';
```

#### sanitize

```ts
const sanitize: (value: string) => string;
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
