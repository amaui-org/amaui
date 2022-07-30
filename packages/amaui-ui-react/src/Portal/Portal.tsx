import React from 'react';
import ReactDOM from 'react-dom';

import { useAmauiTheme } from '@amaui/style-react';

const Portal = (props_: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPortal?.props?.default }), [props_]);

  const {
    element,

    children
  } = props;

  return (
    ReactDOM.createPortal(
      children,
      element
    )
  );
};

export default Portal;
