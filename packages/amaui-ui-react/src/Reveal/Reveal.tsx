import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import FadeElement from '../Fade';
import { IFade } from '../Fade/Fade';
import useVisible, { IUseVisible } from '../useVisible/useVisible';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'amaui-Reveal' });

export interface IReveal extends IFade {
  inDefault?: boolean;

  offset?: number;
  offsetReveal?: number;
  offsetUnreveal?: number;

  unreveal?: boolean;

  classes?: {
    in?: string;
  };

  styles?: {
    in?: any;
    out?: any;
  };

  onChange?: (value: boolean) => any;

  noTransition?: boolean;

  UseVisibleProps?: IUseVisible;
}

const Reveal: React.FC<IReveal> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiReveal?.props?.default, ...props_ }), [props_]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const {
    inDefault,

    offset,
    offsetReveal,
    offsetUnreveal,

    unreveal,

    classes: classesProps,

    styles,

    onChange,

    noTransition,

    Component: Component_ = Fade,

    UseVisibleProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [loaded, setLoaded] = React.useState(inDefault !== undefined ? inDefault : false);
  const [inProp, setInProp] = React.useState(inDefault !== undefined ? inDefault : false);

  const visiblity = useVisible({
    element: root,

    ...UseVisibleProps,

    options: {
      rootMargin: `${(is('number', offsetReveal) ? offsetReveal : offset) || 0}px ${(is('number', offsetReveal) ? offsetReveal : offset) || 0}px ${(is('number', offsetUnreveal) ? offsetUnreveal : offset) || 0}px ${(is('number', offsetUnreveal) ? offsetUnreveal : offset) || 0}px`,

      ...UseVisibleProps?.options
    }
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    props: React.useRef(props),
    in: React.useRef(inProp),
    unreveal: React.useRef(unreveal),
    loaded: React.useRef(loaded)
  };

  refs.props.current = props;

  refs.in.current = inProp;

  refs.unreveal.current = unreveal;

  refs.loaded.current = loaded;

  const onUpdate = React.useCallback((value: boolean) => {
    setInProp(value);

    if (value && !refs.loaded.current) setLoaded(true);

    if (is('function', onChange)) onChange(value);
  }, [onChange]);

  React.useEffect(() => {
    const value = visiblity.visible;

    if (refs.loaded.current && !value && !refs.unreveal.current) return;

    onUpdate(value);
  }, [visiblity.visible]);

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

          setRoot(item);

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
          inProp && classesProps?.in
        ]),

        style: {
          ...(inProp ? styles?.in : styles?.out),
          ...(children as any).props?.style
        }
      })}
    </Component>
  );
});

Reveal.displayName = 'amaui-Reveal';

export default Reveal;
