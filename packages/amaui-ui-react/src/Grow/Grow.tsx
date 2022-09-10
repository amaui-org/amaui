import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Grow = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiGrow?.props?.default }), [props_]);

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
    timeout: timeout_,
    timing_function,
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

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      opacity: theme.transitions.duration.sm,
      transform: theme.transitions.duration.xs
    };

    return `${(is('simple', timeout) ? timeout : timeout[status]) || properties[property]}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children, {
          ...other,

          ref: item => {
            refs.root.current = item;

            if (ref) ref.current = item;

            if (ref_) ref_.current = item;

            if (children.ref) {
              if (is('function', children.ref)) children.ref(item);
              else children.ref.current = item;
            }
          },

          style: {
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,

            transition: `opacity ${timeout(status)} ${timingFunction(status)}, transform ${timeout(status, 'transform')} ${timingFunction(status)} ${delay ? `${delay}ms` : (status === 'exiting' ? '74ms' : '0ms')}`,

            ...styles(status),

            ...children?.props?.style,

            ...style
          }
        });
      }}
    </Transition>
  );
});

Grow.displayName = 'AmauiGrow';

export default Grow;
