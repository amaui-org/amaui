import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

const IconButton = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiIconButton.props?.default }), [props_]);

  return (
    <Button
      ref={ref}

      {...props}

      version={props.version || 'text'}

      icon
    />
  );
});

export default IconButton;
