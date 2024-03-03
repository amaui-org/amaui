import React from 'react';

export type TUseScrollDirection = 'up' | 'down';

export interface IUseScroll {
  offset?: number;
  direction?: TUseScrollDirection;
  target?: HTMLElement | Window;
  element?: any;
}

const useScroll = (props: IUseScroll) => {
  const {
    offset,
    direction,
    element,
    target
  } = props;

  const [response, setResponse] = React.useState<boolean>(false);
  const [root, setRoot] = React.useState<HTMLElement | Window>();

  const refs = {
    root: React.useRef(root),
    previous: React.useRef<any>(0),
    offset: React.useRef<number>(),
    direction: React.useRef<TUseScrollDirection>(),
    response: React.useRef(response)
  };

  refs.root.current = root;

  refs.offset.current = offset;

  refs.direction.current = direction;

  refs.response.current = response;

  // Root
  React.useEffect(() => {
    const rootNew = target || element?.ownerDocument?.defaultView || window;

    setRoot(rootNew);

    refs.root.current = rootNew;
  }, [target, element]);

  const method = React.useCallback(() => {
    if (!refs.root.current) return;

    const value = (refs.root.current as HTMLElement)?.scrollTop !== undefined ? (refs.root.current as HTMLElement).scrollTop : (refs.root.current as unknown as Window)?.scrollY!;

    let responseNew = true;

    // Direction
    if (refs.direction.current !== undefined) responseNew = responseNew && ((refs.direction.current === 'down' && value > refs.previous.current) || (refs.direction.current === 'up' && value < refs.previous.current));

    // Offset
    if (refs.offset.current !== undefined) responseNew = responseNew && (value > refs.offset.current);

    if (refs.response.current !== responseNew) setResponse(responseNew);

    // Previous
    refs.previous.current = value;
  }, []);

  React.useEffect(() => {
    // Add new event listener
    if (root) root.addEventListener('scroll', method);

    method();

    return () => {
      // Remove previous event listener
      if (root) root.removeEventListener('scroll', method);
    };
  }, [root]);

  return response;
};

useScroll.displayName = 'amaui-UseScroll';

export default useScroll;
