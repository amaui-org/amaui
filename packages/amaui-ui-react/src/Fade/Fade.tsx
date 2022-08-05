import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Fade = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFade?.props?.default }), [props_]);

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
      opacity: 0
    },
    adding: {
      opacity: 1
    },
    added: {
      opacity: 1
    },

    enter: {
      opacity: 0
    },
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    },

    exit: {
      opacity: 1
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    },
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      opacity: theme.transitions.duration.sm
    };

    return `${(is('simple', timeout) ? timeout : timeout[status]) || properties[property]}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(children, {
        ...other,

        ref: item => {
          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          visibility: status === 'exited' && !inProp ? 'hidden' : undefined,

          transition: `opacity ${timeout(status)} ${timingFunction(status)}`,

          ...(styles[status] || {}),

          ...(children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

Fade.displayName = 'AmauiFade';

export default Fade;
