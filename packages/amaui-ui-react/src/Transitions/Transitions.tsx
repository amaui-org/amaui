import React from 'react';

import { is, unique } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { STATUS, TTransitionStatus } from '..';

export type TMode = 'in-out' | 'in-out-follow' | 'out-in';

export interface IProps {
  switch?: boolean;

  mode?: TMode;

  [p: string]: any;
}

const TransitionsContext = React.createContext(undefined);

function Transitions(props_: IProps) {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTransitions?.props?.default }), [props_]);

  const {
    mode = 'out-in',
    switch: switch_,
    TransitionProps,

    children: children__
  } = props;

  const [init, setInit] = React.useState(false);
  const [status, setStatus] = React.useState<TTransitionStatus>(STATUS.entered);
  const [children, setChildren] = React.useState(is('array', children__) ? children__ : [children__]);

  const other = {
    className: true,
    ...(TransitionProps || {})
  };

  const [element, setElement] = React.useState(React.cloneElement(children__, { in: true, ...other }));

  React.useEffect(() => {
    setInit(true);
  }, []);

  // Regular
  React.useEffect(() => {
    if (!switch_) {
      const newChildren: Array<React.ReactElement<any>> = is('array', children__) ? children__ : [children__];

      setChildren(items => {
        let newItems = unique([...items, ...newChildren], 'key');

        newItems = newItems.map(item => {
          const prev = items.find(item_ => item_.key === item.key);
          const next = newChildren.find(item_ => item_.key === item.key);
          const isExiting = !prev?.props.in;

          // New or readded previous add it
          if (next && (!prev || isExiting)) return React.cloneElement(item, { in: true, onExited: onExited(item), enterOnAdd: true, ...other });

          // No prev in new and it's not already exiting exit it
          if (!next && prev && !isExiting) return React.cloneElement(item, { in: false, ...other });

          return item;
        });

        return newItems;
      });
    }
  }, [children__.length]);

  // Switch
  React.useEffect(() => {
    if (
      element !== children__ &&
      element.key !== children__.key &&
      // Lets transition run properly
      status === 'entered'
    ) {
      setStatus(STATUS.exit);
    }
  }, [children__.key]);

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
  if (!init && !switch_) {
    children_ = children_.map(item => React.cloneElement(item, { in: true, onExited: onExited(item), ...other }))
  }

  // Switch
  if (switch_) {
    children_ = element;

    switch (status) {
      case STATUS.enter:
        if (mode === 'in-out') {
          const newElement = React.cloneElement(children__, { in: true, ...other });

          children_ = [
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (children__.props?.onExited) children__.props?.onExited();

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
        else if (mode === 'out-in') {
          children_ = (
            React.cloneElement(children__, {
              in: true,

              onEntered: () => {
                if (children__.props?.onEntered) children__.props?.onEntered();

                setStatus(STATUS.entered);
                setElement(React.cloneElement(children__, { in: true, ...other }));
              },

              enterOnAdd: true,

              ...other
            })
          );
        }

        break;

      case STATUS.exit:
        if (mode === 'in-out') {
          children_ = [
            element,

            React.cloneElement(children__, {
              in: true,

              onEntered: () => {
                if (children__.props?.onEnter) children__.props?.onEnter();

                setStatus(STATUS.enter);
              },

              enterOnAdd: true,

              ...other
            })
          ];
        }
        else if (mode === 'out-in') {
          children_ = (
            React.cloneElement(children_, {
              in: false,

              onExited: () => {
                if (children__.props?.onExited) children__.props?.onExited();

                setStatus(STATUS.enter);
              },

              exitOnAdd: true,

              ...other
            })
          );
        }
        else if (mode === 'in-out-follow') {
          if (children__.key === children_.key) return children_;

          children_ = [
            React.cloneElement(children__, {
              in: true,

              onEntered: () => {
                if (children__.props?.onEntered) children__.props?.onEntered();

                setElement(React.cloneElement(children__, { in: true, ...other }));
                setStatus(STATUS.entered);
              },

              enterOnAdd: true,

              ...other
            }),

            React.cloneElement(children_, {
              in: false,

              exitOnAdd: true,

              ...other
            })
          ];
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

Transitions.displayName = 'AmauiTransitions';

export default Transitions;
