import React from 'react';

import { classNames, IColor, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
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
      zIndex: 0,
      padding: '0.14em 0.77em',
      borderRadius: `${(theme.shape.radius.unit / 8) * 0.4}em`,
      transition: theme.methods.transitions.make(['opacity', 'background']),
      opacity: 0
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
  tonal_neutral: { color: theme.methods.palette.color.value('neutral', 30) },

  tonal_primary: { color: theme.methods.palette.color.value('primary', 30) },

  tonal_secondary: { color: theme.methods.palette.color.value('secondary', 30) },

  tonal_tertiary: { color: theme.methods.palette.color.value('tertiary', 30) },

  tonal_quaternary: { color: theme.methods.palette.color.value('quaternary', 30) },

  tonal_info: { color: theme.methods.palette.color.value('info', 30) },

  tonal_success: { color: theme.methods.palette.color.value('success', 30) },

  tonal_warning: { color: theme.methods.palette.color.value('warning', 30) },

  tonal_error: { color: theme.methods.palette.color.value('error', 30) }
}), { name: 'AmauiLink' });

const Link = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLink?.props?.default }), [props_]);

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const { classes } = useStyle(props);

  const {
    tonal,
    color: color_ = 'primary',
    underline = true,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
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

  let color = color_;
  let palette: IColor;

  if (!classes[color]) {
    styles.root.color = color;

    palette = theme.methods.color(color);

    if (tonal) styles.root.color = theme.methods.palette.color.value(undefined, 30, true, palette);
  }

  if (underline === true && !hover) {
    styles.root.textDecorationColor = theme.methods.palette.color.value(color, 70, true, palette);
  }

  if (hover) {
    styles.root.color = theme.methods.palette.color.value(color, 10, true, palette);
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

      className={classNames([
        staticClassName('Link', theme) && [
          'AmauiLink-root',
          `AmauiLink-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          tonal && `AmauiLink-tonal`,
          underline && `AmauiLink-underline-${underline}`,
          focus && `AmauiLink-focus`
        ],

        classes.root,
        className,
        classes[color],
        tonal && classes[`tonal_${color}`],
        underline === true && classes.underline,
        underline === 'hover' && classes.underline_hover,
        focus && classes.focus
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}

      version={other.version || 'b2'}
      Component={other.Component || 'a'}
    >
      {children}
    </Type>
  );
});

Link.displayName = 'AmauiLink';

export default Link;
