import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chip from '../Chip';
import { IChip } from '../Chip/Chip';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'amaui-ToggleButton' });

export interface IToggleButton extends IChip {

}

const ToggleButton = React.forwardRef((props_: IToggleButton, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiToggleButton?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    icon = true,

    className,

    ...other
  } = props;

  return (
    <Chip
      ref={ref}

      icon={icon}

      className={classNames([
        staticClassName('ToggleButton', theme) && [
          'amaui-ToggleButton-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ToggleButton.displayName = 'amaui-ToggleButton';

export default ToggleButton;
