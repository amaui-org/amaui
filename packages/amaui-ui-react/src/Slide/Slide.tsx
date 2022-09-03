import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { Transition, TTransitionStatus } from '..';

const Slide = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSlide?.props?.default }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>(),
    rect: React.useRef<any>()
  };

  const {
    in: inProp,
    root,
    min,
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

  const translate = (useMin = false) => {
    const rect = !removeOnExited ? refs.rect.current : refs.root?.current?.getBoundingClientRect();

    const { width = 0, height = 0 } = rect || {};

    const h = root ? root.offsetHeight : window.innerHeight;
    const w = root ? root.offsetWidth : window.innerWidth;

    const top = root ? refs.root.current?.offsetTop : rect?.top;
    const left = root ? refs.root.current?.offsetLeft : rect?.left;
    const right = root ? refs.root.current?.offsetLeft + refs.root.current?.offsetWidth : rect?.right;
    const bottom = root ? refs.root.current?.offsetTop + refs.root.current?.offsetHeight : rect?.bottom;

    let toAdd = 0;

    if (min !== undefined && useMin) toAdd = min;

    if (direction === 'top') return `translate(0, ${bottom !== undefined ? ((!inProp && bottom < height) ? -height : -bottom) + toAdd + 'px' : '-100vh'})`;

    if (direction === 'left') return `translate(${right !== undefined ? ((!inProp && right < width) ? -width : -right) + toAdd + 'px' : '-100vw'}, 0)`;

    if (direction === 'right') return `translate(${left !== undefined ? ((!inProp && Math.abs(w - left) < width) ? width : Math.abs(w - left)) - toAdd + 'px' : '100vw'}, 0)`;

    if (direction === 'bottom') return `translate(0, ${top !== undefined ? ((!inProp && Math.abs(h - top) < height) ? height : Math.abs(h - top)) - toAdd + 'px' : '100vh'})`;
  };

  const styles = (status: TTransitionStatus) => {
    if (!status) return { visibility: 'hidden' };

    const { transform = 'none' } = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const translateValueMin = translate(true);

    const translateValue = translate();

    const other: any = {};

    if (min === undefined) {
      other.visibility = 'hidden';
    }

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',

        transform: translateValue,

        ...other
      },
      adding: {
        transform: 'translate(0, 0)'
      },
      added: {
        transform: 'none'
      },

      enter: {
        transition: 'none',

        transform: translateValue,

        ...other
      },
      entering: {
        transform: 'translate(0, 0)'
      },
      entered: {
        transform: 'none'
      },

      exit: {
        transform
      },
      exiting: {
        transform: translateValueMin
      },
      exited: {
        transform: min !== undefined ? translateValueMin : transform,

        ...other
      }
    };

    return allStyles[status];
  };

  const timeout = (status: TTransitionStatus, property: string = 'transform') => {
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

      onAppended={element => {
        refs.rect.current = element?.getBoundingClientRect();
      }}

      onEnter={element => {
        element.style.visibility = 'hidden';
        element.style.transition = 'none';
        element.style.transform = 'none';

        refs.rect.current = element?.getBoundingClientRect();

        // Clean up
        element.style.removeProperty('visibility');
      }}

      onExit={element => {
        refs.rect.current = element?.getBoundingClientRect();
      }}

      {...props}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children, {
          ...other,

          ref: item => {
            refs.root.current = item;

            if (ref) ref.current = item;

            if (ref_) ref_.current = item;

            if (children.ref) children.ref.current = item;
          },

          style: {
            transition: `transform ${timeout(status)} ${timingFunction(status)}`,

            ...styles(status),

            ...children?.props?.style,
          }
        });
      }}
    </Transition>
  );
});

Slide.displayName = 'AmauiSlide';

export default Slide;
