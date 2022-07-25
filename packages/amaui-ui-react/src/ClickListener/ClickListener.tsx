import React from 'react';

import { is } from '@amaui/utils';

const resolve = value => value.replace(/^on/, '').toLowerCase();

const ClickListener = React.forwardRef((props: any, ref: any) => {
  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const {
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',

    onClickInside,
    onClickOutside,

    children
  } = props;

  React.useEffect(() => {
    const onMethod = (event: MouseEvent) => {
      if (refs.root.current) {
        if (refs.root.current.contains(event.target as any)) {
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
      {children && React.cloneElement(children, {
        ref: item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }
      })}
    </React.Fragment>
  );
});

export default ClickListener;
