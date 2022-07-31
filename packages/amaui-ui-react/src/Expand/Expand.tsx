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

const Expand = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiExpand?.props?.default }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>()
  };
  const [rect, setRect] = React.useState<DOMRect>(undefined);

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
    expandSize,
    orientation,

    className,

    children,

    ...other
  } = props;

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

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
      [prop]: expandSize !== undefined ? expandSize : '0',
      overflow: 'hidden'
    },
    exiting: {
      [prop]: expandSize !== undefined ? expandSize : '0',
      overflow: 'hidden'
    },
    exited: {
      [prop]: expandSize !== undefined ? expandSize : '0',
      overflow: 'hidden'
    }
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      [prop]: theme.transitions.duration.rg
    };

    return `${((is('simple', timeout) ? timeout : timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      {...props}

      onInit={element => setRect(element?.getBoundingClientRect())}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(<Wrapper children={children} />, {
          ...other,

          ref: item => {
            refs.root.current = item;

            if (ref) ref.current = item;

            if (ref_) ref_.current = item;
          },

          style: {
            position: 'relative',

            transition: `${prop} ${timeout(status, prop)} ${timingFunction(status)}`,

            visibility: status === 'exited' && !inProp && expandSize === undefined ? 'hidden' : undefined,

            ...(rect && styles[status] || {}),

            ...(children?.props?.style || {}),
          }
        })
      }}
    </Transition>
  );
});

export default Expand;
