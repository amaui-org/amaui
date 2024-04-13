import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';
import { IColor } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    transition: theme.methods.transitions.make(['color', 'text-decoration'], { duration: 'xxs' }),

    '&::before': {
      content: "''",
      display: 'inline-flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'currentColor',
      width: '100%',
      height: '100%',
      zIndex: '0',
      padding: '0.14em 0.77em',
      borderRadius: `${(theme.shape.radius.unit / 8) * 0.4}em`,
      transition: theme.methods.transitions.make(['opacity', 'background']),
      opacity: '0'
    }
  },

  focus: {
    '&::before': {
      opacity: theme.palette.visual_contrast.default.opacity.selected
    }
  },

  // Underline
  underline: {
    textDecoration: 'underline'
  },

  underline_hover: {
    '&:hover': {
      textDecoration: 'underline'
    }
  },

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
  tonal_color_neutral: { color: theme.methods.palette.color.value('neutral', 30) },

  tonal_color_primary: { color: theme.methods.palette.color.value('primary', 30) },

  tonal_color_secondary: { color: theme.methods.palette.color.value('secondary', 30) },

  tonal_color_tertiary: { color: theme.methods.palette.color.value('tertiary', 30) },

  tonal_color_quaternary: { color: theme.methods.palette.color.value('quaternary', 30) },

  tonal_color_info: { color: theme.methods.palette.color.value('info', 30) },

  tonal_color_success: { color: theme.methods.palette.color.value('success', 30) },

  tonal_color_warning: { color: theme.methods.palette.color.value('warning', 30) },

  tonal_color_error: { color: theme.methods.palette.color.value('error', 30) }
}), { name: 'amaui-Link' });

export interface ILink extends Omit<IType, 'color'> {
  color?: IColor;

  underline?: true | 'hover';
}

const Link: React.FC<ILink> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLink?.props?.default, ...props_ }), [props_]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color: color_ = 'primary',

    version = 'b2',

    underline = true,

    Component = 'a',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const styles: any = {
    root: {

    }
  };

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    setHover(true);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    setHover(false);
  }, []);

  const color = color_;
  let palette: any;

  if (!classes[`color_${color}`]) {
    styles.root.color = color;

    palette = theme.methods.color(color as any);

    if (tonal) styles.root.color = theme.methods.palette.color.value(undefined, 30, true, palette);
  }

  if (underline === true && !hover) {
    styles.root.textDecorationColor = theme.methods.palette.color.value(color as any, 70, true, palette);
  }

  if (hover) {
    styles.root.color = theme.methods.palette.color.value(color as any, 10, true, palette);
  }

  return (
    <Type
      ref={ref}

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      onTouchStart={onMouseEnter}

      onTouchEnd={onMouseLeave}

      version={version}

      role='link'

      Component={Component}

      className={classNames([
        staticClassName('Link', theme) && [
          'amaui-Link-root',
          hover && `amaui-Link-hover`,
          focus && `amaui-Link-focus`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        underline === true && classes.underline,
        underline === 'hover' && classes.underline_hover,
        focus && classes.focus
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Type>
  );
});

Link.displayName = 'amaui-Link';

export default Link;
