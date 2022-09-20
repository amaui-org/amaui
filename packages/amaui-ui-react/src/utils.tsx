import { is } from '@amaui/utils';
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

// Media query value or value
export const valueBreakpoints = (item: any, value_: any, breakpoints: any, theme: any) => {
  // Simple
  if (is('simple', item) && item !== undefined) return item;

  // Item
  if (is('object', item)) {
    for (const breakpoint of theme.breakpoints.keys) {
      if (breakpoints[breakpoint] && item?.[breakpoint] !== undefined) return item[breakpoint];
    }

    if (item?.default !== undefined) return item?.default;
  }

  // Value
  if (is('object', value_)) {
    for (const breakpoint of theme.breakpoints.keys) {
      if (breakpoints[breakpoint] && value_?.[breakpoint] !== undefined) return value_[breakpoint];
    }

    if (value_?.default !== undefined) return value_?.default;
  }

  return value_;
};
