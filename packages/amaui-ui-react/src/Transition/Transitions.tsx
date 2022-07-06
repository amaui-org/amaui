import React from 'react';

import { is, unique } from '@amaui/utils';

import { STATUS, TTransitionStatus } from './Transition';

export type TMode = 'in-out' | 'out-in';

export interface IProps {
  switch?: boolean;

  mode?: TMode;

  [p: string]: any;
}

const TransitionsContext = React.createContext(undefined);

function Transitions(props: IProps) {
  const [status, setStatus] = React.useState<TTransitionStatus>(STATUS.entered);
  const [element, setElement] = React.useState(React.cloneElement(props.children, { in: true }));
  const [children, setChildren] = React.useState(is('array', props.children) ? props.children : [props.children]);
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    setInit(true);
  }, []);

  // Regular
  React.useEffect(() => {
    if (!props.switch) {
      const newChildren: Array<React.ReactElement<any>> = is('array', props.children) ? props.children : [props.children];

      setChildren(items => {
        let newItems = unique([...items, ...newChildren], 'key');

        newItems = newItems.map(item => {
          const prev = items.find(item_ => item_.key === item.key);
          const next = newChildren.find(item_ => item_.key === item.key);
          const isExiting = !prev.props.in;

          if (next && (!prev || isExiting)) return React.cloneElement(item, { in: true, onExited: onExited(item) });

          if (!next && prev && !isExiting) return React.cloneElement(item, { in: false });

          return item;
        });

        return newItems;
      });
    }
  }, [props.children.length]);

  // Switch
  React.useEffect(() => {
    if (
      element !== props.children &&
      element.key !== props.children.key
    ) {
      setStatus(STATUS.exit);
    }
  }, [props.children.key]);

  const onExited = (element_: React.ReactElement<any>) => (elementHTML: HTMLElement) => {
    // Invoke a method
    if (is('function', element_.props.onExited)) element_.props.onExited(elementHTML);

    // Update
    setChildren(items => {
      const newItems = [...items];

      const index = newItems.findIndex(item => item?.key === element_?.key);

      if (index > -1) newItems.splice(index, 1);

      return newItems;
    });
  };

  let children_ = children;

  // Init
  if (!init && !props.switch) {
    children_ = children_.map(item => React.cloneElement(item, { in: true, onExited: onExited(item) }))
  }

  // Switch
  if (props.switch) {
    children_ = element;

    switch (status) {
      case STATUS.enter:
        if (props.mode === 'in-out') {
          children_ = [
            React.cloneElement(props.children, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.enter);
                setElement(React.cloneElement(props.children, { in: true }));
              },
            }),
            React.cloneElement(props.children, { in: true })
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEntered) props.children.props?.onEntered();

                setStatus(STATUS.entered);
                setElement(React.cloneElement(props.children, { in: true }));
              },
            })
          );
        }

        break;

      case STATUS.exit:
        if (props.mode === 'in-out') {
          children_ = [
            element,
            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEnter) props.children.props?.onEnter();

                setStatus(STATUS.enter);
              },
            })
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(props.children, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.enter);
              },
            })
          );
        }

        break;

      default:
        break;
    }
  }

  return (
    <TransitionsContext.Provider value={null}>
      {children_}
    </TransitionsContext.Provider>
  );
};

Transitions.defaultProps = {
  mode: 'out-in'
} as IProps;

export default Transitions;
