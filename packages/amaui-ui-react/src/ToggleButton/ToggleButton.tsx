import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chip from '../Chip';
import { IChip } from '../Chip/Chip';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'AmauiToggleButton' });

export interface IToggleButton extends IChip {

}

const ToggleButton = React.forwardRef((props_: IToggleButton, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiToggleButton?.props?.default, ...props_ }), [props_]);

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
          'AmauiToggleButton-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ToggleButton.displayName = 'AmauiToggleButton';

export default ToggleButton;
