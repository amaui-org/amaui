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
    '&$neutral': { color: theme.palette.text.default.primary },

    '&$primary': { color: theme.methods.palette.color.value('primary', 50) },

    '&$secondary': { color: theme.methods.palette.color.value('secondary', 50) },

    '&$tertiary': { color: theme.methods.palette.color.value('tertiary', 50) },

    '&$quaternary': { color: theme.methods.palette.color.value('quaternary', 50) },

    '&$info': { color: theme.methods.palette.color.value('info', 50) },

    '&$success': { color: theme.methods.palette.color.value('success', 50) },

    '&$warning': { color: theme.methods.palette.color.value('warning', 50) },

    '&$error': { color: theme.methods.palette.color.value('error', 50) },
  }
}), { name: 'AmauiLink' });

const Link = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle();
  const [hovered, setHovered] = React.useState(false);

  const theme = useAmauiTheme();

  const {
    className,
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
