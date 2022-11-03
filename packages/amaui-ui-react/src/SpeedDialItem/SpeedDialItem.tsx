import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import { IIconButton } from '../IconButton/IconButton';

import { staticClassName, TElement, TElementReference, TPropsAny, TRef } from '../utils';

const useStyle = styleMethod(theme => ({
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

export interface ISpeedDialItem extends IIconButton {
  open?: boolean;

  label?: TElement;
  tooltipOpen?: boolean;
  closeOnClick?: boolean;

  onBlur?: (event: React.FocusEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;

  Icon?: TElementReference;

  TooltipProps?: TPropsAny;
}

const SpeedDialItem = React.forwardRef((props_: ISpeedDialItem, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSpeedDialItem?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    open,

    label,
    tooltipOpen,
    closeOnClick,

    onBlur,
    onFocus,

    Icon,

    TooltipProps = {
      alignment: 'center',
      interactive: false
    },

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  delete TooltipProps.open;

  if (tooltipOpen) TooltipProps.open = true;

  return (
    <Component
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
    </Component>
  );
});

SpeedDialItem.displayName = 'AmauiSpeedDialItem';

export default SpeedDialItem;
