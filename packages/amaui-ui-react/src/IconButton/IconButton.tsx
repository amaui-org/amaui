import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-IconButton' });

export interface IIconButton extends IButton {

}

const IconButton: React.FC<IIconButton> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiIconButton?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

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
          'amaui-IconButton-root'
        ],

        className,
        classes.root
      ])}

      version={version}

      icon
    />
  );
});

IconButton.displayName = 'amaui-IconButton';

export default IconButton;
