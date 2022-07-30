import React from 'react';

import is from '@amaui/utils/is';
import wait from '@amaui/utils/wait';
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

  onExited?: (element: HTMLElement) => void;

  onRemoved?: (element: HTMLElement) => void;

  [p: string]: any;
}

function Keyframes(props_: IProps) {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiKeyframes.props?.default }), [props_]);

  const [init, setInit] = React.useState(false);
  const [status, setStatus] = React.useState<TKeyframesStatus>(() => {
    let statusNew: TKeyframesStatus = '' as any;

    if (props.append) statusNew = 'appended';

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
  }, [props.update]);

  const initMethod = async () => {
    // Appended
    if (status === 'appended') updateStatus(props.appendStatusPost as any);

    // Add
    if (props.add || status === 'add') await add();

    // Run the method
    // to run the keyframes
    if (props.runOnEnter) await run();

    // Init
    setInit(true);
  };

  const run = async () => {
    // Run all keyframes
    if (is('array', props.keyframes)) for (const keyframe of props.keyframes) await runKeyframe(keyframe);

    if (props.removeOnEnd) {
      // So exited status has
      // enough time to apply some value
      setStatus('removed');

      // Subscriptions
      subs.current.status.emit('removed');
    }
  };

  const runKeyframe = async (value: IKeyframe) => {
    if (value) {
      const { name, timeout } = value;

      updateStatus(name as any);

      await wait(timeout || 0);
    }
  };

  const timeout = async (status_: TKeyframesStatus) => {
    let duration: any = props.timeout;

    if (
      is('string', props.timeout) &&
      theme.transitions.duration[props.timeout as TTransitionsDurationProperties] !== undefined
    ) duration = theme.transitions.duration[props.timeout as TTransitionsDurationProperties];

    if (is('object', props.timeout)) duration = props.timeout[status_] !== undefined ? props.timeout[status_] : (props.timeout as any).default;

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
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);
        if (is('function', props.onAppended)) props.onAppended(refs.root.current);

        break;

      case 'add':
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);
        if (is('function', props.onAdd)) props.onAdd(refs.root.current);

        break;

      case 'adding':
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);
        if (is('function', props.onAdding)) props.onAdding(refs.root.current);

        break;

      case 'added':
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);
        if (is('function', props.onAdded)) props.onAdded(refs.root.current);

        break;

      case 'removed':
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);
        if (is('function', props.onRemoved)) props.onRemoved(refs.root.current);

        break;

      default:
        if (is('function', props.onKeyframes)) props.onKeyframes(refs.root.current, status_);

        break;
    }

    // Add className
    if (props.className && is('element', refs.root.current)) {
      let className = classNames([refs.root.current.className.split(' ')]);

      // Remove all previous state classes
      className = className.replace(new RegExp(`${props.prefix || ''}(add)(ed|ing)?`, 'g'), '');

      // Remove all previous keyframes classes
      if (is('array', props.keyframes)) {
        const regex = new RegExp(`${props.keyframes.reduce((result, item, index) => result += `${index !== 0 ? '|' : ''}${item}`, '')}`, 'g');

        className = className.replace(regex, '');
      }

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
    <KeyframesContext.Provider value={value}>

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

    </KeyframesContext.Provider>
  );
};

export default Keyframes;
