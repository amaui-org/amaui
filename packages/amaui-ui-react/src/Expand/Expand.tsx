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

  const rect = refs.rect.current;

  let prop = 'height';

  if (orientation === 'horizontal') prop = 'width';

  const styles = {
    appended: {
      position: 'absolute',
      left: '-40000px',
      height: 'auto',
      visibility: 'hidden'
    },

    add: {
      [prop]: 0,
      overflow: 'hidden'
    },
    adding: {
      [prop]: rect && `${rect[prop]}px`,
      overflow: 'hidden'
    },
    added: {
      [prop]: rect && `${rect[prop]}px`
    },

    enter: {
      [prop]: 0,
      overflow: 'hidden'
    },
    entering: {
      [prop]: rect && `${rect[prop]}px`,
      overflow: 'hidden'
    },
    entered: {
      [prop]: 'auto'
    },

    exit: {
      [prop]: rect && `${rect[prop]}px`,
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
      append

      {...props}

      onInit={element => refs.rect.current = element?.getBoundingClientRect()}

      onEnter={(element: any) => {
        const rect_ = element?.getBoundingClientRect();

        if (rect_?.height > refs.rect.current?.height) refs.rect.current = rect_;
      }}

      onTransition={(element: any, status: any) => {
        const rect_ = element?.getBoundingClientRect();

        console.log(1114, rect_?.height, status);
      }}
    >
      {(status: TTransitionStatus, ref_) => {
        console.log(1, status, styles[status], `${prop} ${timeout(status, prop)} ${timingFunction(status)}`);
        return React.cloneElement(<Wrapper children={children} {...WrapperProps} />, {
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

            ...(styles[status] || {}),

            ...(children?.props?.style || {}),
          }
        })
      }}
    </Transition>
  );
});

Expand.displayName = 'AmauiExpand';

export default Expand;
