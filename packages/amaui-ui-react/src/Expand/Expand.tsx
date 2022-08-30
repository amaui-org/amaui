import React from 'react';

import { is } from '@amaui/utils';
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
    WrapperProps,

    className,

    children,

    ...other
  } = props;

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

  const styles = () => ({
    appended: {
      position: 'absolute',
      visibility: 'hidden'
    },

    add: {
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
      [prop]: refs.rect.current && `${refs.rect.current[prop]}px`,
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
  });

  const timeout = (status: TTransitionStatus, property: string = 'opacity') => {
    const properties = {
      [prop]: theme.transitions.duration.rg
    };

    return `${((is('simple', timeout) ? timeout : timeout[status]) || properties[property] - (status === 'exiting' ? 30 : 0))}ms`;
  };

  const timingFunction = status => (is('simple', timing_function) ? timing_function : timing_function[status]) || theme.transitions.timing_function.standard;

  const children_ = React.useMemo(() => <Wrapper {...WrapperProps}>{children}</Wrapper>, [children]);

  return (
    <Transition
      removeOnExited

      preEnterAppendTimeout={70}

      {...props}

      onEnter={element => {
        if (!refs.rectStart.current) {
          refs.rectStart.current = element?.getBoundingClientRect();

          if (refs.rectStart.current) refs.rectStart.current[prop] += addValue;
        }
      }}

      onExit={element => {
        refs.rect.current = element?.getBoundingClientRect();
      }}
    >
      {(status: TTransitionStatus, ref_) => {
        return React.cloneElement(children_, {
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

            ...styles()[status],

            ...children?.props?.style,
          }
        })
      }}
    </Transition >
  );
});

Expand.displayName = 'AmauiExpand';

export default Expand;
