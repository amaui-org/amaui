import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    position: 'relative'
  },

  badge: {
    position: 'absolute',
    padding: `4px 6px 3px`,
    lineHeight: 1,
    borderRadius: `${theme.shape.radius.unit * 1.25}px`,
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none',

    ...theme.typography.values.l3
  },

  // Vertical & horizontal
  left: {
    insetInlineStart: 0
  },

  right: {
    insetInlineEnd: 0
  },

  top: {
    top: 0
  },

  top_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, -50%)`
  },

  top_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, -50%)`
  },

  bottom: {
    bottom: 0
  },

  bottom_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, 50%)`
  },

  bottom_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, 50%)`
  },

  indicator: {
    height: '8px',
    width: '8px',
    padding: '0',
    borderRadius: `${theme.shape.radius.unit * 0.5}px`,
  }
}), { name: 'AmauiBadge' });

const Badge = React.forwardRef((props_: any, ref: any) => {
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

  let value = value_;

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
          classes[vertical],
          classes[horizontal],
          classes[`${vertical}_${horizontal}`],
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
