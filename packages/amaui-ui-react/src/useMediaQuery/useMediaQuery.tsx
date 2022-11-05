import React from 'react';

import { isEnvironment } from '@amaui/utils';

const useMediaQuery = (props: string) => {
  const [media, setMedia] = React.useState(props);
  const [mediaQuery, setMediaQuery] = React.useState<MediaQueryList>(isEnvironment('browser') && window.matchMedia(media));
  const [response, setResponse] = React.useState<MediaQueryList | MediaQueryListEvent>(mediaQuery);

  const method = React.useCallback((event: MediaQueryListEvent) => setResponse(event), []);

  // Watch
  React.useEffect(() => {
    // Add new event listener
    mediaQuery.addEventListener('change', method);

    return () => {
      // Remove previous event listener
      mediaQuery.removeEventListener('change', method);
    };
  }, []);

  // Media
  React.useEffect(() => {
    if (props !== media) {
      // Remove previous event listener
      mediaQuery.removeEventListener('change', method);

      // Add
      const mediaQueryNew = window.matchMedia(props);

      setMedia(props);
      setMediaQuery(mediaQueryNew);
      setResponse(mediaQueryNew);

      // Add new event listener
      mediaQueryNew.addEventListener('change', method);
    }
  }, [props]);

  return response?.matches;
};

useMediaQuery.displayName = 'AmauiUseMediaQuery';

export default useMediaQuery;
