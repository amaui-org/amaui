import { is, canvasFilterBrightness, canvasFilterContrast, canvasFilterSaturation, canvasFilterFade, canvasFilterInvert, canvasFilterOldPhoto, download, clamp, Try, isEnvironment } from '@amaui/utils';

import { IPoint } from './types';

export function reflow(element: HTMLElement) {
  element?.offsetHeight;
}

export const staticClassName = (name: string, theme: any) => {
  return theme?.ui?.elements?.[`amaui-${name}`]?.className?.static !== undefined ? theme?.ui?.elements?.[`amaui-${name}`]?.className?.static : theme?.ui?.className.static;
};

export const iconSizeToFontSize = (value: string | number) => {
  let fontSize: any = '1.5rem';

  if (value === 'very small') fontSize = '0.75rem';
  else if (value === 'small') fontSize = '1.125rem';
  else if (value === 'regular') fontSize = '1.5rem';
  else if (value === 'medium') fontSize = '1.875rem';
  else if (value === 'large') fontSize = '2.25rem';
  else if (value === 'very large') fontSize = '2.625rem';
  else if (value !== undefined) fontSize = value;

  return fontSize;
};

// Media query value or value
export const valueBreakpoints = (item: any, value: any, breakpoints: any, theme: any) => {
  // Simple
  if (!is('object', item) && item !== undefined) return item;

  // No breakpoints object
  if (is('object', item) && !Object.keys(item).every(prop => ['default', ...theme.breakpoints.keys].includes(prop))) return item;

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
  const img = document.createElement('img');

  const method = () => resolve(img);

  img.onload = method;

  img.onerror = () => resolve('' as any);

  img.src = uri;
});

