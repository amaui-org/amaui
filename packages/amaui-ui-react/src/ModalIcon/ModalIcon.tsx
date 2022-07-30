import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

const ModalIcon = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalIcon?.props?.default }), [props_]);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    React.cloneElement(children, {
      ref,

      size: 'regular',

      ...other
    })
  );
});

export default ModalIcon;
