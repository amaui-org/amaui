import React from 'react';

import { isEnvironment } from '@amaui/utils';

export interface IOptionsUseMediaQuery {
  element?: any;
  window?: Window;
}

const useMediaQuery = (props: string, options?: IOptionsUseMediaQuery) => {
  const rootDocument = (options?.element?.ownerDocument || window.document) as Document;

  // iframeWindow
  // workaround for matchMedia on the iframe window
  const windowElement = isEnvironment('browser') && (rootDocument?.defaultView || (rootDocument as any)?.iframeWindow || window);

  const [response, setResponse] = React.useState<MediaQueryList | MediaQueryListEvent>(windowElement?.matchMedia(props));

  const refs = {
    mediaQuery: React.useRef<MediaQueryList>()
  };

  const method = React.useCallback((event: MediaQueryListEvent) => setResponse(event), []);

  // Watch
  React.useEffect(() => {
    if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);

    if (windowElement) {
      refs.mediaQuery.current = windowElement.matchMedia(props);

      // Add new event listener
      refs.mediaQuery.current.addEventListener('change', method);

      // Update the response
      setResponse(refs.mediaQuery.current);
    }

    return () => {
      // Remove event listener
      if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);
    };
  }, [props, windowElement]);

  return response?.matches;
};

useMediaQuery.displayName = 'amaui-UseMediaQuery';

export default useMediaQuery;
