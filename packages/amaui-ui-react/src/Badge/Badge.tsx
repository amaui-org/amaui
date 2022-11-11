import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { IBaseElement, staticClassName, TColor, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    position: 'relative'
  },

  badge: {
    position: 'absolute',
    padding: `4px 6px 3px`,
    lineHeight: '1px',
    borderRadius: `${theme.shape.radius.unit * 1.25}px`,
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none',

    ...theme.typography.values.l3
  },

  // Vertical & horizontal
  horizontal_left: {
    insetInlineStart: '0px'
  },

  horizontal_right: {
    insetInlineEnd: '0px'
  },

  vertical_top: {
    top: '0px'
  },

  vertical_horizontal_top_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, -50%)`
  },

  vertical_horizontal_top_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, -50%)`
  },

  vertical_bottom: {
    bottom: '0px'
  },

  vertical_horizontal_bottom_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, 50%)`
  },

  vertical_horizontal_bottom_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, 50%)`
  },

  indicator: {
    height: '8px',
    width: '8px',
    padding: '0',
    borderRadius: `${theme.shape.radius.unit * 0.5}px`,
  }
}), { name: 'AmauiBadge' });

export interface IBadge extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;

  value?: number;

  max?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
  indicator?: boolean;
}

const Badge = React.forwardRef((props_: IBadge, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBadge?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    color = 'primary',

    value: value_,

    max,
    vertical = 'top',
    horizontal = 'right',
    indicator,

    Component = 'span',

    className,

    children,

    ...other
  } = props;

  const styles: any = {
    badge: {}
  };

  let value: any = value_;

  if (max !== undefined && value > max) value = `${max}+`;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Badge', theme) && [
          'AmauiBadge-root',
          `AmauiBadge-vertical-${vertical}`,
          `AmauiBadge-horizontal-${horizontal}`,
          indicator && `AmauiBadge-indicator`,
          max !== undefined && `AmauiBadge-max`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}

      <Surface
        tonal={tonal}

        color={color}

        Component='span'

        className={classNames([
          staticClassName('Badge', theme) && [
            'AmauiBadge-badge'
          ],

          classes.badge,
          classes[`vertical_${vertical}`],
          classes[`horizontal_${horizontal}`],
          classes[`vertical_horizontal_${vertical}_${horizontal}`],
          indicator && classes.indicator
        ])}

        style={styles.badge}
      >
        {value}
      </Surface>
    </Component>
  );
});

Badge.displayName = 'AmauiBadge';

export default Badge;
