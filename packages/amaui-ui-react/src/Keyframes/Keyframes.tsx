import React from 'react';

import { is, wait } from '@amaui/utils';
import AmauiSubscription from '@amaui/subscription';
import { classNames, useAmauiTheme, TTransitionsDurationProperties } from '@amaui/style-react';

import KeyframesContext from './KeyframesContext';
import { reflow } from '../utils';

export type TKeyframesStatus = 'appended' | 'add' | 'adding' | 'added' | 'removed';

export interface IKeyframe {
  name: string;
  timeout: number;
}

interface IProps {
  className?: boolean;

  prefix?: string;

  append?: boolean;
  add?: boolean;

  update?: boolean;

  runOnEnter?: boolean;
  removeOnEnd?: boolean;

  appendStatusPost?: string;

  keyframes?: Array<IKeyframe>;

  timeout?: TTransitionsDurationProperties | number | {
    default?: number;
    add?: number;
  };

  // An all in one method
  onKeyframe?: (element: HTMLElement, status: TKeyframesStatus) => void;

  onAppended?: (element: HTMLElement) => void;

  onAdd?: (element: HTMLElement) => void;
  onAdding?: (element: HTMLElement) => void;
  onAdded?: (element: HTMLElement) => void;

  onRemoved?: (element: HTMLElement) => void;

  [p: string]: any;
}

function Keyframes(props_: IProps) {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiKeyframes?.props?.default }), [props_]);

  const {
    ref,
    append,
    update,
    timeout: timeout_,
    appendStatusPost,
    add: add_,
    runOnEnter,
    removeOnEnd,
    keyframes,
    prefix,

    onKeyframes,
    onAppended,
    onAdd,
    onAdding,
    onAdded,
    onRemoved,

    className,
    children,

  } = props;

  const [init, setInit] = React.useState(false);
  const [status, setStatus] = React.useState<TKeyframesStatus>(() => {
    let statusNew: TKeyframesStatus = '' as any;

    if (append) statusNew = 'appended';

    return statusNew;
  });

  const subs = React.useRef({
    status: new AmauiSubscription()
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    status: React.useRef(status)
  };

  React.useEffect(() => {
    initMethod();
  }, []);

  // Anytime update updates
  // keyframes are ran
  // meaning you can update
  // keyframes between reruns
  // and have any version of
  // animation based on those points
  // ie. Switch ui on and off animation
  React.useEffect(() => {
    if (init) run();
  }, [update]);

  const initMethod = async () => {
    // Appended
    if (status === 'appended') updateStatus(appendStatusPost as any);

    // Add
    if (add_ || status === 'add') await add();

    // Run the method
    // to run the keyframes
    if (runOnEnter) await run();

    // Init
    setInit(true);
  };

  const run = async () => {
    // Run all keyframes
    if (is('array', keyframes)) for (const keyframe of keyframes) await runKeyframe(keyframe);

    if (removeOnEnd) {
      // So exited status has
      // enough time to apply some value
      setStatus('removed');

      // Subscriptions
      subs.current.status.emit('removed');
    }
  };

  const runKeyframe = async (value: IKeyframe) => {
    if (value) {
      const { name, timeout: timeout__ } = value;

      updateStatus(name as any);

      await wait(timeout__ || 0);
    }
  };

  const timeout = async (status_: TKeyframesStatus) => {
    let duration: any = timeout_;

    if (
      is('string', timeout_) &&
      theme.transitions.duration[timeout_ as TTransitionsDurationProperties] !== undefined
    ) duration = theme.transitions.duration[timeout_ as TTransitionsDurationProperties];

    if (is('object', timeout_)) duration = timeout_[status_] !== undefined ? timeout_[status_] : (timeout_ as any).default;

    if (!is('number', duration)) duration = theme.transitions.duration.rg;

    await wait(duration);
  };

  const add = async () => {
    updateStatus('add');

    // Reflow
    reflow(refs.root.current);

    // Add adding class for animation
    setTimeout(() => updateStatus('adding'));

    await timeout('add');

    updateStatus('added');

    await wait(0);
  };

  const updateStatus = (status_: TKeyframesStatus = status) => {
    // Update
    setStatus(status_);

    // Subscriptions
    subs.current.status.emit(status_);

    switch (status_) {
      case 'appended':
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);
        if (is('function', onAppended)) onAppended(refs.root.current);

        break;

      case 'add':
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);
        if (is('function', onAdd)) onAdd(refs.root.current);

        break;

      case 'adding':
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);
        if (is('function', onAdding)) onAdding(refs.root.current);

        break;

      case 'added':
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);
        if (is('function', onAdded)) onAdded(refs.root.current);

        break;

      case 'removed':
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);
        if (is('function', onRemoved)) onRemoved(refs.root.current);

        break;

      default:
        if (is('function', onKeyframes)) onKeyframes(refs.root.current, status_);

        break;
    }

    // Add className
    if (className && is('element', refs.root.current)) {
      let className = classNames([refs.root.current.className.split(' ')]);

      // Remove all previous state classes
      className = className.replace(new RegExp(`${prefix || ''}(add)(ed|ing)?`, 'g'), '');

      // Remove all previous keyframes classes
      if (is('array', keyframes)) {
        const regex = new RegExp(`${keyframes.reduce((result, item, index) => result += `${index !== 0 ? '|' : ''}${item}`, '')}`, 'g');

        className = className.replace(regex, '');
      }

      // Add
      className += ` ${prefix || ''}${status_}`;

      className = className.replace(/ +/g, ' ').trim();

      refs.root.current.className = className;
    }
  };

  if (status === 'removed') return null;

  const value = {
    status
  };

  return (
    <KeyframesContext.Provider value={value}>
      {
        is('function', children) ?
          children(status, refs.root) :

          React.cloneElement(children, {
            ref: item => {
              refs.root.current = item;

              if (ref) ref.current = item;
            }
          })
      }
    </KeyframesContext.Provider>
  );
};

Keyframes.displayName = 'AmauiKeyframes';

export default Keyframes;
