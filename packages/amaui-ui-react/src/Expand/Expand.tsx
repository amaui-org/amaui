import React from 'react';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { ITransition, Transition, TTransitionStatus } from '..';
import { IPropsAny } from '../types';

const Wrapper = React.forwardRef((props: any, ref: any) => {
  const {
    children,

    style,

    ...other
  } = props;

  return (
    <div
      ref={ref}

      {...other}

      style={{
        width: '100%',

        ...style
      }}
    >
      {props.children}
    </div>
  );
});

export interface IExpand extends Omit<ITransition, 'className'> {
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

  const [parent, setParent] = React.useState<HTMLElement>();
  const [value, setValue] = React.useState<number>(valueProvided);

  const refs = {
    root: React.useRef<HTMLElement>(),
    placeholder: React.useRef<any>(),
    parent: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLDivElement>(),
    value: React.useRef<number>(0)
  };

  refs.parent.current = parent;

  refs.value.current = value;

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

  const isTransition = React.useCallback((item: any) => {
    const values = ['Transition', 'Fade', 'Grow', 'Slide', 'Zoom'];

    return values.some(item_ => item?.includes(item_));
  }, []);

  const childrenWithTransition = isTransition(children?.type?.displayName);

  const init = React.useCallback(async () => {
    if (refs.placeholder.current) {
      const element_ = (refs.placeholder.current as HTMLElement).parentElement;

      setParent(element_);
    }
  }, [prop]);

  React.useEffect(() => {
    // init
    init();
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

  return <>
    {value === undefined && <>
      <div
        ref={refs.placeholder}
      />

      {parent && (
        <Wrapper
          {...WrapperProps}

          ref={(item: any) => {
            if (WrapperProps?.ref) {
              if (is('function', WrapperProps.ref)) WrapperProps?.ref(item);
              else WrapperProps.ref.current = item;
            }

            if (refs.value.current === undefined) {
              setValue(item.getBoundingClientRect()[prop] || 0);
            }
          }}

          style={{
            position: 'fixed',
            left: '1114%',
            visibility: 'hidden',

            width: parent.offsetWidth,

            ...WrapperProps?.style
          }}
        >
          {/*
        If it's a transition make it in true
        so it renders immediatelly to use the value
      */}
          {React.cloneElement(children, {
            ...(childrenWithTransition && { in: true })
          })}
        </Wrapper>
      )}
    </>}

    {value !== undefined && (
      <Transition
        removeOnExited

        {...props as any}
      >
        {(status: TTransitionStatus, ref_) => {
          // If children update
          // & value is updated
          if (['appending', 'appended', 'adding', 'added', 'entering', 'entered'].includes(status)) {
            const value_ = (refs.root.current?.getBoundingClientRect() || {})[prop];

            if (value_ > 0 && value_ !== refs.value.current) setValue(value_);
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
    )}
  </>;
});

Expand.displayName = 'amaui-Expand';

export default Expand;
