import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chip from '../Chip';
import { IChip } from '../Chip/Chip';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Chip-root': {
      width: 'unset'
    }
  },

  size_small: {
    '&.amaui-Button-root': {
      padding: '4px 6px'
    }
  },

  size_regular: {
    '&.amaui-Button-root': {
      padding: '8px 8px'
    }
  },

  size_large: {
    '&.amaui-Button-root': {
      padding: '12px 10px'
    }
  },
}), { name: 'amaui-ToggleButton' });

export interface IToggleButton extends IChip {

}

const ToggleButton: React.FC<IToggleButton> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiToggleButton?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size,

    icon = true,

    className,

    ...other
  } = props;

  return (
    <Chip
      ref={ref}

      size={size}

      icon={icon}

      noCheckIcon

      className={classNames([
        staticClassName('ToggleButton', theme) && [
          'amaui-ToggleButton-root'
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    />
  );
});

ToggleButton.displayName = 'amaui-ToggleButton';

export default ToggleButton;
