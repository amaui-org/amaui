import React from 'react';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Grow = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();

  const styles = {
    entering: {
      opacity: 1,
      transform: `scale(1)`,
    },
    entered: {
      opacity: 1,
      transform: 'none',
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
      opacity: theme.transitions.duration.small,
      transform: theme.transitions.duration.smaller
    };

    return `${(is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property]}ms`;
  };

  const timingFunction = (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

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
          ...(props.children.style || {}),

          opacity: '0',
          transform: 'scale(0.74)',

          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          transition: `opacity ${timeout(status)} ${timingFunction}, transform ${timeout(status, 'transform')} ${timingFunction} ${status === 'exiting' ? '74ms' : '0ms'}`,

          ...(styles[status] || {}),
        }
      })}
    </Transition>
  );
});

export default Grow;
