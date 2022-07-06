import React from 'react';

import { classNames, useAmauiTheme } from '@amaui/style-react';
import { is, wait } from '@amaui/utils';

import TransitionContext from './TransitionContext';

export type TTransitionStatus = 'add' | 'added' | 'enter' | 'entered' | 'exit' | 'exited' | 'removed';

export type TMode = 'in-out' | 'out-in';

const STATUS: Record<TTransitionStatus, TTransitionStatus> = {
  add: 'add',
  added: 'added',

  enter: 'enter',
  entered: 'entered',

  exit: 'exit',
  exited: 'exited',

  removed: 'removed'
};

export interface IProps {
  in?: boolean;

  className?: boolean;

  prefix?: string;

  add?: boolean;
  enter?: boolean;
  exit?: boolean;

  switch?: boolean;

  mode?: TMode;

  addOnEnter?: boolean;
  removeOnExit?: boolean;

  timeout?: number | {
    default?: number;
    add?: number;
    enter?: number;
    exit?: number;
  };

  // An all in one method
  onTransition?: (element: HTMLElement, status: TTransitionStatus,) => void;

  onAdd?: (element: HTMLElement) => void;
  onAdded?: (element: HTMLElement) => void;

  onEnter?: (element: HTMLElement) => void;
  onEntered?: (element: HTMLElement) => void;

  onExit?: (element: HTMLElement) => void;
  onExited?: (element: HTMLElement) => void;

  [p: string]: any;
}

function Transition(props: IProps) {
  const [status, setStatus] = React.useState<TTransitionStatus>();
  const ref = React.useRef<HTMLElement>();
  const statusRef = React.useRef(status);

  const amauiTheme = useAmauiTheme();

  React.useEffect(() => {
    let statusNew: TTransitionStatus;

    if (props.in) {
      statusNew = props.add ? STATUS.add : STATUS.entered;
    }
    else {
      statusNew = (props.addOnEnter || props.removeOnExit) ? STATUS.removed : STATUS.exited;
    }

    // Update
    update(statusNew);
  }, []);

  React.useEffect(() => {
    if (status !== undefined) {
      let statusNew: TTransitionStatus;

      if (props.in) {
        if ([STATUS.enter, STATUS.entered].indexOf(status) === -1) statusNew = STATUS.enter;
      }
      else {
        if ([STATUS.exit, STATUS.exited].indexOf(status) === -1) statusNew = STATUS.exit;
      }

      update(statusNew);
    }
  }, [props.in]);

  const update = async (status_: TTransitionStatus) => {
    statusRef.current = status_;

    if (status_ !== status) {
      switch (status_) {
        case 'removed':
          return;

        case 'add':
          return await add(status_);

        case 'enter':
          return await enter(status_);

        case 'exit':
          return await exit(status_);

        default:
          return;
      }
    }
  };

  const timeout = async (status_: TTransitionStatus) => {
    let duration = is('number', props.timeout) ? props.timeout : is('object', props.timeout) ? props.timeout[status_] !== undefined ? props.timeout[status_] : (props.timeout as any).default : undefined;

    if (!is('number', duration)) duration = amauiTheme.transitions.duration.regular;

    await wait(duration);
  };

  const add = async (status_: TTransitionStatus) => {
    if (statusRef.current !== status_) return;

    updateStatus('add');

    if (props.add) await timeout('add');

    if (statusRef.current === status_) updateStatus('added');
  };

  const enter = async (status_: TTransitionStatus) => {
    if (statusRef.current !== status_) return;

    updateStatus('enter');

    if (props.enter) await timeout('enter');

    if (statusRef.current === status_) updateStatus('entered');
  };

  const exit = async (status_: TTransitionStatus) => {
    if (statusRef.current !== status_) return;

    updateStatus('exit');

    if (props.exit) await timeout('exit');

    if (statusRef.current === status_) updateStatus('exited');
  };

  const updateStatus = (status_: TTransitionStatus) => {
    switch (status_) {
      case 'add':
        setStatus('add');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'add');
        if (is('function', props.onAdd)) props.onAdd(ref.current);
        break;

      case 'added':
        setStatus('added');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'added');
        if (is('function', props.onAdded)) props.onAdded(ref.current);
        break;

      case 'enter':
        setStatus('enter');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'enter');
        if (is('function', props.onEnter)) props.onEnter(ref.current);
        break;

      case 'entered':
        setStatus('entered');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'entered');
        if (is('function', props.onEntered)) props.onEntered(ref.current);
        break;

      case 'exit':
        setStatus('exit');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'exit');
        if (is('function', props.onExit)) props.onExit(ref.current);
        break;

      case 'exited':
        setStatus('exited');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'exited');
        if (is('function', props.onExited)) props.onExited(ref.current);
        break;

      default:
        break;
    }

    // Add className
    if (props.className && is('element', ref.current)) {
      let className = classNames([ref.current.className.split(' '), `${props.prefix || ''}${status_}`]) as string;

      // enter remove any exit classes
      if (status_ === 'enter') className = className.replace(new RegExp(`${props.prefix || ''}exit(ed)?`, 'g'), '');

      // entered remove enter class
      if (status_ === 'entered') className = className.replace(new RegExp(`${props.prefix || ''}enter`, 'g'), '');

      // exit remove any enter classes
      if (status_ === 'exit') className = className.replace(new RegExp(`${props.prefix || ''}enter(ed)?`, 'g'), '');

      // exited remove exit class
      if (status_ === 'exited') className = className.replace(new RegExp(`${props.prefix || ''}exit`, 'g'), '');

      className = className.replace(/ +/g, ' ').trim();

      ref.current.className = className;
    }
  };

  if (status === 'removed') return null;

  const value = {
    status
  };

  return (
    <TransitionContext.Provider value={value}>
      {is('function', props.children) ? props.children(status) : React.cloneElement(props.children, { ref })}
    </TransitionContext.Provider>
  );
};

Transition.defaultProps = {
  enter: true,
  exit: true,

  mode: 'out-in'
} as IProps;

export default Transition;
