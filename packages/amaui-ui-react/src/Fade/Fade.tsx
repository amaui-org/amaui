import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Fade = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();

  const styles = {
    entering: {
      opacity: 1
    },
    entered: {
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
      opacity: theme.transitions.duration.small
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

          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          transition: `opacity ${timeout(status)} ${timingFunction}`,

          ...(styles[status] || {}),
        }
      })}
    </Transition>
  );
});

export default Fade;
