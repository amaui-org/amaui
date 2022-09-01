import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {},

  // Color
  version_filled_color_themed: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary
  },

  version_filled_color_inverse: {
    color: theme.palette.background.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary
  },

  version_filled_color_default: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.background.default.primary
  },

  version_filled_color_neutral: {
    color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
    backgroundColor: theme.palette.color.neutral.main
  },

  version_filled_color_primary: {
    color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
    backgroundColor: theme.palette.color.primary.main
  },

  version_filled_color_secondary: {
    color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
    backgroundColor: theme.palette.color.secondary.main
  },

  version_filled_color_tertiary: {
    color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
    backgroundColor: theme.palette.color.tertiary.main
  },

  version_filled_color_quaternary: {
    color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
    backgroundColor: theme.palette.color.quaternary.main
  },

  version_filled_color_info: {
    color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
    backgroundColor: theme.palette.color.info.main
  },

  version_filled_color_success: {
    color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
    backgroundColor: theme.palette.color.success.main
  },

  version_filled_color_warning: {
    color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
    backgroundColor: theme.palette.color.warning.main
  },

  version_filled_color_error: {
    color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
    backgroundColor: theme.palette.color.error.main
  },

  // Tonal
  version_filled_color_tonal_neutral: {
    color: theme.methods.palette.color.value('neutral', 10),
    backgroundColor: theme.methods.palette.color.value('neutral', 95)
  },

  version_filled_color_tonal_primary: {
    color: theme.methods.palette.color.value('primary', 10),
    backgroundColor: theme.methods.palette.color.value('primary', 95)
  },

  version_filled_color_tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 10),
    backgroundColor: theme.methods.palette.color.value('secondary', 95)
  },

  version_filled_color_tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 10),
    backgroundColor: theme.methods.palette.color.value('tertiary', 95)
  },

  version_filled_color_tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 10),
    backgroundColor: theme.methods.palette.color.value('quaternary', 95)
  },

  version_filled_color_tonal_info: {
    color: theme.methods.palette.color.value('info', 10),
    backgroundColor: theme.methods.palette.color.value('info', 95)
  },

  version_filled_color_tonal_success: {
    color: theme.methods.palette.color.value('success', 10),
    backgroundColor: theme.methods.palette.color.value('success', 95)
  },

  version_filled_color_tonal_warning: {
    color: theme.methods.palette.color.value('warning', 10),
    backgroundColor: theme.methods.palette.color.value('warning', 95)
  },

  version_filled_color_tonal_error: {
    color: theme.methods.palette.color.value('error', 10),
    backgroundColor: theme.methods.palette.color.value('error', 95)
  },

  // Version
  // Text
  version_text_color_themed: {
    color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary
  },

  version_text_color_inverse: {
    color: theme.palette.background.default.primary
  },

  version_text_color_default: {
    color: theme.palette.text.default.primary
  },

  version_text_color_neutral: {
    color: theme.palette.color.neutral.main
  },

  version_text_color_primary: {
    color: theme.palette.color.primary.main
  },

  version_text_color_secondary: {
    color: theme.palette.color.secondary.main
  },

  version_text_color_tertiary: {
    color: theme.palette.color.tertiary.main
  },

  version_text_color_quaternary: {
    color: theme.palette.color.quaternary.main
  },

  version_text_color_info: {
    color: theme.palette.color.info.main
  },

  version_text_color_success: {
    color: theme.palette.color.success.main
  },

  version_text_color_warning: {
    color: theme.palette.color.warning.main
  },

  version_text_color_error: {
    color: theme.palette.color.error.main
  },

  // Tonal
  version_text_color_tonal_neutral: {
    color: theme.methods.palette.color.value('neutral', 40)
  },

  version_text_color_tonal_primary: {
    color: theme.methods.palette.color.value('primary', 40)
  },

  version_text_color_tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 40)
  },

  version_text_color_tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 40)
  },

  version_text_color_tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 40)
  },

  version_text_color_tonal_info: {
    color: theme.methods.palette.color.value('info', 40)
  },

  version_text_color_tonal_success: {
    color: theme.methods.palette.color.value('success', 40)
  },

  version_text_color_tonal_warning: {
    color: theme.methods.palette.color.value('warning', 40)
  },

  version_text_color_tonal_error: {
    color: theme.methods.palette.color.value('error', 40)
  },

  // Outlined
  version_outlined: {
    outlineWidth: '1px',
    outlineStyle: 'solid'
  },

  // Color
  version_outlined_color_themed: {
    color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 40 : 60]
  },

  version_outlined_color_inverse: {
    color: theme.palette.background.default.primary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 60 : 40]
  },

  version_outlined_color_default: {
    color: theme.palette.text.default.primary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 40 : 60]
  },

  version_outlined_color_neutral: {
    color: theme.palette.color.neutral.main,
    outlineColor: theme.palette.color.neutral[40]
  },

  version_outlined_color_primary: {
    color: theme.palette.color.primary.main,
    outlineColor: theme.palette.color.primary[40]
  },

  version_outlined_color_secondary: {
    color: theme.palette.color.secondary.main,
    outlineColor: theme.palette.color.secondary[40]
  },

  version_outlined_color_tertiary: {
    color: theme.palette.color.tertiary.main,
    outlineColor: theme.palette.color.tertiary[40]
  },

  version_outlined_color_quaternary: {
    color: theme.palette.color.quaternary.main,
    outlineColor: theme.palette.color.quaternary[40]
  },

  version_outlined_color_info: {
    color: theme.palette.color.info.main,
    outlineColor: theme.palette.color.info[40]
  },

  version_outlined_color_success: {
    color: theme.palette.color.success.main,
    outlineColor: theme.palette.color.success[40]
  },

  version_outlined_color_warning: {
    color: theme.palette.color.warning.main,
    outlineColor: theme.palette.color.warning[40]
  },

  version_outlined_color_error: {
    color: theme.palette.color.error.main,
    outlineColor: theme.palette.color.error[40]
  },

  // Tonal
  version_outlined_color_tonal_neutral: {
    color: theme.methods.palette.color.value('neutral', 40),
    outlineColor: theme.methods.palette.color.value('neutral', 40)
  },

  version_outlined_color_tonal_primary: {
    color: theme.methods.palette.color.value('primary', 40),
    outlineColor: theme.methods.palette.color.value('primary', 40)
  },

  version_outlined_color_tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 40),
    outlineColor: theme.methods.palette.color.value('secondary', 40)
  },

  version_outlined_color_tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 40),
    outlineColor: theme.methods.palette.color.value('tertiary', 40)
  },

  version_outlined_color_tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 40),
    outlineColor: theme.methods.palette.color.value('quaternary', 40)
  },

  version_outlined_color_tonal_info: {
    color: theme.methods.palette.color.value('info', 40),
    outlineColor: theme.methods.palette.color.value('info', 40)
  },

  version_outlined_color_tonal_success: {
    color: theme.methods.palette.color.value('success', 40),
    outlineColor: theme.methods.palette.color.value('success', 40)
  },

  version_outlined_color_tonal_warning: {
    color: theme.methods.palette.color.value('warning', 40),
    outlineColor: theme.methods.palette.color.value('warning', 40)
  },

  version_outlined_color_tonal_error: {
    color: theme.methods.palette.color.value('error', 40),
    outlineColor: theme.methods.palette.color.value('error', 40)
  },

  // Elevation
  elevation_0: {
    boxShadow: theme.shadows.values.neutral[0]
  },

  elevation_1: {
    boxShadow: theme.shadows.values.neutral[1],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))' : undefined,
  },

  elevation_2: {
    boxShadow: theme.shadows.values.neutral[2],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))' : undefined,
  },

  elevation_3: {
    boxShadow: theme.shadows.values.neutral[3],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07))' : undefined,
  },

  elevation_4: {
    boxShadow: theme.shadows.values.neutral[4],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))' : undefined,
  },

  elevation_6: {
    boxShadow: theme.shadows.values.neutral[6],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' : undefined,
  },

  elevation_8: {
    boxShadow: theme.shadows.values.neutral[8],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))' : undefined,
  },

  elevation_9: {
    boxShadow: theme.shadows.values.neutral[9],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13))' : undefined,
  },

  elevation_12: {
    boxShadow: theme.shadows.values.neutral[12],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))' : undefined,
  },

  elevation_16: {
    boxShadow: theme.shadows.values.neutral[16],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))' : undefined,
  },

  elevation_24: {
    boxShadow: theme.shadows.values.neutral[24],
    backgroundImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28))' : undefined,
  }
}), { name: 'AmauiSurface' });

