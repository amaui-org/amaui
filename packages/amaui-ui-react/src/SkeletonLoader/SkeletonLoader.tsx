import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  '@keyframes move': {
    '100%': {
      transform: 'translateX(100%)'
    }
  },

  '@keyframes pulse': {
    '0%': {
      opacity: 1
    },

    '50%': {
      opacity: 0.4
    },

    '100%': {
      opacity: 1
    }
  },

  '@keyframes pulseDark': {
    '0%': {
      opacity: 1
    },

    '50%': {
      opacity: 0.7
    },

    '100%': {
      opacity: 1
    }
  },

  root: {
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden'
  },

  wrapper: {
    opacity: theme.palette.light ? 0.07 : 0.14,
    background: 'currentColor',
    width: '100%',
    height: '100%'
  },

  animation_wave: {
    '&::before': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, transparent, ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, 4)}, transparent)`,
      transform: 'translateX(-100%)',
      animation: '$move 2.4s infinite'
    }
  },

  animation_pulse: {
    animation: `$pulse${theme.palette.light ? '' : 'Dark'} 2.4s 0.4s infinite`
  },

  version_circle: {
    borderRadius: '50%'
  },

  version_rounded: {
    borderRadius: `${theme.shape.radius.unit}px`
  },

  text: {
    height: '1em'
  },

  children: {
    visibility: 'hidden'
  }
}), { name: 'AmauiSkeletonLoader' });

const SkeletonLoader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSkeletonLoader?.props?.default }), [props_]);

  const {
    color = 'default',
    version = 'rounded',
    width,
    height,
    animation = 'pulse',
    Component = 'div',
    text,

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const styles: any = {
    root: {}
  };

  if (width !== undefined) styles.root.width = width;

  if (height !== undefined) styles.root.height = height;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('SkeletonLoader', theme) && [
          `AmauiSkeletonLoader-root`,
          version && `AmauiSkeletonLoader-version-${version}`,
          animation && `AmauiSkeletonLoader-animation-${animation}`,
          text && `AmauiSkeletonLoader-text`
        ],

        className,
        classes.root,
        classes[`version_${version}`],
        animation && animation && classes[`animation_${animation}`],
        text && classes.text
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      <Surface
        version='text'

        tonal={false}

        color={color}

        className={classNames([
          staticClassName('SkeletonLoader', theme) && [
            `AmauiSkeletonLoader-wrapper`
          ],

          classes.wrapper
        ])}
      >
        {children && (
          <div
            className={classNames([
              staticClassName('SkeletonLoader', theme) && [
                `AmauiSkeletonLoader-children`
              ],

              classes.children
            ])}
          >
            {children}
          </div>
        )}
      </Surface>
    </Component>
  );
});

SkeletonLoader.displayName = 'AmauiSkeletonLoader';

export default SkeletonLoader;
