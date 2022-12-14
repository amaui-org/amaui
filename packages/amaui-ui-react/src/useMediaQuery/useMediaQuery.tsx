import React from 'react';

import { isEnvironment } from '@amaui/utils';

const useMediaQuery = (props: string) => {
  const [response, setResponse] = React.useState<MediaQueryList | MediaQueryListEvent>();

  const refs = {
    mediaQuery: React.useRef<MediaQueryList>()
  };

  const method = React.useCallback((event: MediaQueryListEvent) => setResponse(event), []);

  // Watch
  React.useEffect(() => {
    if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);

    if (isEnvironment('browser')) {
      refs.mediaQuery.current = window.matchMedia(props);

      // Add new event listener
      refs.mediaQuery.current.addEventListener('change', method);

      // Update the response
      setResponse(refs.mediaQuery.current);
    }

    return () => {
      // Remove event listener
      if (refs.mediaQuery.current) refs.mediaQuery.current.removeEventListener('change', method);
    };
  }, [props]);

  return response?.matches;
};

useMediaQuery.displayName = 'AmauiUseMediaQuery';

export default useMediaQuery;
