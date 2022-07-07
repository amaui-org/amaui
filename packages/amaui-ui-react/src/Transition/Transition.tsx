import React from 'react';

import { classNames, useAmauiTheme } from '@amaui/style-react';
import { is, wait } from '@amaui/utils';

import TransitionContext from './TransitionContext';
import { reflow } from '../utils';

export type TTransitionStatus = 'add' | 'added' | 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | 'removed';

export type TMode = 'in-out' | 'out-in';

export const STATUS: Record<TTransitionStatus, TTransitionStatus> = {
  add: 'add',
  added: 'added',

  enter: 'enter',
  entering: 'entering',
  entered: 'entered',

  exit: 'exit',
  exiting: 'exiting',
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

  enterOnAdd?: boolean;
  exitOnAdd?: boolean;

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
  onEntering?: (element: HTMLElement) => void;
  onEntered?: (element: HTMLElement) => void;

  onExit?: (element: HTMLElement) => void;
  onExiting?: (element: HTMLElement) => void;
  onExited?: (element: HTMLElement) => void;

  onRemoved?: (element: HTMLElement) => void;

  [p: string]: any;
}

function Transition(props: IProps) {
  const [init, setInit] = React.useState(false);
  const [status, setStatus] = React.useState<TTransitionStatus>(() => {
    let statusNew: TTransitionStatus;

    if (props.in) {
      statusNew = props.add ? STATUS.add : STATUS.entered;

      if (props.enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (props.addOnEnter || props.removeOnExit) ? STATUS.removed : STATUS.exited;

      if (props.exitOnAdd) statusNew = STATUS.exit;
    }

    return statusNew;
  });
  const setAdded = React.useState(false)[1];
  const ref = React.useRef<HTMLElement>();
  const statusRef = React.useRef(status);

  const amauiTheme = useAmauiTheme();

  React.useEffect(() => {
    let statusNew: TTransitionStatus;

    if (props.in) {
      statusNew = props.add ? STATUS.add : STATUS.entered;

      if (props.enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (props.addOnEnter || props.removeOnExit) ? STATUS.removed : STATUS.exited;

      if (props.exitOnAdd) statusNew = STATUS.exit;
    }

    // Update
    update(statusNew);

    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      let statusNew: TTransitionStatus;

      if (props.in) {
        if ([STATUS.enter, STATUS.entered].indexOf(status) === -1) statusNew = STATUS.enter;
      }
      else {
        if ([STATUS.exit, STATUS.exited].indexOf(status) === -1) statusNew = STATUS.exit;
      }

      if (status !== statusNew) {
        // Added
        if (props.in && (!ref.current || (ref.current && ref.current.className.indexOf('removed') > -1))) {
          // We re add the element and get the ref value
          // for update below to use it for enter
          setAdded(added => !added);

          setTimeout(() => update(statusNew));
        }
        else update(statusNew);
      }
    }
  }, [props.in]);

  React.useEffect(() => {
    if (status === STATUS.exited && props.removeOnExit) setStatus('removed');
  }, [status]);

  const update = async (status_: TTransitionStatus) => {
    statusRef.current = status_;

    switch (status_) {
      case 'add':
        return await add(status_);

      case 'enter':
        return await enter(status_);

      case 'exit':
        return await exit(status_);

      case 'exited':
        return updateStatus(props.removeOnExit ? 'removed' : status_);

      default:
        return updateStatus(status_);
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

    // Re add / add element for ref value
    updateStatus('enter');

    // Reflow
    reflow(ref.current);

    // Add exiting class for animation
    updateStatus('entering');

    if (props.enter) await timeout('enter');

    if (statusRef.current.indexOf('exit') === -1) updateStatus('entered');
  };

  const exit = async (status_: TTransitionStatus) => {
    if (statusRef.current !== status_) return;

    updateStatus('exit');

    // Reflow
    reflow(ref.current);

    // Prevent update batches
    setTimeout(() => updateStatus('exiting'));

    if (props.exit) await timeout('exit');

    if (statusRef.current.indexOf('enter') === -1) updateStatus('exited');
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

      case 'entering':
        setStatus('entering');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'entering');
        if (is('function', props.onEntering)) props.onEntering(ref.current);

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

      case 'exiting':
        setStatus('exiting');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'exiting');
        if (is('function', props.onExiting)) props.onExiting(ref.current);

        break;

      case 'exited':
        setStatus('exited');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'exited');
        if (is('function', props.onExited)) props.onExited(ref.current);

        break;

      case 'removed':
        setStatus('removed');

        if (is('function', props.onTransition)) props.onTransition(ref.current, 'removed');
        if (is('function', props.onRemoved)) props.onRemoved(ref.current);

        break;

      default:
        break;
    }

    // Add className
    if (props.className && is('element', ref.current)) {
      let className = classNames([ref.current.className.split(' ')]) as string;

      // Remove all previous classes
      className = className.replace(new RegExp(`${props.prefix || ''}(add|enter|exit)(ed|ing)?`, 'g'), '');

      // Add
      className += ` ${props.prefix || ''}${status_}`;

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
      {is('function', props.children) ? props.children(status, ref) : React.cloneElement(props.children, { ref })}
    </TransitionContext.Provider>
  );
};

Transition.defaultProps = {
  enter: true,
  exit: true
} as IProps;

export default Transition;
