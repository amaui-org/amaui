import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'AmauiReveal' });

export interface IReveal extends IBaseElement {
  inDefault?: boolean;

  offset?: number;
  offsetReveal?: number;
  offsetUnreveal?: number;

  unreveal?: boolean;

  addClassName?: string;

  noTransition?: boolean;
}

const Reveal = React.forwardRef((props_: IReveal, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiReveal?.props?.default, ...props_ }), [props_]);

  const {
    inDefault,

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

  const [inProp, setInProp] = React.useState(inDefault !== undefined ? inDefault : false);

  const refs = {
    root: React.useRef<HTMLElement>(),
    props: React.useRef<any>(),
    in: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.props.current = props;

  refs.in.current = inProp;

  React.useEffect(() => {
    // Listen to window scroll value
    const method = () => {
      if (refs.root.current) {
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
      {React.cloneElement(children as any, {
        ref: (item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        },

        className: classNames([
          staticClassName('Reveal', theme) && [
            'AmauiReveal-root',
            unreveal && `AmauiReveal-unreveal`,
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
