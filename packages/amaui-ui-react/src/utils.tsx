import { is, canvasFilterBrightness, canvasFilterContrast, canvasFilterSaturation, canvasFilterFade, canvasFilterInvert, canvasFilterOldPhoto, download, clamp } from '@amaui/utils';
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
export const valueBreakpoints = (item: any, value: any, breakpoints: any, theme: any) => {
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
  if (is('object', value)) {
    for (const breakpoint of theme.breakpoints.keys) {
      if (breakpoints[breakpoint] && value?.[breakpoint] !== undefined) return value[breakpoint];
    }

    if (value?.default !== undefined) return value?.default;
  }

  return value;
};

export const image = (uri: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
  const img = document.createElement('img')

  const method = () => resolve(img);

  img.onload = method;

  img.onerror = () => resolve('' as any);

  img.src = uri;
});

export const canvasBrightness = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterBrightness(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasContrast = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterContrast(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasSaturation = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterSaturation(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasFade = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterFade(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasInvert = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterInvert(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasOldPhoto = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterOldPhoto(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const print = (element: HTMLElement) => {
  const clone = window.document.cloneNode(true) as any;

  clone.body.innerHTML = '';

  const elementClone = element.cloneNode(true);

  clone.body.append(elementClone);

  const windowNew = window.open('', 'print');

  windowNew.document.head.innerHTML = clone.head.innerHTML;

  windowNew.document.body.innerHTML = clone.body.innerHTML;

  windowNew.document.close();

  windowNew.focus();

  windowNew.print();

  windowNew.close();
};

export const save = (element: HTMLElement) => {
  const clone = window.document.cloneNode(true) as any;

  clone.body.innerHTML = '';

  const elementClone = element.cloneNode(true);

  (elementClone as HTMLElement).contentEditable = 'false';

  clone.body.append(elementClone);

  download(`${window.document.title}.html`, clone.documentElement.innerHTML, 'text/html');
};

export const matches = (value: any) => {
  const method = is('element', value) && (value.matches || value['webkitMatchesSelector'] || value['mozMatchesSelector'] || value['oMatchesSelector'] || value['msMatchesSelector']);

  if (!method) return () => false;

  return method.bind(value);
};

export const angleToCoordinates = (degrees: number, centerX: number, centerY: number, radius: number) => {
  const radians = (degrees * Math.PI) / 180;

  return {
    x: centerX + (radius * Math.cos(radians)),
    y: centerY + (radius * Math.sin(radians))
  };
};

type TPoint = [number, number];

export const line = (pointA: TPoint, pointB: TPoint) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
};

export const controlPoint = (current: TPoint, previous_: TPoint, next_: TPoint, reverse = false, smoothRatio = 0.24) => {
  const previous = previous_ || current;
  const next = next_ || current;

  const opposed = line(previous, next);

  const angle = opposed.angle + (reverse ? Math.PI : 0);

  const length = opposed.length * smoothRatio;

  const x = clamp(current[0] + Math.cos(angle) * length, previous[0], next[0]);

  const y = current[1] + Math.sin(angle) * length;

  return [x, y];
};

export const minMaxBetweenNumbers = (value = 10, min = 0, max = 100) => {
  const part = (max - min) / (value - 1);

  const values = [min];

  for (let i = 0; i < (value - 2); i++) values.push(values[values.length - 1] + part);

  values.push(max);

  return values;
};
