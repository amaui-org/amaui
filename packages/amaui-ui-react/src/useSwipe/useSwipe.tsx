import React from 'react';

import { clamp, percentageFromValueWithinRange } from '@amaui/utils';

export interface IOptionsUseSwipe {
  open?: boolean;
  min?: number;
  direction?: 'top' | 'left' | 'right' | 'bottom';
  touchAnywhere?: boolean;
}

export interface IResponseUseSwipe {
  value?: number;
  valuePercentage?: number;
  position?: string;
}

const useSwipe = (element: HTMLElement, options: IOptionsUseSwipe = {}) => {
  const [response, setResponse] = React.useState<IResponseUseSwipe>();
  const [touch, setTouch] = React.useState<TouchEvent | boolean>(false);

  const refs = {
    rect: React.useRef<any>(),
    element: React.useRef<any>(),
    options: React.useRef(options),
    response: React.useRef<any>(),
    touch: React.useRef<any>(),
    previous: React.useRef<any>()
  };

  refs.options.current = options;
  refs.response.current = response;
  refs.touch.current = touch;

  const onTouchStart = React.useCallback((event: TouchEvent) => setTouch(event), []);

  const onTouchEnd = React.useCallback(() => {
    const newResponse = { ...refs.response.current };

    newResponse.position = newResponse.valuePercentage < 50 ? 'min' : 'max';

    refs.previous.current = undefined;

    setTouch(false);
    setResponse(newResponse);
  }, [response]);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    const newResponse = { ...refs.response.current };

    const { clientX: x_, clientY: y_ } = event.touches[0];
    const { clientX: pX, clientY: pY } = refs.previous.current.touches[0];

    const x = pX - x_;
    const y = pY - y_;

    const { top = 0, left = 0, width = 0, height = 0 } = element?.getBoundingClientRect() || {};

    // value
    let value_: number;
    let min: number;
    let max: number;

    const optionsMin = refs.options.current.min || 0;

    if (refs.options.current.direction === 'top') {
      min = refs.rect.current.top;
      max = refs.rect.current.bottom - optionsMin;

      value_ = top - y;
    }

    if (refs.options.current.direction === 'left') {
      min = refs.rect.current.left;
      max = refs.rect.current.right - optionsMin;

      value_ = left - x;
    }

    if (refs.options.current.direction === 'right') {
      min = window.innerWidth - refs.rect.current.left - optionsMin;
      max = min + refs.rect.current.width - optionsMin;

      value_ = width - (window.innerWidth - left) - x;
    }

    if (refs.options.current.direction === 'bottom') {
      min = window.innerHeight - refs.rect.current.top - optionsMin;
      max = min + refs.rect.current.height - optionsMin;

      value_ = height - (window.innerHeight - top) - y;
    }

    newResponse.value = clamp(value_, min, max);

    newResponse.valuePercentage = percentageFromValueWithinRange(newResponse.value, min, max);

    if (['bottom', 'right'].includes(refs.options.current.direction)) newResponse.valuePercentage = 100 - newResponse.valuePercentage;

    // Only value move at touchmove
    newResponse.position = undefined;

    setResponse(newResponse);
  }, [element, response]);

  React.useEffect(() => {
    const onTouchMoveMethod = (event: any) => {
      // Workaround for proper element for touchmove
      if (refs.options.current.open && refs.previous.current && ((refs.options.current.touchAnywhere || refs.touch.current) || element.contains(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY)))) {
        if (!refs.touch.current) setTouch(true);

        onTouchMove(event);
      }

      refs.previous.current = event;
    };

    if (element) {
      refs.element.current = element;

      refs.rect.current = element.getBoundingClientRect();

      element.addEventListener('touchstart', onTouchStart, { passive: true });

      window.document.addEventListener('touchend', onTouchEnd, { passive: true });
      window.document.addEventListener('touchmove', onTouchMoveMethod, { passive: true });
    }

    return () => {
      // Remove previous event listeners
      if (element) element.removeEventListener('touchstart', onTouchStart);

      window.document.removeEventListener('touchend', onTouchEnd);
      window.document.removeEventListener('touchmove', onTouchMoveMethod);
    };
  }, [element]);

  return response;
};

useSwipe.displayName = 'amaui-UseSwipe';

export default useSwipe;
