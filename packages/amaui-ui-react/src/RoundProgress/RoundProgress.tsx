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
    animation: `$spin 1.4s linear infinite`,

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
    animation: `$shrink 1.4s ease-in-out infinite`,

    '&$noShrink': {
      strokeDashoffset: `${noShrinkStrokeDashOffset}px`,
      animation: 'none'
    }
  }
}), { name: 'AmauiRoundProgress' });

// version determinate + value
// noShrink
// thickness

const RoundProgress = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const {
    size = 'regular',
    color,
    className,
    style,
    pathProps = {},
    noShrink,
    thickness = 2,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!classes[size]) styles.root.fontSize = is('number', size) ? `${size}px` : size;

  if (!classes[color]) styles.root.color = color;

  return (
    <span
      ref={ref}

      className={classNames([
        classes.root,
        className,
        classes[size],
        classes[color],
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
          strokeLinecap='round'
          cx='12'
          cy='12'
          r='10'

          className={classNames([
            classes.circle,
            noShrink && classes.noShrink
          ])}

          {...pathProps}
        />
      </svg>
    </span>
  );
});

export default RoundProgress;
