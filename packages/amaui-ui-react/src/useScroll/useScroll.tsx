import React from 'react';

export interface IUseScroll {
  threshold?: number;
  direction?: 'up' | 'down';
  target?: HTMLElement | Window
}

const useScroll = (props: IUseScroll) => {
  const {
    threshold,
    direction = 'down',
    target = window
  } = props;

  const [response, setResponse] = React.useState<boolean>(false);

  const refs = {
    previous: React.useRef<any>(0)
  };

  const method = React.useCallback(() => {
    const value = (target as HTMLElement).scrollTop !== undefined ? (target as HTMLElement).scrollTop : (target as Window).scrollY;

    // Direction
    let newResponse = (direction === 'down' && value > refs.previous.current) || (direction === 'up' && value < refs.previous.current);

    // Threshold
    if (threshold !== undefined) newResponse = value > threshold;

    setResponse(newResponse);

    // Previous
    refs.previous.current = value;
  }, [direction, threshold, target]);

  React.useEffect(() => {
    // Add new event listener
    if (target) target.addEventListener('scroll', method);

    return () => {
      // Remove previous event listener
      if (target) target.removeEventListener('scroll', method);
    };
  }, []);

  return response;
};

useScroll.displayName = 'AmauiUseScroll';

export default useScroll;
