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

const other = {
  className: true
};

function Transitions(props: IProps) {
  const [status, setStatus] = React.useState<TTransitionStatus>(STATUS.entered);
  const [element, setElement] = React.useState(React.cloneElement(props.children, { in: true, ...other }));
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
          const isExiting = !prev?.props.in;

          if (next && (!prev || isExiting)) return React.cloneElement(item, { in: true, onExited: onExited(item), enterOnAdd: true, ...other });

          if (!next && prev && !isExiting) return React.cloneElement(item, { in: false, ...other });

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
    children_ = children_.map(item => React.cloneElement(item, { in: true, onExited: onExited(item), ...other }))
  }

  // Switch
  if (props.switch) {
    children_ = element;

    switch (status) {
      case STATUS.enter:
        if (props.mode === 'in-out') {
          const newElement = React.cloneElement(props.children, { in: true, ...other });

          children_ = [
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.entered);
                setElement(newElement);
              },

              exitOnAdd: true,
              removeOnExited: true,

              ...other
            }),

            newElement
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(props.children, {
              in: true,

              onEntered: () => {
                if (props.children.props?.onEntered) props.children.props?.onEntered();

                setStatus(STATUS.entered);
                setElement(React.cloneElement(props.children, { in: true, ...other }));
              },

              enterOnAdd: true,

              ...other
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

              enterOnAdd: true,

              ...other
            })
          ];
        }
        else if (props.mode === 'out-in') {
          children_ = (
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (props.children.props?.onExited) props.children.props?.onExited();

                setStatus(STATUS.enter);
              },

              exitOnAdd: true,

              ...other
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