const Surface = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSurface?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = props.tonal ? 'neutral' : 'default',
    version = 'filled',
    elevation = 0,
    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color)) {
    const palette = theme.methods.color(color);

    if (tonal) {
      styles.root.color = theme.methods.palette.color.value(undefined, 10, true, palette);

      if (version === 'filled') styles.root.background = theme.methods.palette.color.value(undefined, 95, true, palette);

      if (version === 'outlined') styles.root.outlineColor = theme.methods.palette.color.value(undefined, 40, true, palette);

      if (['text', 'outlined'].includes(version)) styles.root.color = theme.methods.palette.color.value(undefined, 40, true, palette);
    }
    else {
      styles.root.color = theme.methods.palette.color.text(palette.main, true);

      if (version === 'filled') styles.root.background = palette.main;

      if (version === 'outlined') styles.root.outlineColor = palette[40];

      if (['text', 'outlined'].includes(version)) styles.root.color = palette.main;
    }
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Surface', theme) && [
          'AmauiSurface-root',
          `AmauiSurface-color-${!theme.palette.color[color] && ['default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiSurface-version-${version}`,
          tonal && `AmauiSurface-tonal`,
          elevation && `AmauiSurface-elevation-${elevation}`
        ],

        className,
        classes.root,
        classes[`version_${version}`],
        classes[`version_${version}_color_${color}`],
        classes[`elevation_${elevation}`],
        tonal && classes[`version_${version}_color_tonal_${color}`]
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

Surface.displayName = 'AmauiSurface';

export default Surface;
