import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative'
  },

  badge: {
    position: 'absolute',
    padding: `4px 6px 3px`,
    lineHeight: 1,
    borderRadius: `${theme.shape.radius.unit * 1.25}px`,
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none'
  },

  // Color
  default: {
    color: theme.palette.background.default.primary,
    backgroundColor: theme.palette.text.default.primary,
  },

  neutral: {
    color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
    backgroundColor: theme.palette.color.neutral.main,
  },

  primary: {
    color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
    backgroundColor: theme.palette.color.primary.main,
  },

  secondary: {
    color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
    backgroundColor: theme.palette.color.secondary.main,
  },

  tertiary: {
    color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
    backgroundColor: theme.palette.color.tertiary.main,
  },

  quaternary: {
    color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
    backgroundColor: theme.palette.color.quaternary.main,
  },

  info: {
    color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
    backgroundColor: theme.palette.color.info.main,
  },

  success: {
    color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
    backgroundColor: theme.palette.color.success.main,
  },

  warning: {
    color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
    backgroundColor: theme.palette.color.warning.main,
  },

  error: {
    color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
    backgroundColor: theme.palette.color.error.main,
  },

  // Tonal
  tonal_neutral: {
    color: theme.methods.palette.color.value('neutral', 90),
    backgroundColor: theme.methods.palette.color.value('neutral', 30),
  },

  tonal_primary: {
    color: theme.methods.palette.color.value('primary', 90),
    backgroundColor: theme.methods.palette.color.value('primary', 30),
  },

  tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 90),
    backgroundColor: theme.methods.palette.color.value('secondary', 30),
  },

  tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 90),
    backgroundColor: theme.methods.palette.color.value('tertiary', 30),
  },

  tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 90),
    backgroundColor: theme.methods.palette.color.value('quaternary', 30),
  },

  tonal_info: {
    color: theme.methods.palette.color.value('info', 90),
    backgroundColor: theme.methods.palette.color.value('info', 30),
  },

  tonal_success: {
    color: theme.methods.palette.color.value('success', 90),
    backgroundColor: theme.methods.palette.color.value('success', 30),
  },

  tonal_warning: {
    color: theme.methods.palette.color.value('warning', 90),
    backgroundColor: theme.methods.palette.color.value('warning', 30),
  },

  tonal_error: {
    color: theme.methods.palette.color.value('error', 90),
    backgroundColor: theme.methods.palette.color.value('error', 30),
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
    max,
    value: value_,
    color = 'primary',
    tonal = true,
    vertical = 'top',
    horizontal = 'right',
    indicator,
    Component = 'span',

    children,

    className,

    ...other
  } = props;

  const styles: any = {
    badge: {}
  };

  let value = value_;

  if (max && value > max) value = `${max}+`;

  if (!classes[color]) {
    const palette = theme.methods.color(color);

    if (tonal) {
      styles.badge.color = theme.methods.palette.color.value(undefined, 90, true, palette);
      styles.badge.backgroundColor = theme.methods.palette.color.value(undefined, 30, true, palette);
    }
    else {
      styles.badge.color = theme.methods.palette.color.text(palette.main, true);
      styles.badge.backgroundColor = palette.main;
    }
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Badge', theme) && [
          'AmauiBadge-root',
          `AmauiBadge-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiBadge-vertical-${vertical}`,
          `AmauiBadge-horizontal-${horizontal}`,
          tonal && `AmauiBadge-tonal`,
          indicator && `AmauiBadge-indicator`,
          max !== undefined && `AmauiBadge-max`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}

      <Type
        className={classNames([
          staticClassName('Badge', theme) && [
            'AmauiBadge-badge',
            `AmauiBadge-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
            `AmauiBadge-vertical-${vertical}`,
            `AmauiBadge-horizontal-${horizontal}`,
            tonal && `AmauiBadge-tonal`,
            indicator && `AmauiBadge-indicator`
          ],

          classes.badge,
          classes[color],
          classes[vertical],
          classes[horizontal],
          classes[`${vertical}_${horizontal}`],
          tonal && classes[`tonal_${color}`],
          indicator && classes.indicator
        ])}

        Component='span'

        version='l3'

        style={styles.badge}
      >
        {value}
      </Type>
    </Component>
  );
});

export default Badge;
