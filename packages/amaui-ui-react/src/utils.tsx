import { AmauiTheme } from '@amaui/style-react';

export function reflow(element: HTMLElement) {
  element?.offsetHeight;
}

export const staticClassName = (name: string, theme: AmauiTheme) => {
  return theme?.ui?.elements?.[`Amaui${name}`]?.className?.static !== undefined ? theme?.ui?.elements?.[`Amaui${name}`]?.className?.static : theme?.ui?.className.static;
};

export const iconSizeToFontSize = (value: string | number) => {
  let fontSize: any = '24px';

  if (value === 'very small') fontSize = '12px';
  else if (value === 'small') fontSize = '18px';
  else if (value === 'regular') fontSize = '24px';
  else if (value === 'medium') fontSize = '30px';
  else if (value === 'large') fontSize = '36px';
  else if (value === 'very large') fontSize = '42px';
  else if (value !== undefined) fontSize = value;

  return fontSize;
};

export function percentageWithinRange(value: number, min: number, max: number, minAllowed: number = 0, maxAllowed: number = 100) {
  return (maxAllowed - minAllowed) * (value - min) / (max - min) + minAllowed;
}

export function valueWithinRangePercentage(value: number, min: number, max: number, minAllowed = 0, maxAllowed = 100) {
  return min + ((value * (max - min + minAllowed)) / (maxAllowed - minAllowed));
}
