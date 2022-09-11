import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import IconButton from '../IconButton';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',

    '& .AmauiButton-root': {
      boxShadow: theme.shadows.values.default[6],

      '&:hover': {
        boxShadow: theme.shadows.values.default[8]
      },

      '&.AmauiButton-focus': {
        boxShadow: theme.shadows.values.default[8]
      }
    }
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
    buttonRef,

    onBlur,
    onFocus,

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
      ref={ref}

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
          onBlur={onBlur}
          onFocus={onFocus}

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
