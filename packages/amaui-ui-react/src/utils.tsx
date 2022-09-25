import { is, clamp } from '@amaui/utils';
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

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = clamp(data[i + 0] + value, 0, 255);
    data[i + 1] = clamp(data[i + 1] + value, 0, 255);
    data[i + 2] = clamp(data[i + 2] + value, 0, 255);
  }

  context.putImageData(imageData, 0, 0);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasContrast = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const { data } = imageData;

  const factor = (259 * (value + 255)) / (255 * (259 - value));

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = clamp((factor * (data[i + 0] - 100)) + 100, 0, 255);
    data[i + 1] = clamp((factor * (data[i + 1] - 100)) + 100, 0, 255);
    data[i + 2] = clamp((factor * (data[i + 2] - 100)) + 100, 0, 255);
  }

  context.putImageData(imageData, 0, 0);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasSaturation = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = clamp(data[i + 0] + value, 0, 255);
    data[i + 1] = clamp(data[i + 1] + value, 0, 255);
    data[i + 2] = clamp(data[i + 2] + value, 0, 255);
  }

  context.putImageData(imageData, 0, 0);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasFade = (value_: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  let value = value_;

  if (value > 0) value *= -1;

  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const { data } = imageData;

  const factor = (259 * (value + 255)) / (255 * (259 - value));

  for (let i = 0; i < data.length; i += 4) {
    data[i + 0] = clamp((factor * (data[i + 0] - 100)) + 100, 0, 255);
    data[i + 1] = clamp((factor * (data[i + 1] - 100)) + 100, 0, 255);
    data[i + 2] = clamp((factor * (data[i + 2] - 100)) + 100, 0, 255);
  }

  context.putImageData(imageData, 0, 0);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasInvert = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const { data } = imageData;

  if (value === 1) {
    for (let i = 0; i < data.length; i += 4) {
      data[i + 0] = clamp(255 - data[i + 0], 0, 255);
      data[i + 1] = clamp(255 - data[i + 1], 0, 255);
      data[i + 2] = clamp(255 - data[i + 2], 0, 255);
    }

    context.putImageData(imageData, 0, 0);
  }

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasOldTimePhotos = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const canvas = window.document.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    const { data } = imageData;

    const percentage = (value_: number) => (Math.abs(value) / 100) * value_ * (value < 0 ? -1 : 1);

    for (let i = 0; i < data.length; i += 4) {
      data[i + 0] = clamp(((((data[i + 0] / 255) - 0.4) + (percentage(data[i + 0]) / 255)) + 0.4) * 255, 0, 255);
      data[i + 1] = clamp(((((data[i + 0] / 255) - 0.4) + (percentage(data[i + 0]) / 255)) + 0.4) * 255, 0, 255);
      data[i + 2] = clamp(((((data[i + 0] / 255) - 0.4) + (percentage(data[i + 0]) / 255)) + 0.4) * 255, 0, 255);
    }

    context.putImageData(imageData, 0, 0);
  }

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};
