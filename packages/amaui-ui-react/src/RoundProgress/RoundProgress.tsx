import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style } from '@amaui/style-react';

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
    fontSize: '48px',

    // Version
    '&$indeterminate': {
      animation: `$spin 1.4s linear infinite`
    },

    '&$determinate': {
      transform: 'rotate(-90deg)'
    },

    // Size
    '&$extra_small': { fontSize: theme.methods.space.value('rg', 'px') },

    '&$small': { fontSize: theme.methods.space.value('md', 'px') },

    '&$regular': { fontSize: theme.methods.space.value('xxl', 'px') },

    '&$large': { fontSize: theme.methods.space.value('xxxl', 'px') },

    // Color
    '&$neutral': { color: theme.palette.text.default.primary },

    '&$primary': { color: theme.methods.palette.color.value('primary', 50) },

    '&$secondary': { color: theme.methods.palette.color.value('secondary', 50) },

    '&$tertiary': { color: theme.methods.palette.color.value('tertiary', 50) },

    '&$quaternary': { color: theme.methods.palette.color.value('quaternary', 50) },

    '&$info': { color: theme.methods.palette.color.value('info', 50) },

    '&$success': { color: theme.methods.palette.color.value('success', 50) },

    '&$warning': { color: theme.methods.palette.color.value('warning', 50) },

    '&$error': { color: theme.methods.palette.color.value('error', 50) },
  },

  svg: {
    width: '1em',
    height: '1em',
    color: 'inherit',
    stroke: 'currentcolor',
  },

  circle: {
    transformOrigin: 'center',
    strokeDasharray: '240px',
    strokeDashoffset: '0px',

    // Version
    '&$indeterminate': {
      animation: `$shrink 1.4s ease-in-out infinite`,

      '&$noShrink': {
        strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
        animation: 'none'
      }
    },

    '&$determinate': {
      strokeDasharray: '101',
      strokeDashoffset: '0',
      transition: theme.methods.transitions.make('stroke-dashoffset')
    }
  },

  circleBackground: {
    strokeDasharray: '240px',
    strokeDashoffset: '0px',
    stroke: 'transparent'
  }
}), { name: 'AmauiRoundProgress' });

// version determinate + value

const RoundProgress = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const {
    size = 'regular',
    color,
    className,
    style,
    pathProps = {},
    pathBackgroundProps = {},
    noShrink,
    thickness = 2,
    rounded: rounded_ = true,
    version = 'indeterminate',
    value,

    ...other
  } = props;

  let rounded = rounded_;

  const styles: any = {
    root: {},
    circle: {}
  };

  if (!classes[size]) styles.root.fontSize = is('number', size) ? `${size}px` : size;

  if (!classes[color]) styles.root.color = color;

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
        classes.root,
        className,
        classes[size],
        classes[color],
        classes[version],
        !noShrink && classes.shrink,
      ])}
    >
      <svg
        viewBox='0 0 24 24'

        className={classes.svg}

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
            classes.circleBackground,
            classes[version],
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
            classes.circle,
            classes[version],
            noShrink && classes.noShrink
          ])}

          style={styles.circle}

          {...pathProps}
        />
      </svg>
    </span>
  );
});

export default RoundProgress;
