import React from 'react';

import { is, wait } from '@amaui/utils';
import AmauiSubscription from '@amaui/subscription';
import { classNames, useAmauiTheme, TTransitionsDurationProperties } from '@amaui/style-react';

import TransitionContext from './TransitionContext';
import { IBaseElement, reflow } from '../utils';

export type TTransitionStatus = 'appended' | 'add' | 'adding' | 'added' | 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | 'removed';

export const STATUS: Record<TTransitionStatus, TTransitionStatus> = {
  appended: 'appended',

  add: 'add',
  added: 'added',
  adding: 'adding',

  enter: 'enter',
  entering: 'entering',
  entered: 'entered',

  exit: 'exit',
  exiting: 'exiting',
  exited: 'exited',

  removed: 'removed'
};

export interface ITransition extends Omit<IBaseElement, 'children' | 'className'> {
  in?: boolean;

  className?: boolean;

  prefix?: string;

  run?: boolean;

  append?: boolean;
  add?: boolean;
  enter?: boolean;
  exit?: boolean;

  enterOnAdd?: boolean;
  exitOnAdd?: boolean;

  noAbruption?: boolean;

  removeOnExited?: boolean;

  preEnterAppendTimeout?: number;

  timeout?: TTransitionsDurationProperties | number | {
    default?: number;
    add?: number;
    enter?: number;
    exit?: number;
  };

  // An all in one method
  onTransition?: (element: HTMLElement, status: TTransitionStatus) => void;

  onInit?: (element: HTMLElement) => void;

  onAppended?: (element: HTMLElement) => void;

  onAdd?: (element: HTMLElement) => void;
  onAdding?: (element: HTMLElement) => void;
  onAdded?: (element: HTMLElement) => void;

  onEnter?: (element: HTMLElement) => void;
  onEntering?: (element: HTMLElement) => void;
  onEntered?: (element: HTMLElement) => void;

  onExit?: (element: HTMLElement) => void;
  onExiting?: (element: HTMLElement) => void;
  onExited?: (element: HTMLElement) => void;

  onRemoved?: (element: HTMLElement) => void;

  children?: any;

  [p: string]: any;
}

