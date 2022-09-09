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
  const array: any[] = [1];

  // start
  let value_ = 2;

  while (value_ < 1 + boundary + 1 && value_ < value - middle) array.push(value_++);

  // start dots
  if ((value - middle) - (1 + boundary) > 1) {
    if ((value - middle) - (1 + boundary) === 2) array.push(1 + boundary + 1);
    else array.push('...');
  }

  // middle
  value_ = value - middle < 2 ? 2 : value - middle;

  while (value_ < value + middle + 1 && value_ < total) array.push(value_++);

  // end dots
  if ((total - boundary) - (value + middle) > 1) {
    if ((total - boundary) - (value + middle) === 2) array.push(value + middle + 1);
    else array.push('...');
  }

  // end
  value_ = value - boundary;

  while (value_ <= total) {
    if (value_ > value + middle && value_ >= total - boundary && value_ < total) array.push(value_);

    value_++;
  }

  array.push(total);

  return array;
};
