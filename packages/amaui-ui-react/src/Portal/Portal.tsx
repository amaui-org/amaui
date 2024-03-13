import React from 'react';
import ReactDOM from 'react-dom';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { IBaseElement } from '../types';

export interface IPortal extends IBaseElement {
  element?: Element | DocumentFragment;
}

const Portal: React.FC<IPortal> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiPortal?.props?.default, ...props_ }), [props_]);

  const {
    element,

    children,

    ...other
  } = props;

  return (
    ReactDOM.createPortal(
      React.cloneElement(children as any, {
        ref: (item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          if ((children as any).ref) {
            if (is('function', (children as any).ref)) (children as any).ref(item);
            else (children as any).ref.current = item;
          }
        },
        ...other
      }),

      element
    )
  );
});

Portal.displayName = 'amaui-Portal';

export default Portal;
