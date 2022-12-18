import React from 'react';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { ITransition, TPropsAny, Transition, TTransitionStatus } from '..';

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

export interface IExpand extends ITransition {
  expandSize?: number;

  orientation?: 'veritcal' | 'horizontal';

  WrapperProps?: TPropsAny;
}

const Expand = React.forwardRef((props_: IExpand, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiExpand?.props?.default, ...props_ }), [props_]);

  const refs = {
    root: React.useRef<HTMLElement>(),
    rectStart: React.useRef<any>(),
    rect: React.useRef<any>()
  };

  const {
    in: inProp,
    prefix,
    run,
    append,
    add,
    addValue = 0,
    enter,
    exit,
    enterOnAdd,
    exitOnAdd,
    noAbruption,
    removeOnExited = true,
    delay,
    timeout: timeout_,
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

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

  const styles = (status: TTransitionStatus) => {
    const styles_ = (refs.root.current && window.getComputedStyle(refs.root?.current)) || {};

    const allStyles = {
      appended: {
        position: 'absolute',
        visibility: 'hidden'
      },

      add: {
        transition: 'none',
        [prop]: 0,
        overflow: 'hidden'
      },
      adding: {
        [prop]: refs.rectStart.current && `${refs.rectStart.current[prop]}px`,
        overflow: 'hidden'
      },
      added: {
        [prop]: 'auto'
      },

      enter: {
        transition: 'none',
        [prop]: 0,
        overflow: 'hidden'
      },
      entering: {
        [prop]: refs.rectStart.current && `${refs.rectStart.current[prop]}px`,
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

  const timeout = (status: TTransitionStatus, property = 'opacity') => {
    const properties = {
      [prop]: theme.transitions.duration.rg
    };

    return `${((is('simple', timeout) ? timeout : timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  const children_: any = React.useMemo(() => <Wrapper {...WrapperProps}>{children}</Wrapper>, [children]);

  return (
    <Transition
      append={!removeOnExited}

      removeOnExited

      preEnterAppendTimeout={70}

      {...props}

      onAppended={element => {
        if (!removeOnExited && !refs.rectStart.current) {
          refs.rectStart.current = element?.getBoundingClientRect();

          if (refs.rectStart.current) refs.rectStart.current[prop] += addValue;
        }
      }}

      onEnter={element => {
        refs.rectStart.current = element?.getBoundingClientRect();

        if (refs.rectStart.current) refs.rectStart.current[prop] += addValue;
      }}
    >
      {(status: TTransitionStatus, ref_) => {
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

            transition: `${prop} ${timeout(status, prop)} ${timingFunction(status)} ${delay ? `${delay}ms` : ''}${addTransition ? `, ${addTransition}` : ''}`,

            visibility: status === 'exited' && !inProp && expandSize === undefined ? 'hidden' : undefined,

            ...styles(status),

            ...style
          }
        });
      }}
    </Transition>
  );
});

Expand.displayName = 'amaui-Expand';

export default Expand;
