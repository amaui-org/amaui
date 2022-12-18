import React from 'react';

import { isEnvironment } from '@amaui/utils';

export type TUseScrollDirection = 'up' | 'down';

export interface IUseScroll {
  offset?: number;
  direction?: TUseScrollDirection;
  target?: HTMLElement | Window;
}

const useScroll = (props: IUseScroll) => {
  const {
    offset,
    direction,
    target = isEnvironment('browser') && window
  } = props;

  const [response, setResponse] = React.useState<boolean>(false);

  const refs = {
    previous: React.useRef<any>(0),
    offset: React.useRef<number>(),
    direction: React.useRef<TUseScrollDirection>()
  };

  refs.offset.current = offset;
  refs.direction.current = direction;

  const method = React.useCallback(() => {
    const value = (target as HTMLElement).scrollTop !== undefined ? (target as HTMLElement).scrollTop : (target as Window).scrollY;

    let newResponse = true;

    // Direction
    if (refs.direction.current !== undefined) newResponse = newResponse && ((refs.direction.current === 'down' && value > refs.previous.current) || (refs.direction.current === 'up' && value < refs.previous.current));

    // Offset
    if (refs.offset.current !== undefined) newResponse = newResponse && (value > refs.offset.current);

    setResponse(newResponse);

    // Previous
    refs.previous.current = value;
  }, []);

  React.useEffect(() => {
    // Add new event listener
    if (target) target.addEventListener('scroll', method);

    method();

    return () => {
      // Remove previous event listener
      if (target) target.removeEventListener('scroll', method);
    };
  }, [target]);

  return response;
};

useScroll.displayName = 'amaui-UseScroll';

export default useScroll;
