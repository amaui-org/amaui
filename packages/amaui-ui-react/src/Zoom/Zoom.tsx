import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Zoom = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiZoom?.props?.default }), [props_]);

  const {
    in: inProp,
    className,
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

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ...other,

        ref: item => {
          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          transition: `transform ${timeout(status, 'transform')} ${timingFunction(status)}`,

          ...(styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

export default Zoom;
