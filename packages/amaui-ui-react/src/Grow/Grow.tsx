import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { ITransition, Transition, TTransitionStatus } from '..';

export interface IGrow extends ITransition {

}

const Grow = React.forwardRef((props_: IGrow, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiGrow?.props?.default, ...props_ }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const {
    in: inProp,
    prefix,
    run,
    append,
    add,
    enter,
    exit,
    enterOnAdd,
    exitOnAdd,
    noAbruption,
    removeOnExited,
    delay,
    duration: duration_,
    timing_function,
    addTransition,
    onTransition,
    onAppended,
    onAdd,
    onAdding,
    onAdded,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    onRemoved,

    className,
    style,

    children,

    ...other
  } = props;

  const styles = (status: TTransitionStatus) => {
    const { opacity = 1, transform = 'scale(1)' } = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',

        opacity: 0,
        transform: `scale(0.74)`
      },
      adding: {
        opacity: 1,
        transform: `scale(1)`
      },
      added: {
        opacity: 1,
        transform: `scale(1)`
      },

      enter: {
        transition: 'none',

        opacity: 0,
        transform: `scale(0.74)`
      },
      entering: {
        opacity: 1,
        transform: `scale(1)`
      },
      entered: {
        opacity: 1,
        transform: `scale(1)`
      },

      exit: {
        opacity,
        transform
      },
      exiting: {
        opacity: 0,
        transform: `scale(0.74)`
      },
      exited: {
        opacity: 0,
        transform: `scale(0.74)`
      }
    };

    return allStyles[status];
  };

  const duration = (status: TTransitionStatus, property = 'opacity') => {
    const properties = {
      opacity: theme.transitions.duration.sm,
      transform: theme.transitions.duration.xs
    };

    return `${(is('simple', duration) ? duration : duration[status]) || properties[property]}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children as any, {
          ...other,

          ref: (item: any) => {
            refs.root.current = item;

            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            if (ref_) {
              if (is('function', ref_)) (ref_ as any)(item);
              else ref_.current = item;
            }

            if ((children as any).ref) {
              if (is('function', (children as any).ref)) (children as any).ref(item);
              else (children as any).ref.current = item;
            }
          },

          style: {
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,

            transition: `opacity ${duration(status)} ${timingFunction(status)}, transform ${duration(status, 'transform')} ${timingFunction(status)} ${addTransition ? `, ${addTransition}` : ''}`,

            ...styles(status),

            ...(children as any)?.props?.style,

            ...style
          }
        });
      }}
    </Transition>
  );
});

Grow.displayName = 'amaui-Grow';

export default Grow;
