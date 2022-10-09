import React from 'react';

import { is, clamp } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiParallax' });

const Parallax = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiParallax?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    value: value_,

    // element
    root = window.document,

    render,

    // value or a method
    rate = -0.14,

    min,
    max,

    scrollDirection = 'vertical',
    transformDirection = 'vertical',

    transition = `transform ${theme.transitions.duration.xxs}`,

    className,
    style,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(0);

  const refs = {
    root: React.useRef<any>(),
    rect: React.useRef<any>(),
    value: React.useRef<any>(),
    scrollDirection: React.useRef<any>(),
    transformDirection: React.useRef<any>(),
    rate: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>()
  };

  refs.value.current = value;

  refs.scrollDirection.current = scrollDirection;

  refs.transformDirection.current = transformDirection;

  refs.rate.current = rate;

  refs.min.current = min;

  refs.max.current = max;

  const update = () => {
    let valueNew: number;

    if (!refs.visible.current) {
      if (refs.version.current === 'window') valueNew = window.document.body[refs.scrollDirection.current === 'vertical' ? 'scrollTop' : 'scrollLeft'];
      else if (refs.version.current === 'parent') valueNew = window.document.body[refs.scrollDirection.current === 'vertical' ? 'scrollTop' : 'scrollLeft'];
    }
    else {
      const rect = refs.root.current?.getBoundingClientRect();

      if (refs.version.current === 'window') {
        if (rect) {
          if (
            // Vertically
            (
              // Element in view
              (rect.y >= 0 && rect.bottom <= window.innerHeight) ||
              // Element y out of view, but bottom in view
              (rect.y < 0 && rect.bottom >= 0) ||
              // Element bottom out of view, but y in view
              (rect.bottom > window.innerHeight && rect.y <= window.innerHeight)
            ) &&
            // Horizontally
            (
              // Element in view
              (rect.x >= 0 && rect.right <= window.innerWidth) ||
              // Element x out of view, but right in view
              (rect.x < 0 && rect.right >= 0) ||
              // Element right out of view, but x in view
              (rect.right > window.innerWidth && rect.y <= window.innerWidth)
            )
          ) valueNew = refs.scrollDirection.current === 'vertical' ? rect.y - window.scrollY : rect.x - window.scrollX;
        }
      }
      else if (refs.version.current === 'parent') {
        const rectParent = refs.root.current?.parentNode?.getBoundingClientRect();

        if (rect && rectParent) {
          const x = rect.x - rectParent.x;
          const right = x + rect.width;

          const y = rect.y - rectParent.y;
          const bottom = y + rect.height;

          if (
            // Vertically
            (
              // Element in view
              (y >= 0 && bottom <= rectParent.height) ||
              // Element y out of view, but bottom in view
              (y < 0 && bottom >= 0) ||
              // Element bottom out of view, but y in view
              (bottom > rectParent.height && y <= rectParent.height)
            ) &&
            // Horizontally
            (
              // Element in view
              (x >= 0 && right <= rectParent.width) ||
              // Element x out of view, but right in view
              (x < 0 && right >= 0) ||
              // Element right out of view, but x in view
              (right > rectParent.width && y <= rectParent.width)
            )
          ) valueNew = refs.scrollDirection.current === 'vertical' ? y - window.scrollY : x - window.scrollX;
        }
      }
    }

    if (valueNew !== undefined && valueNew !== refs.value.current) setValue(clamp(valueNew, refs.min.current !== undefined ? refs.min.current : Number.MIN_SAFE_INTEGER, refs.max.current !== undefined ? refs.max.current : Number.MAX_SAFE_INTEGER));
  };

  React.useEffect(() => {
    refs.rect.current = refs.root.current?.getBoundingClientRect();
  }, []);

  React.useEffect(() => {
    if (root?.addEventListener) root.addEventListener('scroll', update);

    return () => {
      if (root?.addEventListener) root.removeEventListener('scroll', update);
    };
  }, [root]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  let styles: any = {};

  if (is('function', render)) styles = { ...render(value, version, root, rate, scrollDirection, transformDirection, visible, transition, props) };
  else {
    let valueUpdate = 0;

    if (is('function', rate)) valueUpdate = rate(value);
    else valueUpdate = value * rate;

    if (transformDirection === 'vertical') styles.transform = `translate3d(0, ${valueUpdate}px, 0)`;
    else styles.transform = `translate3d(${valueUpdate}px, 0, 0)`;

    styles.transition = transition;
  }

  return (
    is('function', children) ?
      children(value, styles, other) :

      React.cloneElement(children, {
        className: classNames([
          className,
          classes.root
        ]),

        ref: item => {
          if (ref) ref.current = item;

          refs.root.current = item;

          if (children.ref) {
            if (is('function', children.ref)) children.ref(item);
            else children.ref.current = item;
          }
        },

        style: {
          ...children.props.style,

          ...styles
        },

        ...other
      })
  );
});

Parallax.displayName = 'AmauiParallax';

export default Parallax;
