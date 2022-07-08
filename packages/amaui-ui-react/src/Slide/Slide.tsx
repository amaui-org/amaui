import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import { Transition } from '../Transition';
import { TTransitionStatus } from '../Transition/Transition';
import { is } from '@amaui/utils';

const Slide = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
  const theme = useAmauiTheme();
  const rootRef = React.useRef<HTMLElement>();
  const [rect, setRect] = React.useState<DOMRect>(undefined);

  React.useEffect(() => {
    setTimeout(() => setRect(rootRef.current.getBoundingClientRect()));
  }, []);

  const translate = () => {
    if (props.direction === 'up') return `translate(0, -${rect?.bottom ? rect?.bottom + 'px' : '100vh'})`;

    if (props.direction === 'down') return `translate(0, ${rect?.top ? (window.innerHeight - rect.top) + 'px' : '100vh'})`;

    if (props.direction === 'left') return `translate(-${rect?.right ? rect?.right + 'px' : '100vw'}, 0)`;

    if (props.direction === 'right') return `translate(${rect?.left ? (window.innerWidth - rect.left) + 'px' : '100vw'}, 0)`;
  };

  const styles = {
    enter: {
      transform: translate()
    },
    entering: {
      transform: 'translate(0, 0)',
    },
    entered: {
      transform: 'translate(0, 0)',
    },
    exiting: {
      transform: translate()
    },
    exited: {
      transform: translate()
    }
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      transform: theme.transitions.duration.smaller
    };

    return `${((is('simple', props.timeout) ? props.timeout : props.timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = (is('simple', props.timing_function) ? props.timing_function : props.timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      enterOnAdd={!!rootRef.current}

      removeOnExited
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(props.children, {
        ref: item => {
          rootRef.current = item;

          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          ...(props.children.style || {}),

          transform: 'scale(0)',

          transition: `transform ${timeout(status, 'transform')} ${timingFunction}`,

          ...(styles[status] || {}),
        }
      })}
    </Transition>
  );
});

Slide.defaultProps = {
  direction: 'down'
};

export default Slide;
