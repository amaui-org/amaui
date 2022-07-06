import React from 'react';

import { is, unique } from '@amaui/utils';

export type TMode = 'in-out' | 'out-in';

export interface IProps {
  switch?: boolean;

  mode?: TMode;

  [p: string]: any;
}

const TransitionsContext = React.createContext(undefined);

function Transitions(props: IProps) {
  const [children, setChildren] = React.useState(is('array', props.children) ? props.children : [props.children]);
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
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
  }, [props.children.length]);

  const onExited = (element: React.ReactElement<any>) => (element_: HTMLElement) => {
    // Invoke a method
    if (is('function', element.props.onExited)) element.props.onExited(element_);

    // Update
    setChildren(items => {
      const newItems = [...items];

      const index = newItems.findIndex(item => item?.key === element?.key);

      if (index > -1) newItems.splice(index, 1);

      return newItems;
    });
  };

  let children_ = children;

  // Init
  if (!init) {
    children_ = children_.map(item => React.cloneElement(item, { in: true, onExited: onExited(item) }))
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
