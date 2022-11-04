import React from 'react';
import ReactDOM from 'react-dom';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { IBaseElement } from '../utils';

export interface IPortal extends IBaseElement {
  element?: Element | DocumentFragment;
}

const Portal = React.forwardRef((props_: IPortal, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPortal?.props?.default }), [props_]);

  const {
    element,

    children,

    ...other
  } = props;

  return (
    ReactDOM.createPortal(
      React.cloneElement(children as any, {
        ref: item => {
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

Portal.displayName = 'AmauiPortal';

export default Portal;
