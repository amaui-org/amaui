import React from 'react';

import { is, wait } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { ITransition, Transition, TTransitionStatus } from '..';
import { IPropsAny } from '../types';

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

export interface IExpand extends Omit<ITransition, 'className'> {
  // in order to properly
  // evaluate the height of the children
  // relative to width of the parent
  parent?: HTMLElement;

  value?: number;

  expandSize?: number;

  orientation?: 'veritcal' | 'horizontal';

  WrapperProps?: IPropsAny;

  className?: string;
}

const Expand: React.FC<IExpand> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiExpand?.props?.default, ...props_ }), [props_]);

  const {
    in: inProp,

    value: valueProvided,

    // html element reference
    parent,

    prefix,
    run,
    append,
    add,
    enter,
    exit,
    enterOnAdd,
    exitOnAdd,
    noAbruption,
    removeOnExited = true,
    delay,
    duration: duration_,
    timing_function,
    addTransition,
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
    WrapperProps,

    className,
    style,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLDivElement>(),
    value: React.useRef<number>(0),
    init: React.useRef(init)
  };

  refs.init.current = init;

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

  const isTransition = React.useCallback((item: any) => {
    const values = ['Transition', 'Fade', 'Grow', 'Slide', 'Zoom'];

    return values.some(value => item?.includes(value));
  }, []);

  const childrenWithTransition = isTransition(children?.type?.displayName);

  const getValue = React.useCallback((wrapper = refs.element.current) => {
    if (wrapper) {
      const element = wrapper?.children?.[0];

      refs.value.current = (element?.getBoundingClientRect() || {})[prop] || 0;
    }
  }, [prop]);

  const initiate = React.useCallback(async () => {
    if (!refs.init.current) {
      await wait(44);

      getValue();

      setInit(true);
    }
  }, [prop]);

  React.useEffect(() => {
    initiate();
  }, []);

  const styles = (status: TTransitionStatus) => {
    const styles_ = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const allStyles = {
      appended: {
        position: 'fixed',
        left: '1114%',
        visibility: 'hidden'
      },

      enter: {
        transition: 'none',
        [prop]: 0,
        overflow: 'hidden'
      },
      entering: {
        [prop]: `${valueProvided !== undefined ? valueProvided : refs.value.current}px`,
        overflow: 'hidden'
      },
      entered: {
        [prop]: 'auto'
      },

      exit: {
        [prop]: styles_[prop],
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

    return allStyles[status];
  };

  const duration = (status: TTransitionStatus, property = 'opacity') => {
    const properties = {
      [prop]: theme.transitions.duration.rg
    };

    return `${(is('simple', duration) ? duration : duration[status]) || properties[property]}ms`;
  };

  const timingFunction = (status: TTransitionStatus) => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  const children_: any = (
    <Wrapper
      {...WrapperProps}
    >
      {children}
    </Wrapper>
  );

  if (valueProvided === undefined) {
    // if (!parent) return null;

    if (!init) return (
      <div
        ref={refs.element}

        style={{
          position: 'fixed',
          left: '1114%',
          visibility: 'hidden',

          // add with of an actual parent
          // at the moment
          width: parent ? (parent as HTMLElement).clientWidth : undefined,
          height: parent ? (parent as HTMLElement).clientHeight : undefined
        }}
      >
        {/*
        If it's a transition make it in true
        so it renders immediatelly to use the value
      */}
        {React.cloneElement(children, {
          ...(childrenWithTransition && { in: true })
        })}
      </div>
    );
  }

  return (
    <Transition
      removeOnExited

      {...props as any}
    >
      {(status: TTransitionStatus, ref_) => {
        // If children update
        // & value is updated
        if (['appending', 'appended', 'adding', 'added', 'entering', 'entered'].includes(status)) {
          const value = (refs.root.current?.getBoundingClientRect() || {})[prop];

          if (value > 0 && value !== refs.value.current) refs.value.current = value;
        }

        return React.cloneElement(children_, {
          ...other,

          className,

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

            if (children_.ref) {
              if (is('function', children_.ref)) children_.ref(item);
              else children_.ref.current = item;
            }
          },

          style: {
            position: 'relative',

            transition: `${prop} ${duration(status, prop)} ${timingFunction(status)} ${addTransition ? `, ${addTransition}` : ''}`,

            visibility: status === 'exited' && !inProp && expandSize === undefined ? 'hidden' : undefined,

            ...styles(status),

            ...style,

            ...children_?.style
          }
        });
      }}
    </Transition>
  );
});

Expand.displayName = 'amaui-Expand';

export default Expand;
