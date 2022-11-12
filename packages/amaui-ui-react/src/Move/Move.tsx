import React from 'react';

import { element, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    pointerEvents: 'auto',
    touchAction: 'none'
  }
}), { name: 'AmauiMove' });

export interface IMove extends IBaseElement {
  manage?: boolean;

  manageLevel?: number;

  onMouseDown?: (event: React.MouseEvent<any>) => any;
  onTouchStart?: (event: React.TouchEvent<any>) => any;
}

const Move = React.forwardRef((props_: IMove, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMove?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    manage = false,

    manageLevel = 0,

    onMouseDown: onMouseDown_,
    onTouchStart: onTouchStart_,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    onMouseDown: React.useRef<any>(),
    onTouchStart: React.useRef<any>(),
    previousMouseEvent: React.useRef<any>()
  };

  const [mouseDown, setMouseDown] = React.useState(false);
  const [values, setValues] = React.useState<any>({});

  refs.mouseDown.current = mouseDown;

  refs.onMouseDown.current = onMouseDown_;

  refs.onTouchStart.current = onTouchStart_;

  const styles: any = {
    root: {}
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    setMouseDown(true);

    if (is('function', refs.onMouseDown.current)) refs.onMouseDown.current(event);
  }, []);

  const onTouchStart = React.useCallback((event: React.TouchEvent<any>) => {
    setMouseDown(true);

    if (is('function', refs.onTouchStart.current)) refs.onTouchStart.current(event);
  }, []);

  const onMouseUp = React.useCallback((event: any) => {
    setMouseDown(false);

    refs.previousMouseEvent.current = undefined;

    if (is('function', refs.onMouseDown.current)) refs.onMouseDown.current(event);
  }, []);

  React.useEffect(() => {
    const onMove = (x_: number, y_: number) => {
      if (refs.mouseDown.current && refs.previousMouseEvent.current) {
        const { clientX: xPrevious, clientY: yPrevious } = refs.previousMouseEvent.current;

        const x = x_ - xPrevious;
        const y = y_ - yPrevious;

        const transform = (refs.root.current as HTMLElement).style.transform;

        const [xTransform, yTransform] = (transform?.match(/[-+]?\d+.?\d+/g) || [0, 0]).map(item => Number(item));

        setValues(values_ => ({
          ...values_,

          x: x + (xTransform || 0),
          y: y + (yTransform || 0)
        }));
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event;

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event.touches[0];

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;

        // Normalize for use as a mouseDown value
        refs.previousMouseEvent.current.clientY = clientY;

        refs.previousMouseEvent.current.clientX = clientX;
      }
    };

    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('touchend', onMouseUp);

    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('touchend', onMouseUp);

      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Update
  if (values?.x !== undefined && values?.y !== undefined) {
    styles.root.transform = `translate(${values.x}px, ${values.y}px)`;

    if (manage && refs.root.current) {
      const parents = element(refs.root.current).parents();

      const parent = parents[manageLevel || 0] as HTMLElement;

      if (parent && !['HTML', 'html', 'BODY', 'body', 'HEAD', 'head'].includes((parent as HTMLElement).tagName)) {
        parent.style.pointerEvents = 'none';

        styles.root.pointerEvents = 'auto';
      }
    }
  }

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      onMouseDown={onMouseDown}

      onTouchStart={onTouchStart}

      className={classNames([
        staticClassName('Move', theme) && [
          'AmauiMove-root',
          manage && `AmauiMove-manage`
        ],

        className,
        classes.root
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

Move.displayName = 'AmauiMove';

export default Move;
