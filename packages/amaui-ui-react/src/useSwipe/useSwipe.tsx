import React from 'react';

import { is } from '@amaui/utils';

import { valueWithinRangePercentage, percentageWithinRange } from '../utils';

export interface IOptionsUseSwipe {
  min?: string | number;
  max?: string | number;
  direction?: 'top' | 'left' | 'right' | 'bottom';
}

export interface IResponseUseSwipe {
  value?: number;
  position?: string;
}

// touch in middle of surface properly move

const useSwipe = (element: HTMLElement, options: IOptionsUseSwipe = {}) => {
  const [response, setResponse] = React.useState<IResponseUseSwipe>({ value: 100 });
  const [touch, setTouch] = React.useState<TouchEvent | Boolean>(false);

  const refs = {
    rect: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>(),
    element: React.useRef<any>(),
    options: React.useRef(options),
    response: React.useRef<any>(),
    touch: React.useRef<any>()
  };

  refs.options.current = options;
  refs.response.current = response;
  refs.touch.current = touch;

  const valuePrecision = (value: number) => {
    let valueNew = valueWithinRangePercentage(value, refs.min.current, refs.max.current);

    // percentage
    valueNew = percentageWithinRange(valueNew, refs.min.current, refs.max.current);

    return valueNew;
  };

  const onTouchStart = React.useCallback((event: TouchEvent) => setTouch(event), []);

  const onTouchEnd = React.useCallback(() => {
    const newResponse = { ...refs.response.current };

    newResponse.position = newResponse.value > 50 ? 'min' : 'max';

    setTouch(false);
    setResponse(newResponse);
  }, [response]);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    const newResponse = { ...refs.response.current };

    const { clientX: x, clientY: y } = event.touches[0];

    const { width, height, x: rootX, y: rootY } = refs.rect.current;

    // value
    let value_;

    if (refs.options.current.direction === 'top') value_ = ((-y - rootY) / height) * 100;

    if (refs.options.current.direction === 'left') value_ = ((-x - rootX) / width) * 100;

    if (refs.options.current.direction === 'right') value_ = ((x - rootX + width) / width) * 100;

    if (refs.options.current.direction === 'bottom') value_ = ((y - rootY + height) / height) * 100;

    newResponse.value = valuePrecision(value_);

    // Only value move at touchmove
    newResponse.position = undefined;

    setResponse(newResponse);
  }, [element, response]);

  // Watch
  React.useEffect(() => {
    const onTouchMoveMethod = (event: any) => {
      // Workaround for proper element for touchmove
      if (refs.touch.current || element.contains(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY))) {
        if (!refs.touch.current) setTouch(true);

        onTouchMove(event);
      }
    };

    if (element) {
      refs.element.current = element;

      refs.rect.current = element.getBoundingClientRect();

      refs.min.current = is('number', options.min) ? options.min : refs.rect.current[options.min];
      refs.max.current = is('number', options.max) ? options.max : refs.rect.current[options.max];

      element.addEventListener('touchstart', onTouchStart, { passive: true });

      window.document.addEventListener('touchend', onTouchEnd, { passive: true });
      window.document.addEventListener('touchmove', onTouchMoveMethod, { passive: true });
    }

    return () => {
      // Remove previous event listeners
      if (element) {
        element.addEventListener('touchstart', onTouchStart);

        window.document.addEventListener('touchend', onTouchEnd);
        window.document.addEventListener('touchmove', onTouchMoveMethod);
      }
    };
  }, [element]);
  console.log('useSwipe', response);
  return response;
};

useSwipe.displayName = 'AmauiUseSwipe';

export default useSwipe;
