import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiParalax' });

const Paralax = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiParalax?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    // window or parent
    version = 'window',

    value: value_,

    // element
    root = window.document.body,

    render,

    // value or a method
    rate = 0.4,

    scrollDirection = 'vertical',
    transformDirection = 'vertical',

    transition = `transform ${theme.transitions.duration.xxs}`,

    visible = true,

    className,
    style,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(0);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    version: React.useRef<any>(),
    visible: React.useRef<any>(),
    scrollDirection: React.useRef<any>(),
    transformDirection: React.useRef<any>(),
    rate: React.useRef<any>()
  };

  refs.value.current = value;

  refs.version.current = version;

  refs.visible.current = visible;

  refs.scrollDirection.current = scrollDirection;

  refs.transformDirection.current = transformDirection;

  refs.rate.current = rate;

  const update = () => {
    let valueNew: number;

    if (!refs.visible.current) {
      if (refs.version.current === 'window') valueNew = window.document.body[refs.scrollDirection.current === 'vertical' ? 'scrollTop' : 'scrollLeft'];
      else valueNew = window.document.body[refs.scrollDirection.current === 'vertical' ? 'scrollTop' : 'scrollLeft'];
    }
    else {
      if (refs.version.current === 'window') {
        const rect = refs.root.current?.getBoundingClientRect();

        if (
          // Element in view
          (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
          // Element top out of view, but bottom in view
          (rect.top < 0 && rect.bottom >= 0) ||
          // Element bottom out of view, but top in view
          (rect.bottom > window.innerHeight && rect.top <= window.innerHeight)
        ) valueNew = refs.scrollDirection.current === 'vertical' ? rect.y : rect.x;
      }
      else {

      }
    }

    if (valueNew !== undefined && valueNew !== refs.value.current) setValue(valueNew);
  };

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

Paralax.displayName = 'AmauiParalax';

export default Paralax;