export const canvasBrightness = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterBrightness(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasContrast = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterContrast(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasSaturation = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterSaturation(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasFade = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterFade(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasInvert = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterInvert(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const canvasOldPhoto = (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => {
  const rootDocument = mainCanvas?.ownerDocument || window.document;

  const canvas = rootDocument.createElement('canvas');

  canvas.width = valueCopy.width;

  canvas.height = valueCopy.height;

  const context = canvas.getContext('2d');

  context.drawImage(valueCopy, 0, 0);

  if (![0, undefined].includes(value)) canvasFilterOldPhoto(value, canvas);

  mainCanvas?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return canvas;
};

export const print = (element: HTMLElement) => {
  const rootDocument = element?.ownerDocument || window.document;

  const clone = rootDocument.cloneNode(true) as any;

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
  const rootDocument = element?.ownerDocument || window.document;

  const clone = rootDocument.cloneNode(true) as any;

  clone.body.innerHTML = '';

  const elementClone = element.cloneNode(true);

  (elementClone as HTMLElement).contentEditable = 'false';

  clone.body.append(elementClone);

  download(`${rootDocument.title}.html`, clone.documentElement.innerHTML, 'text/html');
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

export const line = (pointA: IPoint, pointB: IPoint) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};

export const controlPoint = (current: IPoint, previous_: IPoint, next_: IPoint, reverse = false, smoothRatio = 0.14) => {
  const previous = previous_ || current;
  const next = next_ || current;

  const opposed = line(previous, next);

  const angle = opposed.angle + (reverse ? Math.PI : 0);

  const length = opposed.length * smoothRatio;

  // Bug fix, prevent ties if x are the same
  // for previous, and current value
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

export const sanitize = (value: string) => {
  if (value) {
    const map: any = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      "\\": '&#x5c;',
      '*': '&#x2a',
    };

    const reg = /[&<>"'/\\*]/ig;

    return value.replace(reg, (match) => (map[match]));
  }
};

export const replace = (value: string, split: string, join: string) => {
  return value.split(split).join(join);
};

export const importIframeStyles = (iframeDocument: Document) => {
  const styleSheets = window.document.styleSheets;

  for (const styleSheet of Array.from(styleSheets)) {
    if (!(styleSheet.ownerNode as any).amaui) {
      iframeDocument.head.append((styleSheet.ownerNode as any)?.cloneNode(true));

      continue;
    }

    let css = '';

    const rules = styleSheet?.cssRules;

    for (const rule of Array.from(rules)) css += rule.cssText;

    const style = window.document.createElement('style');

    style.innerHTML = css;

    iframeDocument.head.append(style);
  }
};

export const getOverflowParent = (element: HTMLElement): HTMLElement => {
  if (!element) return;

  if (element.scrollHeight > element.clientHeight) return element;

  return getOverflowParent(element.parentElement);
};

export const keyboardStandardCommands = ['a', 'c', 'v', 'y', 'z'];

export const keyboardStyleCommands = ['b', 'i', 'u'];

export const caret: any = {};

if (isEnvironment('browser')) {
  if (window.getSelection && document.createRange) {
    // Saves caret position(s)
    caret.save = function (container: any) {
      const selection = window.getSelection();

      if (!(selection && selection.rangeCount > 0)) return;

      const range = window.getSelection()?.getRangeAt(0);

      if (!range) return;

      const preSelectionRange = range.cloneRange();

      preSelectionRange.selectNodeContents(container);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);

      const start = preSelectionRange.toString().length;

      return {
        start: start,
        end: start + range.toString().length
      };
    };

    // Restores caret position(s)
    caret.restore = function (container: any, savedElement: any) {
      let charIndex = 0;
      const range = document.createRange();

      range.setStart(container, 0);
      range.collapse(true);

      const nodeStack = [container];
      let node;
      let foundStart = false;
      let stop = false;

      // tslint:disable-next-line
      while (!stop && (node = nodeStack.pop())) {
        if (node.nodeType === 3) {
          const nextCharIndex = charIndex + node.length;

          if (!foundStart && savedElement.start >= charIndex && savedElement.start <= nextCharIndex) {
            range.setStart(node, savedElement.start - charIndex);
            foundStart = true;
          }

          if (foundStart && savedElement.end >= charIndex && savedElement.end <= nextCharIndex) {
            range.setEnd(node, savedElement.end - charIndex);
            stop = true;
          }

          charIndex = nextCharIndex;
        } else {
          let i = node.childNodes.length;

          while (i--) {
            nodeStack.push(node.childNodes[i]);
          }
        }
      }

      const selection = window.getSelection();

      selection?.removeAllRanges();
      selection?.addRange(range);
    };
  }
  else if ((process as any).window && (window.document as any).selection && (window.document.body as any).createTextRange) {
    // Saves caret position(s)
    caret.save = function (container: any) {
      const selectedTextRange = (window.document as any).selection.createRange();
      const preSelectionTextRange = (window.document.body as any).createTextRange();

      preSelectionTextRange.moveToElementText(container);
      preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);

      const start = preSelectionTextRange.text.length;

      return {
        start: start,
        end: start + selectedTextRange.text.length
      };
    };

    // Restores caret position(s)
    caret.restore = function (container: any, savedElement: any) {
      const textRange = (window.document.body as any).createTextRange();

      textRange.moveToElementText(container);
      textRange.collapse(true);
      textRange.moveEnd("character", savedElement.end);
      textRange.moveStart("character", savedElement.start);
      textRange.select();
    };
  }
}

export const toNumber = (item: any, valueDefault = 0) => (is('number', item) ? item : +String(item).match(/\d+.?\d+/)?.[0]) || valueDefault;

export const formats = {
  entire: 'DD MMM, YYYY [at] h:mm a',
  date: 'DD MMM, YYYY',
  time: 'h:mm a'
};

export const currencies = [
  {
    symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars'
  },
  {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'CAD',
    name_plural: 'Canadian dollars'
  },
  {
    symbol: '€',
    name: 'Euro',
    symbol_native: '€',
    'decimal_digits': 2,
    rounding: 0,
    code: 'EUR',
    name_plural: 'euros'
  },
  {
    symbol: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol_native: 'د.إ.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'AED',
    name_plural: 'UAE dirhams'
  },
  {
    symbol: 'Af',
    name: 'Afghan Afghani',
    symbol_native: '؋',
    'decimal_digits': 0,
    rounding: 0,
    code: 'AFN',
    name_plural: 'Afghan Afghanis'
  },
  {
    symbol: 'ALL',
    name: 'Albanian Lek',
    symbol_native: 'Lek',
    'decimal_digits': 0,
    rounding: 0,
    code: 'ALL',
    name_plural: 'Albanian lekë'
  },
  {
    symbol: 'AMD',
    name: 'Armenian Dram',
    symbol_native: 'դր.',
    'decimal_digits': 0,
    rounding: 0,
    code: 'AMD',
    name_plural: 'Armenian drams'
  },
  {
    symbol: 'AR$',
    name: 'Argentine Peso',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'ARS',
    name_plural: 'Argentine pesos'
  },
  {
    symbol: 'AU$',
    name: 'Australian Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'AUD',
    name_plural: 'Australian dollars'
  },
  {
    symbol: 'man.',
    name: 'Azerbaijani Manat',
    symbol_native: 'ман.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'AZN',
    name_plural: 'Azerbaijani manats'
  },
  {
    symbol: 'KM',
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbol_native: 'KM',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BAM',
    name_plural: 'Bosnia-Herzegovina convertible marks'
  },
  {
    symbol: 'Tk',
    name: 'Bangladeshi Taka',
    symbol_native: '৳',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BDT',
    name_plural: 'Bangladeshi takas'
  },
  {
    symbol: 'BGN',
    name: 'Bulgarian Lev',
    symbol_native: 'лв.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BGN',
    name_plural: 'Bulgarian leva'
  },
  {
    symbol: 'BD',
    name: 'Bahraini Dinar',
    symbol_native: 'د.ب.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'BHD',
    name_plural: 'Bahraini dinars'
  },
  {
    symbol: 'FBu',
    name: 'Burundian Franc',
    symbol_native: 'FBu',
    'decimal_digits': 0,
    rounding: 0,
    code: 'BIF',
    name_plural: 'Burundian francs'
  },
  {
    symbol: 'BN$',
    name: 'Brunei Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BND',
    name_plural: 'Brunei dollars'
  },
  {
    symbol: 'Bs',
    name: 'Bolivian Boliviano',
    symbol_native: 'Bs',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BOB',
    name_plural: 'Bolivian bolivianos'
  },
  {
    symbol: 'R$',
    name: 'Brazilian Real',
    symbol_native: 'R$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BRL',
    name_plural: 'Brazilian reals'
  },
  {
    symbol: 'BWP',
    name: 'Botswanan Pula',
    symbol_native: 'P',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BWP',
    name_plural: 'Botswanan pulas'
  },
  {
    symbol: 'BYR',
    name: 'Belarusian Ruble',
    symbol_native: 'BYR',
    'decimal_digits': 0,
    rounding: 0,
    code: 'BYR',
    name_plural: 'Belarusian rubles'
  },
  {
    symbol: 'BZ$',
    name: 'Belize Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'BZD',
    name_plural: 'Belize dollars'
  },
  {
    symbol: 'CDF',
    name: 'Congolese Franc',
    symbol_native: 'FrCD',
    'decimal_digits': 2,
    rounding: 0,
    code: 'CDF',
    name_plural: 'Congolese francs'
  },
  {
    symbol: 'CHF',
    name: 'Swiss Franc',
    symbol_native: 'CHF',
    'decimal_digits': 2,
    rounding: 0.05,
    code: 'CHF',
    name_plural: 'Swiss francs'
  },
  {
    symbol: 'CL$',
    name: 'Chilean Peso',
    symbol_native: '$',
    'decimal_digits': 0,
    rounding: 0,
    code: 'CLP',
    name_plural: 'Chilean pesos'
  },
  {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    symbol_native: 'CN¥',
    'decimal_digits': 2,
    rounding: 0,
    code: 'CNY',
    name_plural: 'Chinese yuan'
  },
  {
    symbol: 'CO$',
    name: 'Colombian Peso',
    symbol_native: '$',
    'decimal_digits': 0,
    rounding: 0,
    code: 'COP',
    name_plural: 'Colombian pesos'
  },
  {
    symbol: '₡',
    name: 'Costa Rican Colón',
    symbol_native: '₡',
    'decimal_digits': 0,
    rounding: 0,
    code: 'CRC',
    name_plural: 'Costa Rican colóns'
  },
  {
    symbol: 'CV$',
    name: 'Cape Verdean Escudo',
    symbol_native: 'CV$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'CVE',
    name_plural: 'Cape Verdean escudos'
  },
  {
    symbol: 'Kč',
    name: 'Czech Republic Koruna',
    symbol_native: 'Kč',
    'decimal_digits': 2,
    rounding: 0,
    code: 'CZK',
    name_plural: 'Czech Republic korunas'
  },
  {
    symbol: 'Fdj',
    name: 'Djiboutian Franc',
    symbol_native: 'Fdj',
    'decimal_digits': 0,
    rounding: 0,
    code: 'DJF',
    name_plural: 'Djiboutian francs'
  },
  {
    symbol: 'Dkr',
    name: 'Danish Krone',
    symbol_native: 'kr',
    'decimal_digits': 2,
    rounding: 0,
    code: 'DKK',
    name_plural: 'Danish kroner'
  },
  {
    symbol: 'RD$',
    name: 'Dominican Peso',
    symbol_native: 'RD$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'DOP',
    name_plural: 'Dominican pesos'
  },
  {
    symbol: 'DA',
    name: 'Algerian Dinar',
    symbol_native: 'د.ج.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'DZD',
    name_plural: 'Algerian dinars'
  },
  {
    symbol: 'Ekr',
    name: 'Estonian Kroon',
    symbol_native: 'kr',
    'decimal_digits': 2,
    rounding: 0,
    code: 'EEK',
    name_plural: 'Estonian kroons'
  },
  {
    symbol: 'EGP',
    name: 'Egyptian Pound',
    symbol_native: 'ج.م.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'EGP',
    name_plural: 'Egyptian pounds'
  },
  {
    symbol: 'Nfk',
    name: 'Eritrean Nakfa',
    symbol_native: 'Nfk',
    'decimal_digits': 2,
    rounding: 0,
    code: 'ERN',
    name_plural: 'Eritrean nakfas'
  },
  {
    symbol: 'Br',
    name: 'Ethiopian Birr',
    symbol_native: 'Br',
    'decimal_digits': 2,
    rounding: 0,
    code: 'ETB',
    name_plural: 'Ethiopian birrs'
  },
  {
    symbol: '£',
    name: 'British Pound Sterling',
    symbol_native: '£',
    'decimal_digits': 2,
    rounding: 0,
    code: 'GBP',
    name_plural: 'British pounds sterling'
  },
  {
    symbol: 'GEL',
    name: 'Georgian Lari',
    symbol_native: 'GEL',
    'decimal_digits': 2,
    rounding: 0,
    code: 'GEL',
    name_plural: 'Georgian laris'
  },
  {
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    symbol_native: 'GH₵',
    'decimal_digits': 2,
    rounding: 0,
    code: 'GHS',
    name_plural: 'Ghanaian cedis'
  },
  {
    symbol: 'FG',
    name: 'Guinean Franc',
    symbol_native: 'FG',
    'decimal_digits': 0,
    rounding: 0,
    code: 'GNF',
    name_plural: 'Guinean francs'
  },
  {
    symbol: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol_native: 'Q',
    'decimal_digits': 2,
    rounding: 0,
    code: 'GTQ',
    name_plural: 'Guatemalan quetzals'
  },
  {
    symbol: 'HK$',
    name: 'Hong Kong Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'HKD',
    name_plural: 'Hong Kong dollars'
  },
  {
    symbol: 'HNL',
    name: 'Honduran Lempira',
    symbol_native: 'L',
    'decimal_digits': 2,
    rounding: 0,
    code: 'HNL',
    name_plural: 'Honduran lempiras'
  },
  {
    symbol: 'kn',
    name: 'Croatian Kuna',
    symbol_native: 'kn',
    'decimal_digits': 2,
    rounding: 0,
    code: 'HRK',
    name_plural: 'Croatian kunas'
  },
  {
    symbol: 'Ft',
    name: 'Hungarian Forint',
    symbol_native: 'Ft',
    'decimal_digits': 0,
    rounding: 0,
    code: 'HUF',
    name_plural: 'Hungarian forints'
  },
  {
    symbol: 'Rp',
    name: 'Indonesian Rupiah',
    symbol_native: 'Rp',
    'decimal_digits': 0,
    rounding: 0,
    code: 'IDR',
    name_plural: 'Indonesian rupiahs'
  },
  {
    symbol: '₪',
    name: 'Israeli New Sheqel',
    symbol_native: '₪',
    'decimal_digits': 2,
    rounding: 0,
    code: 'ILS',
    name_plural: 'Israeli new sheqels'
  },
  {
    symbol: 'Rs',
    name: 'Indian Rupee',
    symbol_native: 'টকা',
    'decimal_digits': 2,
    rounding: 0,
    code: 'INR',
    name_plural: 'Indian rupees'
  },
  {
    symbol: 'IQD',
    name: 'Iraqi Dinar',
    symbol_native: 'د.ع.‏',
    'decimal_digits': 0,
    rounding: 0,
    code: 'IQD',
    name_plural: 'Iraqi dinars'
  },
  {
    symbol: 'IRR',
    name: 'Iranian Rial',
    symbol_native: '﷼',
    'decimal_digits': 0,
    rounding: 0,
    code: 'IRR',
    name_plural: 'Iranian rials'
  },
  {
    symbol: 'Ikr',
    name: 'Icelandic Króna',
    symbol_native: 'kr',
    'decimal_digits': 0,
    rounding: 0,
    code: 'ISK',
    name_plural: 'Icelandic krónur'
  },
  {
    symbol: 'J$',
    name: 'Jamaican Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'JMD',
    name_plural: 'Jamaican dollars'
  },
  {
    symbol: 'JD',
    name: 'Jordanian Dinar',
    symbol_native: 'د.أ.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'JOD',
    name_plural: 'Jordanian dinars'
  },
  {
    symbol: '¥',
    name: 'Japanese Yen',
    symbol_native: '￥',
    'decimal_digits': 0,
    rounding: 0,
    code: 'JPY',
    name_plural: 'Japanese yen'
  },
  {
    symbol: 'Ksh',
    name: 'Kenyan Shilling',
    symbol_native: 'Ksh',
    'decimal_digits': 2,
    rounding: 0,
    code: 'KES',
    name_plural: 'Kenyan shillings'
  },
  {
    symbol: 'KHR',
    name: 'Cambodian Riel',
    symbol_native: '៛',
    'decimal_digits': 2,
    rounding: 0,
    code: 'KHR',
    name_plural: 'Cambodian riels'
  },
  {
    symbol: 'CF',
    name: 'Comorian Franc',
    symbol_native: 'FC',
    'decimal_digits': 0,
    rounding: 0,
    code: 'KMF',
    name_plural: 'Comorian francs'
  },
  {
    symbol: '₩',
    name: 'South Korean Won',
    symbol_native: '₩',
    'decimal_digits': 0,
    rounding: 0,
    code: 'KRW',
    name_plural: 'South Korean won'
  },
  {
    symbol: 'KD',
    name: 'Kuwaiti Dinar',
    symbol_native: 'د.ك.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'KWD',
    name_plural: 'Kuwaiti dinars'
  },
  {
    symbol: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol_native: 'тңг.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'KZT',
    name_plural: 'Kazakhstani tenges'
  },
  {
    symbol: 'LB£',
    name: 'Lebanese Pound',
    symbol_native: 'ل.ل.‏',
    'decimal_digits': 0,
    rounding: 0,
    code: 'LBP',
    name_plural: 'Lebanese pounds'
  },
  {
    symbol: 'SLRs',
    name: 'Sri Lankan Rupee',
    symbol_native: 'SL Re',
    'decimal_digits': 2,
    rounding: 0,
    code: 'LKR',
    name_plural: 'Sri Lankan rupees'
  },
  {
    symbol: 'Lt',
    name: 'Lithuanian Litas',
    symbol_native: 'Lt',
    'decimal_digits': 2,
    rounding: 0,
    code: 'LTL',
    name_plural: 'Lithuanian litai'
  },
  {
    symbol: 'Ls',
    name: 'Latvian Lats',
    symbol_native: 'Ls',
    'decimal_digits': 2,
    rounding: 0,
    code: 'LVL',
    name_plural: 'Latvian lati'
  },
  {
    symbol: 'LD',
    name: 'Libyan Dinar',
    symbol_native: 'د.ل.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'LYD',
    name_plural: 'Libyan dinars'
  },
  {
    symbol: 'MAD',
    name: 'Moroccan Dirham',
    symbol_native: 'د.م.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MAD',
    name_plural: 'Moroccan dirhams'
  },
  {
    symbol: 'MDL',
    name: 'Moldovan Leu',
    symbol_native: 'MDL',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MDL',
    name_plural: 'Moldovan lei'
  },
  {
    symbol: 'MGA',
    name: 'Malagasy Ariary',
    symbol_native: 'MGA',
    'decimal_digits': 0,
    rounding: 0,
    code: 'MGA',
    name_plural: 'Malagasy Ariaries'
  },
  {
    symbol: 'MKD',
    name: 'Macedonian Denar',
    symbol_native: 'MKD',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MKD',
    name_plural: 'Macedonian denari'
  },
  {
    symbol: 'MMK',
    name: 'Myanma Kyat',
    symbol_native: 'K',
    'decimal_digits': 0,
    rounding: 0,
    code: 'MMK',
    name_plural: 'Myanma kyats'
  },
  {
    symbol: 'MOP$',
    name: 'Macanese Pataca',
    symbol_native: 'MOP$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MOP',
    name_plural: 'Macanese patacas'
  },
  {
    symbol: 'MURs',
    name: 'Mauritian Rupee',
    symbol_native: 'MURs',
    'decimal_digits': 0,
    rounding: 0,
    code: 'MUR',
    name_plural: 'Mauritian rupees'
  },
  {
    symbol: 'MX$',
    name: 'Mexican Peso',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MXN',
    name_plural: 'Mexican pesos'
  },
  {
    symbol: 'RM',
    name: 'Malaysian Ringgit',
    symbol_native: 'RM',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MYR',
    name_plural: 'Malaysian ringgits'
  },
  {
    symbol: 'MTn',
    name: 'Mozambican Metical',
    symbol_native: 'MTn',
    'decimal_digits': 2,
    rounding: 0,
    code: 'MZN',
    name_plural: 'Mozambican meticals'
  },
  {
    symbol: 'N$',
    name: 'Namibian Dollar',
    symbol_native: 'N$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NAD',
    name_plural: 'Namibian dollars'
  },
  {
    symbol: '₦',
    name: 'Nigerian Naira',
    symbol_native: '₦',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NGN',
    name_plural: 'Nigerian nairas'
  },
  {
    symbol: 'C$',
    name: 'Nicaraguan Córdoba',
    symbol_native: 'C$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NIO',
    name_plural: 'Nicaraguan córdobas'
  },
  {
    symbol: 'Nkr',
    name: 'Norwegian Krone',
    symbol_native: 'kr',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NOK',
    name_plural: 'Norwegian kroner'
  },
  {
    symbol: 'NPRs',
    name: 'Nepalese Rupee',
    symbol_native: 'नेरू',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NPR',
    name_plural: 'Nepalese rupees'
  },
  {
    symbol: 'NZ$',
    name: 'New Zealand Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'NZD',
    name_plural: 'New Zealand dollars'
  },
  {
    symbol: 'OMR',
    name: 'Omani Rial',
    symbol_native: 'ر.ع.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'OMR',
    name_plural: 'Omani rials'
  },
  {
    symbol: 'B/.',
    name: 'Panamanian Balboa',
    symbol_native: 'B/.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'PAB',
    name_plural: 'Panamanian balboas'
  },
  {
    symbol: 'S/.',
    name: 'Peruvian Nuevo Sol',
    symbol_native: 'S/.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'PEN',
    name_plural: 'Peruvian nuevos soles'
  },
  {
    symbol: '₱',
    name: 'Philippine Peso',
    symbol_native: '₱',
    'decimal_digits': 2,
    rounding: 0,
    code: 'PHP',
    name_plural: 'Philippine pesos'
  },
  {
    symbol: 'PKRs',
    name: 'Pakistani Rupee',
    symbol_native: '₨',
    'decimal_digits': 0,
    rounding: 0,
    code: 'PKR',
    name_plural: 'Pakistani rupees'
  },
  {
    symbol: 'zł',
    name: 'Polish Zloty',
    symbol_native: 'zł',
    'decimal_digits': 2,
    rounding: 0,
    code: 'PLN',
    name_plural: 'Polish zlotys'
  },
  {
    symbol: '₲',
    name: 'Paraguayan Guarani',
    symbol_native: '₲',
    'decimal_digits': 0,
    rounding: 0,
    code: 'PYG',
    name_plural: 'Paraguayan guaranis'
  },
  {
    symbol: 'QR',
    name: 'Qatari Rial',
    symbol_native: 'ر.ق.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'QAR',
    name_plural: 'Qatari rials'
  },
  {
    symbol: 'RON',
    name: 'Romanian Leu',
    symbol_native: 'RON',
    'decimal_digits': 2,
    rounding: 0,
    code: 'RON',
    name_plural: 'Romanian lei'
  },
  {
    symbol: 'din.',
    name: 'Serbian Dinar',
    symbol_native: 'дин.',
    'decimal_digits': 0,
    rounding: 0,
    code: 'RSD',
    name_plural: 'Serbian dinars'
  },
  {
    symbol: 'RUB',
    name: 'Russian Ruble',
    symbol_native: 'руб.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'RUB',
    name_plural: 'Russian rubles'
  },
  {
    symbol: 'RWF',
    name: 'Rwandan Franc',
    symbol_native: 'FR',
    'decimal_digits': 0,
    rounding: 0,
    code: 'RWF',
    name_plural: 'Rwandan francs'
  },
  {
    symbol: 'SR',
    name: 'Saudi Riyal',
    symbol_native: 'ر.س.‏',
    'decimal_digits': 2,
    rounding: 0,
    code: 'SAR',
    name_plural: 'Saudi riyals'
  },
  {
    symbol: 'SDG',
    name: 'Sudanese Pound',
    symbol_native: 'SDG',
    'decimal_digits': 2,
    rounding: 0,
    code: 'SDG',
    name_plural: 'Sudanese pounds'
  },
  {
    symbol: 'Skr',
    name: 'Swedish Krona',
    symbol_native: 'kr',
    'decimal_digits': 2,
    rounding: 0,
    code: 'SEK',
    name_plural: 'Swedish kronor'
  },
  {
    symbol: 'S$',
    name: 'Singapore Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'SGD',
    name_plural: 'Singapore dollars'
  },
  {
    symbol: 'Ssh',
    name: 'Somali Shilling',
    symbol_native: 'Ssh',
    'decimal_digits': 0,
    rounding: 0,
    code: 'SOS',
    name_plural: 'Somali shillings'
  },
  {
    symbol: 'SY£',
    name: 'Syrian Pound',
    symbol_native: 'ل.س.‏',
    'decimal_digits': 0,
    rounding: 0,
    code: 'SYP',
    name_plural: 'Syrian pounds'
  },
  {
    symbol: '฿',
    name: 'Thai Baht',
    symbol_native: '฿',
    'decimal_digits': 2,
    rounding: 0,
    code: 'THB',
    name_plural: 'Thai baht'
  },
  {
    symbol: 'DT',
    name: 'Tunisian Dinar',
    symbol_native: 'د.ت.‏',
    'decimal_digits': 3,
    rounding: 0,
    code: 'TND',
    name_plural: 'Tunisian dinars'
  },
  {
    symbol: 'T$',
    name: 'Tongan Paʻanga',
    symbol_native: 'T$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'TOP',
    name_plural: 'Tongan paʻanga'
  },
  {
    symbol: 'TL',
    name: 'Turkish Lira',
    symbol_native: 'TL',
    'decimal_digits': 2,
    rounding: 0,
    code: 'TRY',
    name_plural: 'Turkish Lira'
  },
  {
    symbol: 'TT$',
    name: 'Trinidad and Tobago Dollar',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'TTD',
    name_plural: 'Trinidad and Tobago dollars'
  },
  {
    symbol: 'NT$',
    name: 'New Taiwan Dollar',
    symbol_native: 'NT$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'TWD',
    name_plural: 'New Taiwan dollars'
  },
  {
    symbol: 'TSh',
    name: 'Tanzanian Shilling',
    symbol_native: 'TSh',
    'decimal_digits': 0,
    rounding: 0,
    code: 'TZS',
    name_plural: 'Tanzanian shillings'
  },
  {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    symbol_native: '₴',
    'decimal_digits': 2,
    rounding: 0,
    code: 'UAH',
    name_plural: 'Ukrainian hryvnias'
  },
  {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    symbol_native: 'USh',
    'decimal_digits': 0,
    rounding: 0,
    code: 'UGX',
    name_plural: 'Ugandan shillings'
  },
  {
    symbol: '$U',
    name: 'Uruguayan Peso',
    symbol_native: '$',
    'decimal_digits': 2,
    rounding: 0,
    code: 'UYU',
    name_plural: 'Uruguayan pesos'
  },
  {
    symbol: 'UZS',
    name: 'Uzbekistan Som',
    symbol_native: 'UZS',
    'decimal_digits': 0,
    rounding: 0,
    code: 'UZS',
    name_plural: 'Uzbekistan som'
  },
  {
    symbol: 'Bs.F.',
    name: 'Venezuelan Bolívar',
    symbol_native: 'Bs.F.',
    'decimal_digits': 2,
    rounding: 0,
    code: 'VEF',
    name_plural: 'Venezuelan bolívars'
  },
  {
    symbol: '₫',
    name: 'Vietnamese Dong',
    symbol_native: '₫',
    'decimal_digits': 0,
    rounding: 0,
    code: 'VND',
    name_plural: 'Vietnamese dong'
  },
  {
    symbol: 'FCFA',
    name: 'CFA Franc BEAC',
    symbol_native: 'FCFA',
    'decimal_digits': 0,
    rounding: 0,
    code: 'XAF',
    name_plural: 'CFA francs BEAC'
  },
  {
    symbol: 'CFA',
    name: 'CFA Franc BCEAO',
    symbol_native: 'CFA',
    'decimal_digits': 0,
    rounding: 0,
    code: 'XOF',
    name_plural: 'CFA francs BCEAO'
  },
  {
    symbol: 'YR',
    name: 'Yemeni Rial',
    symbol_native: 'ر.ي.‏',
    'decimal_digits': 0,
    rounding: 0,
    code: 'YER',
    name_plural: 'Yemeni rials'
  },
  {
    symbol: 'R',
    name: 'South African Rand',
    symbol_native: 'R',
    'decimal_digits': 2,
    rounding: 0,
    code: 'ZAR',
    name_plural: 'South African rand'
  },
  {
    symbol: 'ZK',
    name: 'Zambian Kwacha',
    symbol_native: 'ZK',
    'decimal_digits': 0,
    rounding: 0,
    code: 'ZMK',
    name_plural: 'Zambian kwachas'
  }
];
