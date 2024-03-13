import React from 'react';

import { is, wait } from '@amaui/utils';
import AmauiSubscription from '@amaui/subscription';
import { classNames, useAmauiTheme, TTransitionsDurationProperties } from '@amaui/style-react';

import TransitionContext from './Context';
import { reflow } from '../utils';
import { IBaseElement } from '../types';

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

export interface ITransitionDelay {
  default?: number;
  add?: number;
  enter?: number;
  exit?: number;
}

export interface ITransition extends Omit<IBaseElement, 'children' | 'className'> {
  in?: boolean;

  name?: string;

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

  delay?: TTransitionsDurationProperties | number | ITransitionDelay;

  duration?: TTransitionsDurationProperties | number | ITransitionDelay;

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

const Transition: React.FC<ITransition> = (props_) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTransition?.props?.default, ...props_ }), [props_]);

  const {
    in: inProp_,

    name,

    prefix,

    run,

    append,
    add: add_,
    enter: enter_ = true,
    exit: exit_ = true,

    enterOnAdd = props.add || props.enter,
    exitOnAdd,

    noAbruption,

    removeOnExited,

    preEnterAppendTimeout = 14,

    delay: delay_,

    duration: duration_,

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
      const sub = (item: TTransitionStatus) => {
        if (item === 'entered') {
          setInProp(inProp_);

          subs.current.status.unsubscribe(sub);
        }
      };

      subs.current.status.subscribe(sub);
    }
    else if (inProp_ && noAbruption && ['exit', 'exiting'].indexOf(subs.current.status.value) > -1) {
      const sub = (item: TTransitionStatus) => {
        if (item === 'exited') {
          setInProp(inProp_);

          subs.current.status.unsubscribe(sub);
        }
      };

      subs.current.status.subscribe(sub);
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

  const delay = React.useCallback(async (status_: TTransitionStatus) => {
    let value: any = delay_;

    if (
      is('string', value) &&
      theme.transitions.duration[value as TTransitionsDurationProperties] !== undefined
    ) value = theme.transitions.duration[value as TTransitionsDurationProperties];

    if (is('object', value)) value = value[status_] !== undefined ? value[status_] : (value as any).default;

    if (!(is('number', value) && value > 0)) return;

    await wait(value);
  }, [delay_, theme]);

  const duration = React.useCallback(async (status_: TTransitionStatus) => {
    let value: any = duration_;

    if (
      is('string', value) &&
      theme.transitions.duration[value as TTransitionsDurationProperties] !== undefined
    ) value = theme.transitions.duration[value as TTransitionsDurationProperties];

    if (is('object', value)) value = value[status_] !== undefined ? value[status_] : (value as any).default;

    if (!is('number', value)) value = theme.transitions.duration.rg;

    if (!(is('number', value) && value > 0)) return;

    await wait(value);
  }, [duration_, theme]);

  const add = async (status_: TTransitionStatus) => {
    if (
      !add_ ||
      (refs.status.current !== status_)
    ) return;

    updateStatus('add');

    // Reflow
    reflow(refs.root.current);

    await delay('add');

    // Prevent update batches
    await wait(14);

    updateStatus('adding');

    // await duration('add');

    if (refs.status.current === status_) updateStatus('added');
  };

  const enter = async (status_: TTransitionStatus) => {
    if (
      !enter_ ||
      (
        status_ !== 'appended' &&
        (refs.status.current !== status_ || !refs.inProp.current)
      )
    ) return;

    updateStatus('enter');

    // Reflow
    reflow(refs.root.current);

    await delay('enter');

    // Prevent update batches
    await wait(14);

    updateStatus('entering');

    await duration('enter');

    if (refs.status.current?.indexOf('exit') === -1) updateStatus('entered');
  };

  const exit = async (status_: TTransitionStatus) => {
    if (
      !exit_ ||
      (refs.status.current !== status_ || refs.inProp.current)
    ) return;

    updateStatus('exit');

    // Reflow
    reflow(refs.root.current);

    await delay('exit');

    // Prevent update batches
    await wait(14);

    updateStatus('exiting');

    await duration('exit');

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
        if (is('function', onEntered)) onEntered(refs.root.current);

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

  const value_ = {
    status
  };

  return (
    <TransitionContext.Provider value={value_}>
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
};

Transition.displayName = 'amaui-Transition';

export default Transition;
