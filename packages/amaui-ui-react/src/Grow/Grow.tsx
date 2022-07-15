import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Grow = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();

  const styles = {
    entering: {
      opacity: 1,
      transform: `scale(1)`,
    },
    exiting: {
      opacity: 0,
      transform: `scale(0.74)`
    },
    exited: {
      opacity: 0,
      transform: `scale(0.74)`
    },
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      opacity: theme.transitions.duration.sm,
      transform: theme.transitions.duration.xs
    };

    return `${(is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property]}ms`;
  };

  const timingFunction = status => (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ref: item => {
          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          transition: `opacity ${timeout(status)} ${timingFunction(status)}, transform ${timeout(status, 'transform')} ${timingFunction(status)} ${status === 'exiting' ? '74ms' : '0ms'}`,

          ...(styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

export default Grow;
