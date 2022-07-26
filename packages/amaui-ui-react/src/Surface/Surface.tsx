import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    transition: theme.methods.transitions.make(['color', 'background', 'box-shadow']),

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
        color: theme.methods.palette.color.value('neutral', 10),
        backgroundColor: theme.methods.palette.color.value('neutral', 95),
      },

      '&$primary': {
        color: theme.methods.palette.color.value('primary', 10),
        backgroundColor: theme.methods.palette.color.value('primary', 95),
      },

      '&$secondary': {
        color: theme.methods.palette.color.value('secondary', 10),
        backgroundColor: theme.methods.palette.color.value('secondary', 95),
      },

      '&$tertiary': {
        color: theme.methods.palette.color.value('tertiary', 10),
        backgroundColor: theme.methods.palette.color.value('tertiary', 95),
      },

      '&$quaternary': {
        color: theme.methods.palette.color.value('quaternary', 10),
        backgroundColor: theme.methods.palette.color.value('quaternary', 95),
      },

      '&$info': {
        color: theme.methods.palette.color.value('info', 10),
        backgroundColor: theme.methods.palette.color.value('info', 95),
      },

      '&$success': {
        color: theme.methods.palette.color.value('success', 10),
        backgroundColor: theme.methods.palette.color.value('success', 95),
      },

      '&$warning': {
        color: theme.methods.palette.color.value('warning', 10),
        backgroundColor: theme.methods.palette.color.value('warning', 95),
      },

      '&$error': {
        color: theme.methods.palette.color.value('error', 10),
        backgroundColor: theme.methods.palette.color.value('error', 95),
      }
    },

    // Elevation
    '&$elevation_0': {
      boxShadow: theme.shadows.values.neutral[0]
    },

    '&$elevation_1': {
      boxShadow: theme.shadows.values.neutral[1],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))' : undefined,
    },

    '&$elevation_2': {
      boxShadow: theme.shadows.values.neutral[2],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))' : undefined,
    },

    '&$elevation_3': {
      boxShadow: theme.shadows.values.neutral[3],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07))' : undefined,
    },

    '&$elevation_4': {
      boxShadow: theme.shadows.values.neutral[4],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))' : undefined,
    },

    '&$elevation_6': {
      boxShadow: theme.shadows.values.neutral[6],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' : undefined,
    },

    '&$elevation_8': {
      boxShadow: theme.shadows.values.neutral[8],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))' : undefined,
    },

    '&$elevation_9': {
      boxShadow: theme.shadows.values.neutral[9],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13))' : undefined,
    },

    '&$elevation_12': {
      boxShadow: theme.shadows.values.neutral[12],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))' : undefined,
    },

    '&$elevation_16': {
      boxShadow: theme.shadows.values.neutral[16],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))' : undefined,
    },

    '&$elevation_24': {
      boxShadow: theme.shadows.values.neutral[24],
      backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28))' : undefined,
    },

    // Size
    '&$small': {
      padding: theme.methods.space.value('rg', 'px'),
      borderRadius: `${theme.methods.shape.radius.value('rg') as number + 4}px`
    },

    '&$regular': {
      padding: theme.methods.space.value('md', 'px'),
      borderRadius: `${theme.methods.shape.radius.value('md') as number + 4}px`
    },

    '&$large': {
      padding: theme.methods.space.value('lg', 'px'),
      borderRadius: `${theme.methods.shape.radius.value('lg') as number + 4}px`
    },

    // Other
    '&$noBorderRadius': {
      borderRadius: 0
    }
  }
}), { name: 'AmauiSurface' });

const Surface = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const {
    className,

    size = 'regular',
    color = props.tonal ? 'neutral' : 'default',
    tonal = true,
    elevation = 0,

    noBorderRadius,
    Component = 'div',

    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!classes[color]) {
    const palette = theme.methods.color(color);

    if (tonal) {
      styles.root.color = theme.methods.palette.color.value(undefined, 10, true, palette);
      styles.root.backgroundColor = theme.methods.palette.color.value(undefined, 95, true, palette);
    }
    else {
      styles.root.color = theme.methods.palette.color.text(palette.main, true);
      styles.root.backgroundColor = palette.main;
    }
  }

  return (
    <div
      ref={ref}

      className={classNames([
        classes.root,
        className,
        classes[size],
        classes[color],
        classes[`elevation_${elevation}`],
        tonal && classes.tonal,
        noBorderRadius && classes.noBorderRadius
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </div>
  );
});

export default Surface;
