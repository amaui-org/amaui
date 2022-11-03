import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import { IButton } from '../Button/Button';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'AmauiIconButton' });

export interface IIconButton extends IButton {

}

const IconButton = React.forwardRef((props_: IIconButton, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiIconButton?.props?.default }), [props_]);

  const { classes } = useStyle(props);

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

        className,
        classes.root
      ])}

      version={version}

      icon
    />
  );
});

IconButton.displayName = 'AmauiIconButton';

export default IconButton;
