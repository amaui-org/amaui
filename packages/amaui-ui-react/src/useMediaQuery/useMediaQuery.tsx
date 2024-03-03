import React from 'react';

export interface IOptionsUseMediaQuery {
  element?: any;
  initial?: boolean;
}

const useMediaQuery = (props: string, options?: IOptionsUseMediaQuery) => {
  const element = options?.element;

  const [root, setRoot] = React.useState<Window>();
  const [matches, setMatches] = React.useState(options?.initial);

  const refs = {
    root: React.useRef(root),
    responsive: React.useRef<any>({}),
    matches: React.useRef(matches)
  };

  refs.matches.current = matches;

  // Root
  React.useEffect(() => {
    const rootNew = element?.ownerDocument?.defaultView || window;

    setRoot(rootNew);

    refs.root.current = rootNew;
  }, [element]);

  const method = React.useCallback((event: MediaQueryListEvent) => {
    if (refs.matches.current !== event.matches) setMatches(event.matches);
  }, []);

  // Watch
  React.useEffect(() => {
    if (!root) return;

    const mediaQuery = root.matchMedia(props);

    // Add new event listener
    mediaQuery.addEventListener('change', method);

    if (refs.matches.current !== mediaQuery?.matches) setMatches(mediaQuery?.matches);

    return () => {
      // Remove event listener
      if (mediaQuery) mediaQuery.removeEventListener('change', method);
    };
  }, [root, props]);

  return matches;
};

useMediaQuery.displayName = 'amaui-UseMediaQuery';

export default useMediaQuery;
