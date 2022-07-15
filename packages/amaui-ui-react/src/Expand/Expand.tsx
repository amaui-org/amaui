import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Expand = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();
  const refs = {
    root: React.useRef<HTMLElement>()
  };
  const [rect, setRect] = React.useState<DOMRect>(undefined);

  React.useEffect(() => {
    setTimeout(() => setRect(refs.root.current.getBoundingClientRect()));
  }, []);

  const styles = {
    entering: {
      height: `${rect?.height || 0}px`
    },
    exiting: {
      height: '0',
      overflow: 'hidden'
    },
    exited: {
      height: '0',
      overflow: 'hidden'
    }
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      height: theme.transitions.duration.rg
    };

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      enterOnAdd={!!refs.root.current}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ref: item => {
          refs.root.current = item;

          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          transition: `height ${timeout(status, 'height')} ${timingFunction(status)}`,

          visibility: status === 'exited' && !props.in ? 'hidden' : undefined,

          ...(styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

export default Expand;
