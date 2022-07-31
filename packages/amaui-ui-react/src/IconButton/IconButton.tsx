import React from 'react';

import { useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

const IconButton = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiIconButton?.props?.default }), [props_]);

  const {
    version = 'text',

    ...other
  } = props;

  return (
    <Button
      ref={ref}

      {...other}

      version={version}

      icon
    />
  );
});

export default IconButton;
