import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Fade = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();

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

    return `${(is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property]}ms`;
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

          transition: `opacity ${timeout(status)} ${timingFunction(status)}`,

          ...(styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

export default Fade;
