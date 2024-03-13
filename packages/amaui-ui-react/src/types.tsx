import { TBreakpoint, TPaletteVersion } from '@amaui/style-react';
import { IMedia } from '@amaui/api-utils';

export type IPoint = [number, number];

export type ITonal = true | false | 'secondary';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSL = `hsl(${number}, ${number}, ${number})`;
type HSLA = `hsla(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HSL | HSLA | HEX;

export type IColor = 'default' | 'themed' | 'inverted' | 'inherit' | TPaletteVersion | Color;

export type IVersion = 'filled' | 'outlined' | 'outlined-without-background' | 'text';

export type ISize = 'small' | 'regular' | 'large';

export type ISizeAny = ISize | number;

export type IElevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export type IElementReference = string | React.FC<any> | (React.ForwardRefExoticComponent<any>);

export type IElement = React.ReactNode | React.ReactNode[] | React.ReactElement<any, string | React.JSXElementConstructor<any>>;

export type IElementAny = IElement | string | number | boolean | null | undefined;

export type IHTMLElement = Element | HTMLElement;

export type IPropsAny = Record<string, any>;

export type IStyle = React.CSSProperties | undefined;

export type IChildren = React.ReactNode | React.ReactNode[];

export type IRef = React.MutableRefObject<any>;

export interface IBaseElement {
  Component?: any;

  className?: string;
  style?: IStyle;

  children?: IChildren;

  [property: string]: any;
}

export type IMethodTransition = (element?: IHTMLElement) => any;

export type IValueBreakpoints = TBreakpoint | 'default';

export interface IMediaObject extends IMedia {
  url: string;
  urlSmall?: string;

  // alias
  src?: string;
  srcSmall?: string;
}
