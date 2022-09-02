import React from 'react';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

const resolve = (value: string) => value.replace(/^on/, '').toLowerCase();

const ClickListener = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiClickListener?.props?.default }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const {
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',

    include = [],

    onClickInside,
    onClickOutside,

    children
  } = props;

  React.useEffect(() => {
    const onMethod = (event: MouseEvent) => {
      if (refs.root.current) {
        if (
          refs.root.current.contains(event.target as any) ||
          include.some(item => item.contains(event.target))
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
            if (ref) ref.current = item;

            if (children.ref) {
              if (is('function', children.ref)) children.ref(item);
              else children.ref.current = item;
            }

            refs.root.current = item;
          }
        })
      )}
    </React.Fragment>
  );
});

ClickListener.displayName = 'AmauiClickListener';

export default ClickListener;
