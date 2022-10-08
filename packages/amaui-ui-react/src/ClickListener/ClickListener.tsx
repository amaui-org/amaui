import React from 'react';

import { is, element } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

const resolve = (value: string) => value.replace(/^on/, '').toLowerCase();

const ClickListener = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiClickListener?.props?.default }), [props_]);

  const {
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',

    include = [],

    // Means it will fail if it's empty
    // as with empty array all parents are returned
    includeQueries = ['amaui'],

    onClickInside,
    onClickOutside,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>(),
    include: React.useRef<any>(),
    includeQueries: React.useRef<any>()
  };

  refs.include.current = include;

  refs.includeQueries.current = includeQueries;

  React.useEffect(() => {
    const onMethod = (event: MouseEvent) => {
      if (refs.root.current) {
        const eventElement = element(event.target as any);

        if (
          refs.root.current.contains(event.target as any) ||
          refs.include.current.map(item => item?.current || item).filter(Boolean).some(item => item.contains?.(event.target)) ||
          !!eventElement.parents(refs.includeQueries.current).length
        ) {
          if (is('function', onClickInside)) onClickInside();
        }
        else {
          if (is('function', onClickOutside)) onClickOutside();
        }
      }
    };

    if (mouseEvent) window.document.addEventListener(resolve(mouseEvent), onMethod);

    if (touchEvent) window.document.addEventListener(resolve(touchEvent), onMethod, { passive: true });

    return () => {
      if (mouseEvent) window.document.removeEventListener(resolve(mouseEvent), onMethod);

      if (touchEvent) window.document.removeEventListener(resolve(mouseEvent), onMethod);
    };
  }, []);

  return (
    <React.Fragment>
      {children && (
        React.cloneElement(children, {
          ref: item => {
            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            if (children.ref) {
              if (is('function', children.ref)) children.ref(item);
              else children.ref.current = item;
            }

            refs.root.current = item;
          },

          ...other
        })
      )}
    </React.Fragment>
  );
});

ClickListener.displayName = 'AmauiClickListener';

export default ClickListener;
