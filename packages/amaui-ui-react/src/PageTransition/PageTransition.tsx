import React from 'react';
import { Location, useLocation } from 'react-router-dom';

import { hash, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },

    to: {
      opacity: 1
    }
  },

  '@keyframes fadeOut': {
    from: {
      opacity: 1
    },

    to: {
      opacity: 0
    }
  },

  root: {

  },

  in: {
    animation: '$fadeIn 0.24s forwards'
  },

  out: {
    animation: '$fadeOut 0.24s forwards'
  }
}), { name: 'amaui-PageTransition' });

export interface IPageTransition extends IBaseElement {
  add?: boolean;

  classNames?: {
    in?: string;
    out?: string;
  };
}

const PageTransition = React.forwardRef((props_: IPageTransition, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiPageTransition?.props?.default, ...props_ }), [props_]);

  const {
    add,

    classNames: classNames_,

    onAnimationEnd: onAnimationEnd_,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const location = useLocation();

  const [locationUsed, setLocationUsed] = React.useState(location);
  const [transition, setTransition] = React.useState<'in' | 'out'>(add ? 'in' : undefined);

  const refs = {
    location: React.useRef(location),
    transition: React.useRef(transition)
  };

  refs.location.current = location;

  refs.transition.current = transition;

  const classNamesToUse = {
    in: classNames_?.in || classes.in,
    out: classNames_?.out || classes.out
  };

  const hashLocation = React.useCallback((value: Location) => {
    return hash([
      value.hash,
      value.pathname,
      value.search
    ]);
  }, []);

  React.useEffect(() => {
    if (hashLocation(location) !== hashLocation(locationUsed)) setTransition('out');
  }, [location, locationUsed]);

  const onAnimationEnd = React.useCallback((event: AnimationEvent) => {
    if (refs.transition.current === 'out') {
      setLocationUsed(refs.location.current);

      setTransition('in');
    }

    if (is('function', onAnimationEnd_)) onAnimationEnd_(event);
  }, [onAnimationEnd_]);

  return (
    <Line
      ref={ref}

      direction='column'

      align='unset'

      justify='unset'

      flex

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('PageTransition', theme) && [
          `amaui-PageTransition-root`
        ],

        className,
        classes.root,
        classNamesToUse[transition]
      ])}

      {...other}

      onAnimationEnd={onAnimationEnd}
    >
      {React.cloneElement(children as any, {
        location: locationUsed
      })}
    </Line>
  );
});

PageTransition.displayName = 'amaui-PageTransition';

export default PageTransition;
