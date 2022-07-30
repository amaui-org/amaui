import React from 'react';

import { classNames, IColor, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

const useStyle = style(theme => ({
  root: {
    transition: theme.methods.transitions.make(['color', 'text-decoration'], { duration: 'xxs' }),

    // Underline
    '&$underline': {
      textDecoration: 'underline'
    },

    '&$underline_hover': {
      '&:hover': {
        textDecoration: 'underline'
      }
    },

    // Color
    '&$default': { color: theme.palette.text.default.primary },

    '&$neutral': { color: theme.palette.color.neutral.main },

    '&$primary': { color: theme.palette.color.primary.main },

    '&$secondary': { color: theme.palette.color.secondary.main },

    '&$tertiary': { color: theme.palette.color.tertiary.main },

    '&$quaternary': { color: theme.palette.color.quaternary.main },

    '&$info': { color: theme.palette.color.info.main },

    '&$success': { color: theme.palette.color.success.main },

    '&$warning': { color: theme.palette.color.warning.main },

    '&$error': { color: theme.palette.color.error.main },

    '&$tonal': {
      '&$neutral': { color: theme.methods.palette.color.value('neutral', 30) },

      '&$primary': { color: theme.methods.palette.color.value('primary', 30) },

      '&$secondary': { color: theme.methods.palette.color.value('secondary', 30) },

      '&$tertiary': { color: theme.methods.palette.color.value('tertiary', 30) },

      '&$quaternary': { color: theme.methods.palette.color.value('quaternary', 30) },

      '&$info': { color: theme.methods.palette.color.value('info', 30) },

      '&$success': { color: theme.methods.palette.color.value('success', 30) },

      '&$warning': { color: theme.methods.palette.color.value('warning', 30) },

      '&$error': { color: theme.methods.palette.color.value('error', 30) }
    }
  }
}), { name: 'AmauiLink' });

const Link = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLink.props?.default }), [props_]);

  const [hovered, setHovered] = React.useState(false);

  const { classes } = useStyle(props);

  const {
    className,
    tonal,
    color: color_ = 'primary',
    underline = true,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  let color = color_;
  let palette: IColor;

  if (!classes[color]) {
    styles.root.color = color;

    palette = theme.methods.color(color);

    if (tonal) styles.root.color = theme.methods.palette.color.value(undefined, 30, true, palette);
  }

  if (underline === true && !hovered) {
    styles.root.textDecorationColor = theme.methods.palette.color.value(color, 70, true, palette);
  }

  if (hovered) {
    styles.root.color = theme.methods.palette.color.value(color, 10, true, palette);
  }

  return (
    <Type
      ref={ref}

      className={classNames([
        classes.root,
        className,
        classes[color],
        tonal && classes.tonal,
        underline === true && classes.underline,
        underline === 'hover' && classes.underline_hover,
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}

      version={other.version || 'b2'}
      Component={other.Component || 'a'}

      onMouseEnter={() => setHovered(true)}
      onTouchStart={() => setHovered(true)}

      onMouseLeave={() => setHovered(false)}
      onTouchEnd={() => setHovered(false)}
    >
      {children}
    </Type>
  );
});

export default Link;
