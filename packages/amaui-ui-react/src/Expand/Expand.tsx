import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Wrapper = React.forwardRef((props: any, ref: any) => {
  const {
    children,

    ...other
  } = props;

  return (
    <div
      ref={ref}

      {...other}
    >
      {props.children}
    </div>
  );
});

const Expand = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();
  const refs = {
    root: React.useRef<HTMLElement>()
  };
  const [rect, setRect] = React.useState<DOMRect>(undefined);

  React.useEffect(() => {
    setTimeout(() => setRect(refs.root.current.getBoundingClientRect()));
  }, []);

  let prop = 'height';

  if (props.orientation === 'horizontal') prop = 'width';

  const styles = {
    enter: {
      [prop]: rect && `${rect[prop]}px`,
      overflow: 'hidden'
    },
    entering: {
      [prop]: rect && `${rect[prop]}px`,
      overflow: 'hidden'
    },
    entered: {
      [prop]: rect && `${rect[prop]}px`
    },
    exit: {
      [prop]: props.expandSize !== undefined ? props.expandSize : '0',
      overflow: 'hidden'
    },
    exiting: {
      [prop]: props.expandSize !== undefined ? props.expandSize : '0',
      overflow: 'hidden'
    },
    exited: {
      [prop]: props.expandSize !== undefined ? props.expandSize : '0',
      overflow: 'hidden'
    }
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      [prop]: theme.transitions.duration.rg
    };

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      enterOnAdd={!!refs.root.current}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(<Wrapper children={props.children} />, {
        ref: item => {
          refs.root.current = item;

          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          position: 'relative',

          transition: `${prop} ${timeout(status, prop)} ${timingFunction(status)}`,

          visibility: status === 'exited' && !props.in && props.expandSize === undefined ? 'hidden' : undefined,

          ...(rect && styles[status] || {}),

          ...(props.children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

export default Expand;
