import React from 'react';

import { is, isEnvironment } from '@amaui/utils';

export interface IOptionsUseMediaQuery {
  element?: any;
  window?: Window;
}

const useMediaQuery = (props: string, options?: IOptionsUseMediaQuery) => {
  const element = options?.element;

  const rootDocument = isEnvironment('browser') && (options?.element?.ownerDocument || window.document) as Document;

  // iframeWindow
  // workaround for matchMedia on the iframe window
  const windowElement = isEnvironment('browser') && (rootDocument?.defaultView || (rootDocument as any)?.iframeWindow || window);

  const [response, setResponse] = React.useState<MediaQueryList | MediaQueryListEvent>(isEnvironment('browser') && windowElement?.matchMedia(props));
  const [matches, setMatches] = React.useState(response?.matches);

  const refs = {
    mediaQuery: React.useRef<MediaQueryList>(),
    responsive: React.useRef<any>({}),
    matches: React.useRef(matches)
  };

  refs.matches.current = matches;

  const method = React.useCallback((event: MediaQueryListEvent) => {
    setResponse(event);

    if (refs.matches.current !== event.matches) setMatches(event.matches);
  }, []);

  // Watch
  React.useEffect(() => {
    if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);

    if (isEnvironment('browser') && windowElement) {
      refs.mediaQuery.current = windowElement.matchMedia(props);

      // Add new event listener
      refs.mediaQuery.current.addEventListener('change', method);

      // Update the response
      setResponse(refs.mediaQuery.current);

      if (refs.matches.current !== refs.mediaQuery.current?.matches) setMatches(refs.mediaQuery.current?.matches);
    }

    return () => {
      // Remove event listener
      if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);
    };
  }, [props, windowElement]);

  React.useEffect(() => {
    if (element) {
      const observer = new ResizeObserver(() => {
        const root = element as HTMLElement;

        const valueWidth = root.ownerDocument.body.clientWidth;

        const getMinMax = (value_: string) => {
          const items = value_.split('and').map(item => item.trim());

          let min = items.find(item => item.includes('min-'));

          let max = items.find(item => item.includes('max-'));

          if (min) min = min.replace('(min-width:', '').replace('px)', '').trim();

          if (max) max = max.replace('(max-width:', '').replace('px)', '').trim();

          return {
            min: min ? Number(min) : min,
            max: max ? Number(max) : min
          };
        };

        const minMax = getMinMax(props) as any;

        refs.responsive.current[props] = is('number', minMax.min) || is('number', minMax.max);

        if (minMax.min !== undefined) refs.responsive.current[props] = refs.responsive.current[props] && valueWidth >= minMax.min;

        if (minMax.max !== undefined) refs.responsive.current[props] = refs.responsive.current[props] && valueWidth <= minMax.max;

        if (refs.matches.current !== refs.responsive.current[props]) setMatches(refs.responsive.current[props]);
      });

      const body = element.ownerDocument?.body;

      observer.observe(element.ownerDocument?.body);

      return () => {
        observer.unobserve(body);
      };
    }
  }, [props, element]);

  return matches;
};

useMediaQuery.displayName = 'amaui-UseMediaQuery';

export default useMediaQuery;
