import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { IBaseElement, staticClassName, TColor } from '../utils';

const useStyle = styleMethod(theme => ({
  '@keyframes move': {
    '100%': {
      transform: 'translateX(100%)'
    }
  },

  '@keyframes pulse': {
    '0%': {
      opacity: '1'
    },

    '50%': {
      opacity: '0.4'
    },

    '100%': {
      opacity: '1'
    }
  },

  '@keyframes pulseDark': {
    '0%': {
      opacity: '1'
    },

    '50%': {
      opacity: '0.7'
    },

    '100%': {
      opacity: '1'
    }
  },

  root: {
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden'
  },

  wrapper: {
    opacity: theme.palette.light ? '0.07' : '0.14',
    background: 'currentColor',
    width: '100%',
    height: '100%'
  },

  animation_wave: {
    '&::before': {
      content: "''",
      position: 'absolute',
      inset: '0',
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
}), { name: 'AmauiPlaceholder' });

export interface IPlaceholder extends Omit<IBaseElement, 'version'> {
  color?: TColor;
  version?: 'rounded' | 'circle';

  width?: string | number;
  height?: string | number;
  animation?: 'wave' | 'pulse' | boolean;
  text?: boolean;
}

const Placeholder = React.forwardRef((props_: IPlaceholder, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiPlaceholder?.props?.default, ...props_ }), [props_]);

  const {
    color = 'default',
    version = 'rounded',

    width,
    height,

    animation = 'pulse',
    text,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const styles: any = {
    root: {

    }
  };

  if (width !== undefined) styles.root.width = width;

  if (height !== undefined) styles.root.height = height;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Placeholder', theme) && [
          `AmauiPlaceholder-root`,
          version && `AmauiPlaceholder-version-${version}`,
          animation && `AmauiPlaceholder-animation-${animation}`,
          text && `AmauiPlaceholder-text`
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
          staticClassName('Placeholder', theme) && [
            `AmauiPlaceholder-wrapper`
          ],

          classes.wrapper
        ])}
      >
        {children && (
          <div
            className={classNames([
              staticClassName('Placeholder', theme) && [
                `AmauiPlaceholder-children`
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

Placeholder.displayName = 'AmauiPlaceholder';

export default Placeholder;
