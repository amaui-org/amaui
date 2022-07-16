import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';
import { is } from '@amaui/utils';

const other = {
  pointerEvents: 'none',
  borderRadius: 'inherit',
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '100%'
};

const useStyle = style(theme => ({
  root: {
    '@cs': ['amaui-button'],

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    borderRadius: `${theme.methods.space.value('xl')}px`,
    textAlign: 'center',
    textDecoration: 'none',
    overflow: 'hidden',
    verticalAlign: 'middle',

    // Reset
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    background: 'transparent'
  },

  // Version

  // Color
  neutral: { color: theme.palette.text.default.primary },
  primary: { color: theme.methods.palette.color.value('primary', 50) },
  secondary: { color: theme.methods.palette.color.value('secondary', 50) },
  tertiary: { color: theme.methods.palette.color.value('tertiary', 50) },
  quaternary: { color: theme.methods.palette.color.value('quaternary', 50) },
  info: { color: theme.methods.palette.color.value('info', 50) },
  success: { color: theme.methods.palette.color.value('success', 50) },
  warning: { color: theme.methods.palette.color.value('warning', 50) },
  error: { color: theme.methods.palette.color.value('error', 50) },

  // Size
  small: {
    padding: `${theme.methods.space.value('sm')}px ${theme.methods.space.value('rg')}px`
  },
  regular: {
    padding: `${theme.methods.space.value('sm') as number + 2}px ${theme.methods.space.value('md')}px`
  },
  large: {
    padding: `${theme.methods.space.value('rg')}px ${theme.methods.space.value('lg')}px`
  },

  background: {
    ...other
  },

  border: {
    ...other,
    boxShadow: 'inset 0 0 0 1px currentColor'
  },

  // Other
  text: {
    textTransform: 'capitalize',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    position: 'relative',
  },
  text_small: {
    ...theme.typography.values.b3,
    lineHeight: 1
  },
  text_regular: {
    ...theme.typography.values.b2,
  },
  text_large: {
    ...theme.typography.values.b1,
  }
}));

// To do
// In focus Interaction focus
// Disabled
// Full width
// Shadows
// Loading

const Button = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle(props);

  const theme = useAmauiTheme();

  const {
    className,
    version = 'outlined',
    size = 'regular',
    color = 'neutral',
    Component = 'button',
    prefer = 'light',
    style,
    InteractionProps = {},
    children,
    ...other
  } = props;

  const styles: any = {
    root: {},
    background: {}
  };

  let newColor = false;

  if (classes[color] === undefined && is('string', color)) {
    newColor = true;

    styles.root.color = color;
  }

  if (version === 'filled') {
    styles.background.background = color === 'neutral' ? theme.palette.text.default.primary : theme.palette.color[color] ? theme.methods.palette.color.value(color, 50) : color;

    styles.root.color = theme.methods.palette.color.text(styles.background.background, true, prefer);
  }
  else if (version === 'tonal') {
    styles.background.background = theme.methods.palette.color.value(color, 90);

    styles.root.color = theme.methods.palette.color.value(color, 10);
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        classes.root,
        className, classes[size || 'regular'],
        classes[color || 'neutral'],
        newColor && 'amaui-color-new'
      ])}

      style={{
        ...(style || {}),

        ...styles.root
      }}

      {...other}
    >
      {['filled', 'tonal'].includes(version) && (
        <span
          className={classes.background}

          style={styles.background}
        />
      )}

      <Interaction
        border={false}

        {...InteractionProps}
      />

      {version === 'outlined' && (
        <span
          className={classes.border}
        />
      )}

      <span
        className={classNames([classes.text, classes[`text_${size}`]])}
      >
        {children}
      </span>
    </Component>
  );
});

export default Button;
