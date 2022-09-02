import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const noShrinkStrokeDashOffset = 194;

const useStyle = style(theme => ({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },

    '100%': {
      transform: 'rotate(360deg)'
    }
  },

  '@keyframes shrink': {
    '0%': {
      strokeDashoffset: '240px'
    },

    '50%': {
      strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
      transform: 'rotate(134deg)'
    },

    '100%': {
      strokeDashoffset: '240px',
      transform: 'rotate(360deg)'
    }
  },

  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: '48px'
  },

  // Version
  version_indeterminate: {
    animation: `$spin 1.4s linear infinite`
  },

  version_determinate: {
    transform: 'rotate(-90deg)'
  },

  // Size
  size_extra_small: { fontSize: '16px' },

  size_small: { fontSize: '24px' },

  size_regular: { fontSize: '48px' },

  size_large: { fontSize: '56px' },

  // Color
  color_default: { color: theme.palette.text.default.primary },

  color_neutral: { color: theme.palette.color.neutral.main },

  color_primary: { color: theme.palette.color.primary.main },

  color_secondary: { color: theme.palette.color.secondary.main },

  color_tertiary: { color: theme.palette.color.tertiary.main },

  color_quaternary: { color: theme.palette.color.quaternary.main },

  color_info: { color: theme.palette.color.info.main },

  color_success: { color: theme.palette.color.success.main },

  color_warning: { color: theme.palette.color.warning.main },

  color_error: { color: theme.palette.color.error.main },

  // Tonal
  tonal_color_neutral: { color: theme.methods.palette.color.value('neutral', 70) },

  tonal_color_primary: { color: theme.methods.palette.color.value('primary', 70) },

  tonal_color_secondary: { color: theme.methods.palette.color.value('secondary', 70) },

  tonal_color_tertiary: { color: theme.methods.palette.color.value('tertiary', 70) },

  tonal_color_quaternary: { color: theme.methods.palette.color.value('quaternary', 70) },

  tonal_color_info: { color: theme.methods.palette.color.value('info', 70) },

  tonal_color_success: { color: theme.methods.palette.color.value('success', 70) },

  tonal_color_warning: { color: theme.methods.palette.color.value('warning', 70) },

  tonal_color_error: { color: theme.methods.palette.color.value('error', 70) },

  svg: {
    width: '1em',
    height: '1em',
    color: 'inherit',
    stroke: 'currentcolor',
  },

  path: {
    strokeLinecap: 'square',
    transformOrigin: 'center',
    strokeDasharray: '240px',
    strokeDashoffset: '0px'
  },

  // Version
  path_indeterminate: {
    animation: `$shrink 1.4s ease-in-out infinite`
  },

  path_indeterminate_noShrink: {
    strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
    animation: 'none'
  },

  path_determinate: {
    strokeDasharray: '101',
    strokeDashoffset: '0',
    transition: theme.methods.transitions.make('stroke-dashoffset')
  },

  pathBackground: {
    strokeLinecap: 'square',
    strokeDasharray: '240px',
    strokeDashoffset: '0px',
    stroke: 'transparent'
  }
}), { name: 'AmauiRoundProgress' });

const RoundProgress = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRoundProgress?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'primary',
    size = 'regular',
    pathProps = {},
    pathBackgroundProps = {},
    noShrink,
    thickness = 2,
    rounded: rounded_ = true,
    version = 'indeterminate',
    value,

    className,
    style,

    ...other
  } = props;

  let rounded = rounded_;

  const styles: any = {
    root: {},
    circle: {}
  };

  if (!classes[size]) styles.root.fontSize = is('number', size) ? `${size}px` : size;

  if (!classes[color]) {
    styles.root.color = color;

    if (tonal) {
      const palette = theme.methods.color(color);

      styles.root.color = theme.methods.palette.color.value(undefined, 70, true, palette);
    }
  }

  if (version === 'determinate') {
    rounded = false;

    pathProps['pathLength'] = 100;

    styles.circle.strokeDashoffset = 101 - value;

    // 0%
    if (styles.circle.strokeDashoffset === 1) styles.circle.strokeDashoffset = 0;
  }

  return (
    <span
      ref={ref}

      className={classNames([
        staticClassName('RoundedProgress', theme) && [
          'AmauiRoundedProgress-root',
          `AmauiRoundedProgress-version-${version}`,
          `AmauiRoundedProgress-color-${!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiRoundedProgress-size-${size}`,
          rounded && `AmauiRoundedProgress-rounded`,
          noShrink ? `AmauiRoundedProgress-noShrink` : `AmauiRoundedProgress-shrink`,
          tonal && `AmauiRoundedProgress-tonal`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`color_${color}`],
        classes[`version_${version}`],
        tonal && classes[`tonal_color_${color}`]
      ])}
    >
      <svg
        viewBox='0 0 24 24'

        className={classNames([
          staticClassName('RoundedProgress', theme) && [
            'AmauiRoundedProgress-svg'
          ],

          classes.svg
        ])}

        style={{
          ...styles.root,

          ...style
        }}

        {...other}
      >
        <circle
          fill='none'
          strokeWidth={thickness}
          cx='12'
          cy='12'
          r='10'

          {...(!rounded && { strokeLinecap: 'butt' })}

          {...pathBackgroundProps}

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'AmauiRoundedProgress-pathBackground'
            ],

            classes.pathBackground,
            classes[`path_${version}`],
            pathBackgroundProps.className
          ])}
        />

        <circle
          fill='none'
          strokeWidth={thickness}
          cx='12'
          cy='12'
          r='10'

          {...(!rounded && { strokeLinecap: 'butt' })}

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'AmauiRoundedProgress-path'
            ],

            classes.path,
            classes[`path_${version}`],
            noShrink && classes.path_indeterminate_noShrink
          ])}

          style={styles.circle}

          {...pathProps}
        />
      </svg>
    </span>
  );
});

RoundProgress.displayName = 'AmauiRoundProgress';

export default RoundProgress;
