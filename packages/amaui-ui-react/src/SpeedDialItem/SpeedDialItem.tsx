import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import IconButton from '../IconButton';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative'
  },
}), { name: 'AmauiSpeedDialItem' });

const SpeedDialItem = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSpeedDialItem?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    open,
    label,
    Icon,
    alignment = 'top',
    tooltipOpen,
    closeOnClick,

    TooltipProps = {
      alignment: 'center',
      disableInteractive: true
    },

    className,

    children,

    ...other
  } = props;

  delete TooltipProps.open;

  if (tooltipOpen) TooltipProps.open = true;

  return (
    <div
      className={classNames([
        staticClassName('SpeedDialItem', theme) && [
          `AmauiSpeedDialItem-root`
        ],

        className,
        classes.root
      ])}
    >
      <Tooltip
        label={label}

        portal={false}

        nowrap

        {...TooltipProps}
      >
        <IconButton
          {...other}
        >
          <Icon />
        </IconButton>
      </Tooltip>
    </div>
  );
});

SpeedDialItem.displayName = 'AmauiSpeedDialItem';

export default SpeedDialItem;
