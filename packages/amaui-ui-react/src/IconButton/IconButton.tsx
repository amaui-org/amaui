import React from 'react';

import { classNames, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const IconButton = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiIconButton?.props?.default }), [props_]);

  const {
    version = 'text',

    className,

    ...other
  } = props;

  return (
    <Button
      ref={ref}

      {...other}

      className={classNames([
        staticClassName('IconButton', theme) && [
          'AmauiIconButton-root'
        ],

        className
      ])}

      version={version}

      icon
    />
  );
});

export default IconButton;
