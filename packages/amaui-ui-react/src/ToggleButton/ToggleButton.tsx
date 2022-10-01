import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Chip from '../Chip';

const useStyle = style(theme => ({
  root: {

  },
}), { name: 'AmauiToggleButton' });

const ToggleButton = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiToggleButton?.props?.default }), [props_]);

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
