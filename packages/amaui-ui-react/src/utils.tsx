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

export function percentageWithinRange(value: number, min: number, max: number, minAllowed: number = 0, maxAllowed: number = 100) {
  return (maxAllowed - minAllowed) * (value - min) / (max - min) + minAllowed;
}

export function valueWithinRangePercentage(value: number, min: number, max: number, minAllowed = 0, maxAllowed = 100) {
  return min + ((value * (max - min + minAllowed)) / (maxAllowed - minAllowed));
}

export function pagination(value = 1, total = 10, boundary = 1, middle = 1) {
  const array = [];

  const min = (boundary * 2) + (1 + (middle * 2)) + 2;

  // start
  let value_ = 1;
  let dots = 'start';
  let dotsIndex = 0;

  while (value_ < boundary + 1 && value_ < value - middle) array.push(value_++);

  // start dots
  if ((value - middle) - (boundary) > 1) {
    if ((value - middle) - (boundary) === 2) array.push(boundary + 1);
    else {
      array.push('...');

      dotsIndex = array.length - 1;
    }
  }

  // middle
  value_ = value - middle < 1 ? 1 : value - middle;

  while (value_ < value + middle + 1 && value_ < total) array.push(value_++);

  // end dots
  if ((total - boundary + 1) - (value + middle) > 1) {
    if ((total - boundary + 1) - (value + middle) === 2) array.push(value + middle + 1);
    else {
      array.push('...');

      dots = 'end';

      dotsIndex = array.length - 1;
    };
  }

  // end
  value_ = value + middle + 1 > total ? total : value + middle + 1;

  while (value_ < total + 1) {
    if (value_ >= total - boundary + 1 && value_ < total + 1) array.push(value_);

    value_++;
  }

  // Update values up to min value
  if (array.length < min) {
    let toAdd = min - array.length;

    if (dots === 'start') {
      let i = dotsIndex + 1;

      let valueStart = array[dotsIndex + 1] - toAdd - 1;

      while (toAdd > 0) {
        array.splice(i++, 0, ++valueStart);

        toAdd--;
      }
    }

    if (dots === 'end') {
      let i = dotsIndex;

      let valueStart = array[dotsIndex - 1];

      while (toAdd > 0) {
        array.splice(i++, 0, ++valueStart);

        toAdd--;
      }
    }
  }

  return array;
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
