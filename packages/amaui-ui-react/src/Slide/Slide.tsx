import React from 'react';

import is from '@amaui/utils/is';
import { useAmauiTheme } from '@amaui/style-react';

import { ITransition, Transition, TTransitionStatus } from '..';

export interface ISlide extends ITransition {
  root?: HTMLElement;
  min?: number;
  direction?: 'top' | 'left' | 'bottom' | 'right';
  timing_function?: string | Record<string, string>;
  addTransition?: string;
  delay?: number;
}

const Slide = React.forwardRef((props_: ISlide, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiSlide?.props?.default, ...props_ }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>(),
    rect: React.useRef<any>()
  };

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

    root,
    min,
    direction = 'bottom',
    timing_function,
    addTransition,
    delay,

    className,
    style,

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

    const other_: any = {};

    if (min === undefined) {
      other_.visibility = 'hidden';
    }

    const allStyles = {
      appended: {
        visibility: 'hidden'
      },

      add: {
        transition: 'none',

        transform: translateValue,

        ...other_
      },
      adding: {
        transform: 'translate(0, 0)',
        visibility: 'visible'
      },
      added: {
        transform: 'none',
        visibility: 'visible'
      },

      enter: {
        transition: 'none',

        transform: min !== undefined ? transform : translateValue,

        ...other_
      },
      entering: {
        transform: 'translate(0, 0)',
        visibility: 'visible'
      },
      entered: {
        transform: 'none',
        visibility: 'visible'
      },

      exit: {
        transform,
        visibility: 'visible'
      },
      exiting: {
        transform: translateValueMin,
        visibility: 'visible'
      },
      exited: {
        transform: min !== undefined ? translateValueMin : transform,

        ...other_
      }
    };

    return allStyles[status];
  };

  const timeout = (status: TTransitionStatus, property = 'transform') => {
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
        if (min === undefined) {
          element.style.visibility = 'hidden';
          element.style.transition = 'none';
          element.style.transform = 'none';

          refs.rect.current = element?.getBoundingClientRect();

          // Clean up
          element.style.removeProperty('transition');
        }
      }}

      onExit={element => {
        refs.rect.current = element?.getBoundingClientRect();
      }}

      {...props}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children as any, {
          ...other,

          ref: (item: any) => {
            refs.root.current = item;

            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            if (ref_) {
              if (is('function', ref_)) (ref_ as any)(item);
              else ref_.current = item;
            }

            if ((children as any).ref) {
              if (is('function', (children as any).ref)) (children as any).ref(item);
              else (children as any).ref.current = item;
            }
          },

          style: {
            transition: `transform ${timeout(status)} ${timingFunction(status)} ${delay ? `${delay}ms` : ''}${addTransition ? `, ${addTransition}` : ''}`,

            ...styles(status),

            ...style
          }
        });
      }}
    </Transition>
  );
});

Slide.displayName = 'AmauiSlide';

export default Slide;
