import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Slide = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSlide?.props?.default }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const {
    in: inProp,
    root,
    direction = 'down',
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
    timing_function,

    className,

    children,

    ...other
  } = props;

  const translate = () => {
    const rect = refs.root?.current?.getBoundingClientRect();

    const h = root ? root.offsetHeight : window.innerHeight;
    const w = root ? root.offsetWidth : window.innerWidth;

    const top = root ? refs.root.current?.offsetTop : rect?.top;
    const left = root ? refs.root.current?.offsetLeft : rect?.left;
    const right = root ? refs.root.current?.offsetLeft + refs.root.current?.offsetWidth : rect?.right;
    const bottom = root ? refs.root.current?.offsetTop + refs.root.current?.offsetHeight : rect?.bottom;

    if (direction === 'top') return `translate(0, -${bottom !== undefined ? bottom + 'px' : '100vh'})`;

    if (direction === 'left') return `translate(-${right !== undefined ? right + 'px' : '100vw'}, 0)`;

    if (direction === 'right') return `translate(${left !== undefined ? w - left + 'px' : '100vw'}, 0)`;

    if (direction === 'bottom') return `translate(0, ${top !== undefined ? Math.abs(h - top) + 'px' : '100vh'})`;
  };

  const styles = (status: TTransitionStatus) => {
    if (!status) return { visibility: 'hidden' };

    const transform = refs.root.current && window.getComputedStyle(refs.root?.current).transform;

    const translateValue = translate();

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',
        visibility: 'hidden',

        transform: translateValue
      },
      adding: {
        transform: 'translate(0, 0)'
      },
      added: {
        transform: 'none'
      },

      enter: {
        transition: 'none',
        visibility: 'hidden',

        transform: translateValue
      },
      entering: {
        transform: 'translate(0, 0)',
      },
      entered: {
        transform: 'none'
      },

      exit: {
        transform: 'none'
      },
      exiting: {
        transform: translateValue
      },
      exited: {
        transform,
        visibility: 'hidden'
      }
    };

    return allStyles[status];
  };

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      transform: theme.transitions.duration.xs
    };

    return `${((is('simple', timeout) ? timeout : timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  return (
    <Transition
      append
      removeOnExited

      {...props}
    >
      {(status: TTransitionStatus, ref_) => React.cloneElement(children, {
        ...other,

        ref: item => {
          refs.root.current = item;

          if (ref) ref.current = item;

          if (ref_) ref_.current = item;
        },

        style: {
          transition: `transform ${timeout(status, 'transform')} ${timingFunction(status)}`,

          ...(styles(status) || {}),

          ...(children?.props?.style || {}),
        }
      })}
    </Transition>
  );
});

Slide.displayName = 'AmauiSlide';

export default Slide;
