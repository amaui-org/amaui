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
  indeterminate: {
    animation: `$spin 1.4s linear infinite`
  },

  determinate: {
    transform: 'rotate(-90deg)'
  },

  // Size
  extra_small: { fontSize: theme.methods.space.value('rg', 'px') },

  small: { fontSize: theme.methods.space.value('md', 'px') },

  regular: { fontSize: theme.methods.space.value('xxl', 'px') },

  large: { fontSize: theme.methods.space.value('xxxl', 'px') },

  // Color
  default: { color: theme.palette.text.default.primary },

  neutral: { color: theme.palette.color.neutral.main },

  primary: { color: theme.palette.color.primary.main },

  secondary: { color: theme.palette.color.secondary.main },

  tertiary: { color: theme.palette.color.tertiary.main },

  quaternary: { color: theme.palette.color.quaternary.main },

  info: { color: theme.palette.color.info.main },

  success: { color: theme.palette.color.success.main },

  warning: { color: theme.palette.color.warning.main },

  error: { color: theme.palette.color.error.main },

  // Tonal
  tonal_neutral: { color: theme.methods.palette.color.value('neutral', 70) },

  tonal_primary: { color: theme.methods.palette.color.value('primary', 70) },

  tonal_secondary: { color: theme.methods.palette.color.value('secondary', 70) },

  tonal_tertiary: { color: theme.methods.palette.color.value('tertiary', 70) },

  tonal_quaternary: { color: theme.methods.palette.color.value('quaternary', 70) },

  tonal_info: { color: theme.methods.palette.color.value('info', 70) },

  tonal_success: { color: theme.methods.palette.color.value('success', 70) },

  tonal_warning: { color: theme.methods.palette.color.value('warning', 70) },

  tonal_error: { color: theme.methods.palette.color.value('error', 70) },

  svg: {
    width: '1em',
    height: '1em',
    color: 'inherit',
    stroke: 'currentcolor',
  },

  path: {
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
          `AmauiRoundedProgress-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiRoundedProgress-size-${size}`,
          tonal && `AmauiRoundedProgress-tonal`,
          rounded && `AmauiRoundedProgress-rounded`,
          noShrink ? `AmauiRoundedProgress-noShrink` : `AmauiRoundedProgress-shrink`
        ],

        classes.root,
        className,
        classes[size],
        classes[color],
        classes[version],
        tonal && classes[`tonal_${color}`]
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
          strokeLinecap={rounded ? 'round' : 'butt'}
          cx='12'
          cy='12'
          r='10'

          {...pathBackgroundProps}

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'AmauiRoundedProgress-pathBackground',
              `AmauiRoundedProgress-version-${version}`
            ],

            classes.pathBackground,
            classes[`path_${version}`],
            pathBackgroundProps.className
          ])}
        />

        <circle
          fill='none'
          strokeWidth={thickness}
          strokeLinecap={rounded ? 'round' : 'butt'}
          cx='12'
          cy='12'
          r='10'

          className={classNames([
            staticClassName('RoundedProgress', theme) && [
              'AmauiRoundedProgress-path',
              `AmauiRoundedProgress-version-${version}`
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

export default RoundProgress;
