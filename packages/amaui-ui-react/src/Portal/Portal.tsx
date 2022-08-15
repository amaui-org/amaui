import React from 'react';
import ReactDOM from 'react-dom';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

const Portal = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPortal?.props?.default }), [props_]);

  const {
    element,

    children,

    ...other
  } = props;

  return (
    ReactDOM.createPortal(
      React.cloneElement(children, {
        ref: item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          if (children.ref) {
            if (is('function', children.ref)) children.ref(item);
            else children.ref.current = item;
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
