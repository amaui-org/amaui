import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },
}), { name: 'AmauiReveal' });

const Reveal = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiReveal?.props?.default }), [props_]);

  const [inProp, setInProp] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(),
    props: React.useRef<any>(),
    in: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  const {
    offset,
    offsetReveal,
    offsetUnreveal,

    unreveal,

    addClassName,

    noTransition,

    Component: Component_ = Fade,

    className,

    children,

    ...other
  } = props;

  refs.props.current = props;

  refs.in.current = inProp;

  React.useEffect(() => {
    // Listen to window scroll value
    const method = () => {
      const rect = refs.root.current.getBoundingClientRect();

      // Reveal
      if (!refs.in.current) {
        const offset_ = refs.props.current.offsetReveal !== undefined ? refs.props.current.offsetReveal : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

        if (
          // Top
          (
            // Top
            (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) &&

            (
              // Left
              (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) ||
              // Right
              (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0)
            )
          ) ||

          // Left
          (
            // Left
            (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) &&

            (
              // Top
              (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) ||
              // Bottom
              (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0)
            )
          ) ||

          // Right
          (
            // Right
            (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0) &&

            (
              // Top
              (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) ||
              // Bottom
              (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0)
            )
          ) ||

          // Bottom
          (
            // Bottom
            (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0) &&

            (
              // Left
              (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) ||
              // Right
              (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0)
            )
          )
        ) setInProp(true);
      }
      else if (refs.props.current.unreveal) {
        const offset_ = refs.props.current.offsetUnreveal !== undefined ? refs.props.current.offsetUnreveal : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

        if (
          // Top
          rect.bottom + offset_ < 0 ||

          // Left
          rect.right + offset_ < 0 ||

          // Right
          rect.left - offset_ > window.innerWidth ||

          // Bottom
          rect.top - offset_ > window.innerHeight
        ) setInProp(false);
      }
    };

    // Initial
    method();

    if (refs.root.current) {
      window.addEventListener('scroll', method);
    }

    return () => {
      if (refs.root.current) {
        window.removeEventListener('scroll', method);
      }
    };
  }, []);

  const Component = !noTransition ? Component_ : React.Fragment;

  if (!noTransition) other.in = inProp;

  return (
    <Component
      {...other}
    >
      {React.cloneElement(children, {
        ref: item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        },

        className: classNames([
          staticClassName('Reveal', theme) && [
            'AmauiReveal-root',
            inProp ? `AmauiReveal-revealed` : `AmauiReveal-unrevealed`
          ],

          className,
          classes.root,
          inProp && addClassName
        ])
      })}
    </Component>
  );
});

Reveal.displayName = 'AmauiReveal';

export default Reveal;
