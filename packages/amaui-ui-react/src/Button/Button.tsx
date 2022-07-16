import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';

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
    userSelect: 'none',

    // Reset
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    background: 'transparent',

    // Size
    '&$small': {
      padding: `${theme.methods.space.value('sm')}px ${theme.methods.space.value('rg')}px`
    },

    '&$regular': {
      padding: `${theme.methods.space.value('sm') as number + 2}px ${theme.methods.space.value('md')}px`
    },

    '&$large': {
      padding: `${theme.methods.space.value('rg')}px ${theme.methods.space.value('lg')}px`
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

    // Other
    '&$startIcon': {
      paddingLeft: '0'
    },
    '&$endIcon': {
      paddingRight: '0'
    },

    '&$disabled': {
      cursor: 'default'
    }
  },

  fullWidth: {
    width: '100%'
  },

  background: {
    ...other
  },

  border: {
    ...other,
    boxShadow: 'inset 0 0 0 1px currentColor'
  },

  // Text
  text: {
    textTransform: 'capitalize',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    position: 'relative',

    // Size
    '&$small': {
      ...theme.typography.values.b3,
      lineHeight: 1
    },

    '&$regular': {
      ...theme.typography.values.b2,
    },

    '&$large': {
      ...theme.typography.values.b1,
    }
  },

  // Other
  icon: {
    position: 'relative',
    pointerEvents: 'none',
    lineHeight: 0,

    '&$start': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('xs')}px 0 ${theme.methods.space.value('sm')}px`
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('sm')}px 0 ${theme.methods.space.value('rg')}px`
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('rg')}px 0 ${theme.methods.space.value('md')}px`
      }
    },

    '&$end': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('sm')}px 0 ${theme.methods.space.value('xs')}px`
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('rg')}px 0 ${theme.methods.space.value('sm')}px`
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('md')}px 0 ${theme.methods.space.value('rg')}px`
      }
    },
  }
}));

// To do
// Elevated
// Loading

const Button = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle(props);
  const [focus, setFocus] = React.useState(false);

  const theme = useAmauiTheme();

  const {
    className,
    version = 'outlined',
    size = 'regular',
    color = 'neutral',
    Component = 'button',
    prefer = 'light',
    style,
    fullWidth,
    InteractionProps = {},
    startIcon,
    endIcon,
    children,
    ...other
  } = props;

  const styles: any = {
    root: {},
    background: {},
    border: {},
    icon: { fontSize: '20px' }
  };

  let newColor = false;

  if (classes[color] === undefined && is('string', color)) {
    newColor = true;

    styles.root.color = color;
  }

  if (props.disabled) {
    const opacity = theme.palette.light ? 'disabled' : 'active';

    if (['filled', 'tonal'].includes(version)) {
      styles.background.background = theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary;

      styles.root.color = theme.palette.text.neutral.primary;
      styles.root.opacity = theme.palette.visual_contrast.default.opacity[opacity];
    }
    else {
      styles.root.color = theme.palette.text.disabled;
    }

    if (version === 'outlined') styles.border.opacity = theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'quaternary' : 'secondary'];
  }
  else {
    if (version === 'filled') {
      styles.background.background = color === 'neutral' ? theme.palette.text.default.primary : theme.palette.color[color] ? theme.methods.palette.color.value(color, 50) : color;

      styles.root.color = theme.methods.palette.color.text(styles.background.background, true, prefer);
    }
    else if (version === 'tonal') {
      styles.background.background = theme.methods.palette.color.value(color, 90);

      styles.root.color = theme.methods.palette.color.value(color, 10);
    }
  }

  if (size === 'small') styles.icon.fontSize = '16px';
  if (size === 'large') styles.icon.fontSize = '24px';

  return (
    <Component
      ref={ref}

      className={classNames([
        classes.root,
        className,
        classes[size],
        classes[color],
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
        props.disabled && classes.disabled,
        newColor && 'amaui-color-new'
      ])}

      style={{
        ...(style || {}),

        ...styles.root
      }}

      {...other}

      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {['filled', 'tonal'].includes(version) && (
        <span
          className={classes.background}

          style={styles.background}
        />
      )}

      <Interaction
        border={false}

        pulse={focus}

        {...InteractionProps}
      />

      {version === 'outlined' && (
        <span
          className={classes.border}

          style={styles.border}
        />
      )}

      {startIcon && (
        <span className={classNames([classes.icon, classes.start, classes[size]])}>
          {React.cloneElement(startIcon, { style: styles.icon })}
        </span>
      )}

      <span
        className={classNames([classes.text, classes[size]])}
      >
        {children}
      </span>

      {endIcon && (
        <span className={classNames([classes.icon, classes.end, classes[size]])}>
          {React.cloneElement(endIcon, { style: styles.icon })}
        </span>
      )}
    </Component>
  );
});

export default Button;
