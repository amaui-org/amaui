import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'amaui-Reveal' });

export interface IReveal extends IBaseElement {
  inDefault?: boolean;

  offset?: number;
  offsetReveal?: number;
  offsetUnreveal?: number;

  unreveal?: boolean;

  inClassName?: string;

  onChange?: (value: boolean) => any;

  noTransition?: boolean;
}

const Reveal = React.forwardRef((props_: IReveal, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiReveal?.props?.default, ...props_ }), [props_]);

  const {
    inDefault,

    offset,
    offsetReveal,
    offsetUnreveal,

    unreveal,

    inClassName,

    onChange,

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

  const updateIn = React.useCallback((value: boolean) => {
    setInProp(value);

    if (is('function', onChange)) onChange(value);
  }, [onChange]);

  React.useEffect(() => {
    // Listen to window scroll value
    const method = () => {
      if (refs.root.current) {
        const rect = refs.root.current.getBoundingClientRect();

        const rootWindow = refs.root.current?.ownerDocument?.defaultView || window;

        // Reveal
        if (!refs.in.current) {
          const offset_ = refs.props.current.offsetReveal !== undefined ? refs.props.current.offsetReveal : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

          if (
            // Top
            (
              // Top
              (rect.top - offset_ < rootWindow.innerHeight && rect.top - offset_ > 0) &&

              (
                // Left
                (rect.left - offset_ < rootWindow.innerWidth && rect.left - offset_ > 0) ||
                // Right
                (rect.left - offset_ < rootWindow.innerWidth && rect.right + offset_ > 0)
              )
            ) ||

            // Left
            (
              // Left
              (rect.left - offset_ < rootWindow.innerWidth && rect.left - offset_ > 0) &&

              (
                // Top
                (rect.top - offset_ < rootWindow.innerHeight && rect.top - offset_ > 0) ||
                // Bottom
                (rect.top - offset_ < rootWindow.innerHeight && rect.bottom + offset_ > 0)
              )
            ) ||

            // Right
            (
              // Right
              (rect.left - offset_ < rootWindow.innerWidth && rect.right + offset_ > 0) &&

              (
                // Top
                (rect.top - offset_ < rootWindow.innerHeight && rect.top - offset_ > 0) ||
                // Bottom
                (rect.top - offset_ < rootWindow.innerHeight && rect.bottom + offset_ > 0)
              )
            ) ||

            // Bottom
            (
              // Bottom
              (rect.top - offset_ < rootWindow.innerHeight && rect.bottom + offset_ > 0) &&

              (
                // Left
                (rect.left - offset_ < rootWindow.innerWidth && rect.left - offset_ > 0) ||
                // Right
                (rect.left - offset_ < rootWindow.innerWidth && rect.right + offset_ > 0)
              )
            )
          ) updateIn(true);
        }
        else if (refs.props.current.unreveal) {
          const offset_ = refs.props.current.offsetUnreveal !== undefined ? refs.props.current.offsetUnreveal : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

          if (
            // Top
            rect.bottom + offset_ < 0 ||

            // Left
            rect.right + offset_ < 0 ||

            // Right
            rect.left - offset_ > rootWindow.innerWidth ||

            // Bottom
            rect.top - offset_ > rootWindow.innerHeight
          ) updateIn(false);
        }
      }
    };

    // Initial
    setTimeout(() => {
      method();
    }, 14);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (refs.root.current) {
      rootDocument.addEventListener('scroll', method);
    }

    return () => {
      if (refs.root.current) {
        rootDocument.removeEventListener('scroll', method);
      }
    };
  }, []);

  const Component = !noTransition ? Component_ : React.Fragment;

  if (!noTransition) other.in = inProp;

  const ComponentProps = !noTransition && {
    ...other
  };

  return (
    <Component
      {...ComponentProps}
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
            'amaui-Reveal-root',
            unreveal && `amaui-Reveal-unreveal`,
            inProp ? `amaui-Reveal-revealed` : `amaui-Reveal-unrevealed`
          ],

          className,
          (children as any).props.className,
          classes.root,
          inProp && inClassName
        ])
      })}
    </Component>
  );
});

Reveal.displayName = 'amaui-Reveal';

export default Reveal;
