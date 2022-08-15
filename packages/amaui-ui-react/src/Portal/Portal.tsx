import React from 'react';
import ReactDOM from 'react-dom';

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
          if (ref) ref.current = item;

          if (children.ref) children.ref.current = item;
        },
        ...other
      }),
      element
    )
  );
});

Portal.displayName = 'AmauiPortal';

export default Portal;