function Transition(props_: ITransition) {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTransition?.props?.default }), [props_]);

  const {
    in: inProp_,

    prefix,

    run,

    append,
    add: add_,
    enter: enter_ = true,
    exit: exit_ = true,

    enterOnAdd,
    exitOnAdd,

    noAbruption,

    removeOnExited,

    preEnterAppendTimeout = 14,
    timeout: timeout_,

    // An all in one method
    onTransition,

    onInit,

    onAppended,

    onAdd,
    onAdding,
    onAdded,

    onEnter,
    onEntering,
    onEntered: onEntered_,

    onExit,
    onExiting,
    onExited,

    onRemoved,

    className,

    children,

    ref
  } = props;

  const [init, setInit] = React.useState(false);
  const [inProp, setInProp] = React.useState(inProp_);
  const [status, setStatus] = React.useState<TTransitionStatus>(() => {
    let statusNew: TTransitionStatus = '' as any;

    if (inProp) {
      statusNew = add_ ? STATUS.add : STATUS.entered;

      if (enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (enterOnAdd || removeOnExited) ? STATUS.removed : STATUS.exited;

      if (exitOnAdd) statusNew = STATUS.exit;
    }

    if (append) statusNew = 'appended';

    return statusNew;
  });

  const subs = React.useRef({
    status: new AmauiSubscription()
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    status: React.useRef<any>(),
    inProp: React.useRef<any>(),
    prefix: React.useRef<any>()
  };

  refs.status.current = status;

  refs.inProp.current = inProp;

  refs.prefix.current = prefix;

  React.useEffect(() => {
    let statusNew: TTransitionStatus;

    if (status === 'appended') {
      if (is('function', onTransition)) onTransition(refs.root.current, 'appended');

      if (is('function', onAppended)) onAppended(refs.root.current);
    }

    if (inProp) {
      statusNew = add_ ? STATUS.add : STATUS.entered;

      if (enterOnAdd) statusNew = STATUS.enter;
    }
    else {
      statusNew = (enterOnAdd || removeOnExited) ? STATUS.removed : STATUS.exited;

      if (exitOnAdd) statusNew = STATUS.exit;
    }

    if (is('function', onInit)) onInit(refs.root.current);

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

      // Added
      const classNameValue = (refs.root.current?.className as unknown as SVGAnimatedString)?.baseVal || refs.root.current?.className;

      if (inProp && (!refs.root.current || (classNameValue?.indexOf('removed') > -1))) {
        // We add the element and get the ref value
        // for update below to use it for enter
        update('appended');

        // Prevent update batches
        setTimeout(() => update(statusNew), preEnterAppendTimeout);
      }
      else update(statusNew);
    }
  }, [inProp]);

  React.useEffect(() => {
    if (status === STATUS.exited && removeOnExited) {
      updateStatus('removed');

      // Subscriptions
      subs.current.status.emit('removed');
    }
  }, [status]);

  React.useEffect(() => {
    if (!inProp_ && noAbruption && ['enter', 'entering'].indexOf(subs.current.status.value) > -1) {
      const method = (item: TTransitionStatus) => {
        if (item === 'entered') {
          setInProp(inProp_);

          subs.current.status.unsubscribe(method);
        }
      };

      subs.current.status.subscribe(method);
    }
    else if (inProp_ && noAbruption && ['exit', 'exiting'].indexOf(subs.current.status.value) > -1) {
      const method = (item: TTransitionStatus) => {
        if (item === 'exited') {
          setInProp(inProp_);

          subs.current.status.unsubscribe(method);
        }
      };

      subs.current.status.subscribe(method);
    }
    else if (
      (!inProp_ && noAbruption && subs.current.status.value === 'entered') ||
      (inProp_ && noAbruption && subs.current.status.value === 'exited') ||
      (inProp_ !== inProp)
    ) setInProp(inProp_);
  }, [inProp_]);

  const update = async (status_: TTransitionStatus, pause?: number) => {
    if (pause !== undefined) await wait(pause);

    refs.status.current = status_;

    switch (status_) {
      case 'add':
        return await add(status_);

      case 'enter':
        return await enter(status_);

      case 'exit':
        return await exit(status_);

      case 'exited':
        return updateStatus(status_);

      default:
        return updateStatus(status_);
    }
  };

  const timeout = async (status_: TTransitionStatus) => {
    let duration: any = timeout_;

    if (
      is('string', timeout_) &&
      theme.transitions.duration[timeout_ as TTransitionsDurationProperties] !== undefined
    ) duration = theme.transitions.duration[timeout_ as TTransitionsDurationProperties];

    if (is('object', timeout_)) duration = timeout_[status_] !== undefined ? timeout_[status_] : (timeout_ as any).default;

    if (!is('number', duration)) duration = theme.transitions.duration.rg;

    await wait(duration);
  };

  const add = async (status_: TTransitionStatus) => {
    if (add_) {
      if (refs.status.current !== status_) return;

      updateStatus('add');

      // Reflow
      reflow(refs.root.current);

      // Prevent update batches
      await wait(14);

      updateStatus('adding');

      if (refs.status.current === status_) updateStatus('added');
    }
  };

  const enter = async (status_: TTransitionStatus) => {
    if (refs.status.current !== status_ || !refs.inProp.current) return;

    updateStatus('enter');

    // Reflow
    reflow(refs.root.current);

    // Prevent update batches
    await wait(14);

    updateStatus('entering');

    if (enter_) await timeout('enter');

    if (refs.status.current?.indexOf('exit') === -1) updateStatus('entered');
  };

  const exit = async (status_: TTransitionStatus) => {
    if (refs.status.current !== status_ || refs.inProp.current) return;

    updateStatus('exit');

    // Reflow
    reflow(refs.root.current);

    // Prevent update batches
    await wait(14);

    updateStatus('exiting');

    if (exit_) await timeout('exit');

    if (refs.status.current?.indexOf('enter') === -1) updateStatus('exited');
  };

  const onEntered = (element: HTMLElement) => {
    if (is('function', onEntered_)) onEntered_(element);

    if (run && inProp) setInProp(false);
  };

  const updateStatus = (status_: TTransitionStatus) => {
    setStatus(status_);

    // Subscriptions
    subs.current.status.emit(status_);

    switch (status_) {
      case 'appended':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onAppended)) onAppended(refs.root.current);

        break;

      case 'add':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onAdd)) onAdd(refs.root.current);

        break;

      case 'adding':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onAdding)) onAdding(refs.root.current);

        break;

      case 'added':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onAdded)) onAdded(refs.root.current);

        break;

      case 'enter':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onEnter)) onEnter(refs.root.current);

        break;

      case 'entering':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onEntering)) onEntering(refs.root.current);

        break;

      case 'entered':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);

        onEntered(refs.root.current);

        break;

      case 'exit':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onExit)) onExit(refs.root.current);

        break;

      case 'exiting':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onExiting)) onExiting(refs.root.current);

        break;

      case 'exited':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onExited)) onExited(refs.root.current);

        break;

      case 'removed':
        if (is('function', onTransition)) onTransition(refs.root.current, status_);
        if (is('function', onRemoved)) onRemoved(refs.root.current);

        break;

      default:
        break;
    }

    // Add className
    if (className && is('element', refs.root.current)) {
      let className_ = classNames([((refs.root.current.className as unknown as SVGAnimatedString)?.baseVal || refs.root.current.className)?.split(' ')]);

      // Remove all previous classes
      className_ = className_.replace(new RegExp(`(^| )${refs.prefix.current || ''}(add|enter|exit)(ed|ing)?($| )`, 'g'), ' ');

      // Add
      className_ += ` ${refs.prefix.current || ''}${status_}`;

      className_ = className_.replace(/ +/g, ' ').trim();

      if ((refs.root.current.className as unknown as SVGAnimatedString)?.baseVal) (refs.root.current.className as unknown as SVGAnimatedString).baseVal = className_;
      else refs.root.current.className = className_;
    }
  };

  if (status === 'removed') return null;

  const value = {
    status
  };

  return (
    <TransitionContext.Provider value={value}>
      {
        is('function', children) ?
          (children as any)(status, refs.root) :

          React.cloneElement(children as any, {
            ref: (item: any) => {
              if (ref) {
                if (is('function', ref)) ref(item);
                else ref.current = item;
              }

              refs.root.current = item;
            }
          })
      }
    </TransitionContext.Provider>
  );
}

Transition.displayName = 'AmauiTransition';

export default Transition;
