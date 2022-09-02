import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Zoom = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiZoom?.props?.default }), [props_]);

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

    children,

    ...other
  } = props;


  const styles = {
    add: {
      transform: `scale(0)`
    },
    adding: {
      transform: `scale(1)`
    },
    added: {
      transform: `scale(1)`
    },

    enter: {
      transform: `scale(0)`
    },
    entering: {
      transform: `scale(1)`
    },
    entered: {
      transform: `scale(1)`
    },

    exit: {
      transform: `scale(1)`
    },
    exiting: {
      transform: `scale(0)`
    },
    exited: {
      transform: `scale(0)`
    },
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      transform: theme.transitions.duration.xs
    };

    return `${((is('simple', timeout) ? timeout : timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
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
            if (ref) ref.current = item;

            if (ref_) ref_.current = item;

            if (children.ref) children.ref.current = item;
          },

          style: {
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,

            transition: `transform ${timeout(status, 'transform')} ${timingFunction(status)}`,

            ...(styles[status] || {}),

            ...(children?.props?.style || {}),
          }
        });
      }}
    </Transition>
  );
});

Zoom.displayName = 'AmauiZoom';

export default Zoom;
