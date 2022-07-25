import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import Type from '../Type';

const useStyle = style(theme => ({
  root: {
    position: 'relative'
  },

  badge: {
    position: 'absolute',
    padding: `${theme.space.unit / 2}px ${theme.space.unit - 2}px ${(theme.space.unit / 2) - 1}px`,
    lineHeight: [1, '!important'],
    borderRadius: theme.methods.space.value('rg', 'px'),
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none',

    // Color
    '&$default': {
      color: theme.palette.text.default.primary,
      backgroundColor: theme.palette.background.default.primary,
    },

    '&$neutral': {
      color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
      backgroundColor: theme.palette.color.neutral.main,
    },

    '&$primary': {
      color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
      backgroundColor: theme.palette.color.primary.main,
    },

    '&$secondary': {
      color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
      backgroundColor: theme.palette.color.secondary.main,
    },

    '&$tertiary': {
      color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
      backgroundColor: theme.palette.color.tertiary.main,
    },

    '&$quaternary': {
      color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
      backgroundColor: theme.palette.color.quaternary.main,
    },

    '&$info': {
      color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
      backgroundColor: theme.palette.color.info.main,
    },

    '&$success': {
      color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
      backgroundColor: theme.palette.color.success.main,
    },

    '&$warning': {
      color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
      backgroundColor: theme.palette.color.warning.main,
    },

    '&$error': {
      color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
      backgroundColor: theme.palette.color.error.main,
    },

    '&$tonal': {
      '&$neutral': {
        color: theme.methods.palette.color.value('neutral', 90),
        backgroundColor: theme.methods.palette.color.value('neutral', 30),
      },

      '&$primary': {
        color: theme.methods.palette.color.value('primary', 90),
        backgroundColor: theme.methods.palette.color.value('primary', 30),
      },

      '&$secondary': {
        color: theme.methods.palette.color.value('secondary', 90),
        backgroundColor: theme.methods.palette.color.value('secondary', 30),
      },

      '&$tertiary': {
        color: theme.methods.palette.color.value('tertiary', 90),
        backgroundColor: theme.methods.palette.color.value('tertiary', 30),
      },

      '&$quaternary': {
        color: theme.methods.palette.color.value('quaternary', 90),
        backgroundColor: theme.methods.palette.color.value('quaternary', 30),
      },

      '&$info': {
        color: theme.methods.palette.color.value('info', 90),
        backgroundColor: theme.methods.palette.color.value('info', 30),
      },

      '&$success': {
        color: theme.methods.palette.color.value('success', 90),
        backgroundColor: theme.methods.palette.color.value('success', 30),
      },

      '&$warning': {
        color: theme.methods.palette.color.value('warning', 90),
        backgroundColor: theme.methods.palette.color.value('warning', 30),
      },

      '&$error': {
        color: theme.methods.palette.color.value('error', 90),
        backgroundColor: theme.methods.palette.color.value('error', 30),
      }
    },

    // Vertical & horizontal
    '&$left': {
      left: 0
    },

    '&$right': {
      right: 0
    },

    '&$top': {
      top: 0,

      '&$right': {
        transform: 'translate(50%, -50%)'
      },

      '&$left': {
        transform: 'translate(-50%, -50%)'
      }
    },

    '&$bottom': {
      bottom: 0,

      '&$right': {
        transform: 'translate(50%, 50%)'
      },

      '&$left': {
        transform: 'translate(-50%, 50%)'
      }
    },

    '&$indicator': {
      height: theme.methods.space.value('sm', 'px'),
      width: theme.methods.space.value('sm', 'px'),
      padding: '0',
      borderRadius: '50%'
    }
  }
}), { name: 'AmauiBadge' });

const Badge = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const {
    className,

    max,
    value: value_,
    color = 'primary',
    tonal = true,
    vertical = 'top',
    horizontal = 'right',
    indicator,
    Component = 'span',

    children,

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
        className,
        classes.root
      ])}

      {...other}
    >
      {children}

      <Type
        className={classNames([
          classes.badge,
          classes[color],
          tonal && classes.tonal,
          indicator && classes.indicator,
          classes[vertical],
          classes[horizontal]
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
