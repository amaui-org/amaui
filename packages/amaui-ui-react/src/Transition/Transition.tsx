import React from 'react';

import is from '@amaui/utils/is';
import wait from '@amaui/utils/wait';
import AmauiSubscription from '@amaui/subscription';
import { classNames, useAmauiTheme } from '@amaui/style-react';

import TransitionContext from './TransitionContext';
import { reflow } from '../utils';

export type TTransitionStatus = 'add' | 'added' | 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | 'removed';

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

  run?: boolean;

  add?: boolean;
  enter?: boolean;
  exit?: boolean;

  enterOnAdd?: boolean;
  exitOnAdd?: boolean;

  noAbruption?: boolean;

  removeOnExited?: boolean;

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
  const [inProp, setInProp] = React.useState(props.in);
  const [status, setStatus] = React.useState<TTransitionStatus>(() => {
    let statusNew: TTransitionStatus = '' as any;

    if (inProp) {
      statusNew = props.add ? STATUS.add : STATUS.entered;

      if (props.enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (props.enterOnAdd || props.removeOnExited) ? STATUS.removed : STATUS.exited;

      if (props.exitOnAdd) statusNew = STATUS.exit;
    }

    return statusNew;
  });
  const setAdded = React.useState(false)[1];
  const subs = React.useRef({
    status: new AmauiSubscription()
  });
  const refs = {
    root: React.useRef<HTMLElement>(),
    status: React.useRef(status)
  };

  const theme = useAmauiTheme();

  React.useEffect(() => {
    let statusNew: TTransitionStatus;

    if (inProp) {
      statusNew = props.add ? STATUS.add : STATUS.entered;

      if (props.enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (props.enterOnAdd || props.removeOnExited) ? STATUS.removed : STATUS.exited;

      if (props.exitOnAdd) statusNew = STATUS.exit;
    }

    // Update
    update(statusNew);

    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      let statusNew: TTransitionStatus;

      if (inProp) {
        if ([STATUS.enter, STATUS.entered].indexOf(status) === -1) statusNew = STATUS.enter;
      }
      else {
        if ([STATUS.exit, STATUS.exited].indexOf(status) === -1) statusNew = STATUS.exit;
      }

      if (status !== statusNew) {
        // Added
        if (inProp && (!refs.root.current || (refs.root.current && refs.root.current.className.indexOf('removed') > -1))) {
          // We re add the element and get the ref value
          // for update below to use it for enter
          setAdded(added => !added);

          setTimeout(() => update(statusNew));
        }
        else update(statusNew);
      }
    }
  }, [inProp]);

  React.useEffect(() => {
    if (status === STATUS.exited && props.removeOnExited) {
      setStatus('removed');

      // Subscriptions
      subs.current.status.emit('removed');
    }
  }, [status]);

  React.useEffect(() => {
    if (!props.in && props.noAbruption && ['enter', 'entering'].indexOf(status) > -1) {
      const method = (item: TTransitionStatus) => {
        if (item === 'entered') {
          setInProp(props.in);

          subs.current.status.unsubscribe(method);
        }
      };

      subs.current.status.subscribe(method);
    }
    else if (props.in && props.noAbruption && ['exit', 'exiting'].indexOf(status) > -1) {
      const method = (item: TTransitionStatus) => {
        if (item === 'exited') {
          setInProp(props.in);

          subs.current.status.unsubscribe(method);
        }
      };

      subs.current.status.subscribe(method);
    }
    else if (props.in !== inProp) setInProp(props.in);
  }, [props.in]);

  const update = async (status_: TTransitionStatus) => {
    refs.status.current = status_;

    switch (status_) {
      case 'add':
        return await add(status_);

      case 'enter':
        return await enter(status_);

      case 'exit':
        return await exit(status_);

      case 'exited':
        return updateStatus(props.removeOnExited ? 'removed' : status_);

      default:
        return updateStatus(status_);
    }
  };

  const timeout = async (status_: TTransitionStatus) => {
    let duration = is('number', props.timeout) ? props.timeout : is('object', props.timeout) ? props.timeout[status_] !== undefined ? props.timeout[status_] : (props.timeout as any).default : undefined;

    if (!is('number', duration)) duration = theme.transitions.duration.rg;

    await wait(duration);
  };

  const add = async (status_: TTransitionStatus) => {
    if (refs.status.current !== status_) return;

    updateStatus('add');

    if (props.add) await timeout('add');

    if (refs.status.current === status_) updateStatus('added');
  };

  const enter = async (status_: TTransitionStatus) => {
    if (refs.status.current !== status_) return;

    // Re add / add element for ref value
    updateStatus('enter');

    // Reflow
    reflow(refs.root.current);

    // Add exiting class for animation
    setTimeout(() => updateStatus('entering'));

    if (props.enter) await timeout('enter');

    if (refs.status.current.indexOf('exit') === -1) updateStatus('entered');
  };

  const exit = async (status_: TTransitionStatus) => {
    if (refs.status.current !== status_) return;

    updateStatus('exit');

    // Reflow
    reflow(refs.root.current);

    // Prevent update batches
    setTimeout(() => updateStatus('exiting'));

    if (props.exit) await timeout('exit');

    if (refs.status.current.indexOf('enter') === -1) updateStatus('exited');
  };

  const onEntered = (element: HTMLElement) => {
    if (is('function', props.onEntered)) props.onEntered(element);

    if (props.run && inProp) setInProp(false);
  };

  const updateStatus = (status_: TTransitionStatus) => {
    setStatus(status_);

    // Subscriptions
    subs.current.status.emit(status_);

    switch (status_) {
      case 'add':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onAdd)) props.onAdd(refs.root.current);

        break;

      case 'added':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onAdded)) props.onAdded(refs.root.current);

        break;

      case 'enter':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onEnter)) props.onEnter(refs.root.current);

        break;

      case 'entering':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onEntering)) props.onEntering(refs.root.current);

        break;

      case 'entered':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);

        onEntered(refs.root.current);

        break;

      case 'exit':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onExit)) props.onExit(refs.root.current);

        break;

      case 'exiting':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onExiting)) props.onExiting(refs.root.current);

        break;

      case 'exited':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onExited)) props.onExited(refs.root.current);

        break;

      case 'removed':
        if (is('function', props.onTransition)) props.onTransition(refs.root.current, status_);
        if (is('function', props.onRemoved)) props.onRemoved(refs.root.current);

        break;

      default:
        break;
    }

    // Add className
    if (props.className && is('element', refs.root.current)) {
      let className = classNames([refs.root.current.className.split(' ')]);

      // Remove all previous classes
      className = className.replace(new RegExp(`${props.prefix || ''}(add|enter|exit)(ed|ing)?`, 'g'), '');

      // Add
      className += ` ${props.prefix || ''}${status_}`;

      className = className.replace(/ +/g, ' ').trim();

      refs.root.current.className = className;
    }
  };

  if (status === 'removed') return null;

  const value = {
    status
  };

  return (
    <TransitionContext.Provider value={value}>
      {
        is('function', props.children) ?
          props.children(status, refs.root) :

          React.cloneElement(props.children, {
            ref: item => {
              refs.root.current = item;

              if (props.ref) props.ref.current = item;
            }
          })
      }
    </TransitionContext.Provider>
  );
};

Transition.defaultProps = {
  enter: true,
  exit: true
} as IProps;

export default Transition;
