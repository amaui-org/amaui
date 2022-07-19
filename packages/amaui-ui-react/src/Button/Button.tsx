import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';
import RoundProgress from '../RoundProgress';

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

    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    borderRadius: theme.methods.space.value('xl', 'px'),
    textAlign: 'center',
    textDecoration: 'none',
    overflow: 'hidden',
    verticalAlign: 'middle',
    userSelect: 'none',

    transition: theme.methods.transitions.make(['color']),

    // Reset
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    background: 'transparent',

    // Size
    '&$small': {
      padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`
    },

    '&$regular': {
      padding: `${theme.methods.space.value('sm') as number + 3}px ${theme.methods.space.value('md', 'px')}`
    },

    '&$large': {
      padding: `${theme.methods.space.value('rg', 'px')} ${theme.methods.space.value('lg', 'px')}`
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

    // Icons
    '&$startIcon': {
      paddingLeft: '0'
    },

    '&$endIcon': {
      paddingRight: '0'
    },

    // Shadows
    '&$elevation': {
      boxShadow: theme.shadows.values.neutral[1],
      transition: theme.methods.transitions.make('box-shadow'),

      '&:hover': {
        boxShadow: theme.shadows.values.neutral[3]
      }
    },

    // Disabled
    '&$disabled': {
      cursor: 'default',

      '&$filled': {
        color: [theme.palette.text.neutral.primary, '!important'],
        opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active']
      },

      '&$tonal': {
        color: [theme.palette.text.neutral.primary, '!important'],
        opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active']
      },

      '&$outlined': {
        color: theme.palette.text.disabled
      },

      '&$text': {
        color: theme.palette.text.disabled
      }
    }
  },

  fullWidth: {
    width: '100%'
  },

  background: {
    ...other,

    transition: theme.methods.transitions.make(['background']),

    '&$disabled': {
      '&$filled': {
        background: [theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary, '!important']
      },

      '&$tonal': {
        background: [theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary, '!important']
      }
    }
  },

  border: {
    ...other,
    boxShadow: 'inset 0 0 0 1px currentColor',

    transition: theme.methods.transitions.make(['boxShadow']),

    '&$disabled': {
      '&$outlined': {
        opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'quaternary' : 'secondary']
      }
    }
  },

  // Label
  label: {
    textTransform: 'capitalize',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    position: 'relative',

    // Size
    '&$small': {
      ...theme.typography.values.l3,
      lineHeight: 1.455
    },

    '&$regular': {
      ...theme.typography.values.l2,
    },

    '&$large': {
      ...theme.typography.values.l1,
    }
  },

  // Other
  icon: {
    position: 'relative',
    pointerEvents: 'none',
    lineHeight: 0,

    '&$start': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('sm') - 3}px 0 ${theme.methods.space.value('sm') + 3}px`
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('sm', 'px')} 0 ${theme.methods.space.value('rg', 'px')}`
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('sm') + 2}px 0 ${theme.methods.space.value('md') - 2}px`
      }
    },

    '&$end': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('sm') + 3}px 0 ${theme.methods.space.value('sm') - 3}px`
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('rg', 'px')} 0 ${theme.methods.space.value('sm', 'px')}`
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('md') - 2}px 0 ${theme.methods.space.value('sm') + 2}px`
      }
    },
  }
}), { name: 'AmauiButton' });

const Button = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle(props);
  const [focus, setFocus] = React.useState(false);
  const refs = {
    color: React.useRef<any>()
  };

  const theme = useAmauiTheme();

  const {
    className,

    version = 'outlined',
    size = 'regular',
    color = 'neutral',
    tonal,

    Component = 'button',
    prefer = 'light',

    style,
    fullWidth,

    InteractionProps = {},
    startIcon: startIcon_,
    endIcon: endIcon_,
    elevation = true,

    loading,
    loadingLabel,
    loadingIcon = <RoundProgress size='small' />,
    loadingIconPosition = 'center',
    disabled: disabled_,

    children,

    ...other
  } = props;

  React.useEffect(() => {
    if (classes[color] === undefined && is('string', color)) {
      refs.color.current = theme.methods.color(color);
    }
  }, [color]);

  let startIcon = startIcon_;
  let endIcon = endIcon_;
  let disabled = disabled_ || loading;

  const styles: any = {
    root: {},
    label: {},
    background: {},
    border: {},
    icon: { fontSize: '17px' }
  };

  let newColor: any;

  if (classes[color] === undefined && is('string', color)) {
    if (!refs.color.current) refs.color.current = theme.methods.color(color);

    newColor = true;

    styles.root.color = color;
  }

  if (version === 'filled') {
    styles.background.background = color === 'neutral' ? theme.palette.text.default.primary : theme.palette.color[color] ? theme.methods.palette.color.value(color, 50) : color;

    styles.root.color = theme.methods.palette.color.text(styles.background.background, true, prefer);
  }

  if (tonal) {
    // Text
    if (version === 'text') {
      styles.root.color = theme.methods.palette.color.value(color, 30, true, refs.color.current);
    }

    // Outlined
    if (version === 'outlined') {
      styles.root.color = theme.methods.palette.color.value(color, 50, true, refs.color.current);

      styles.label.color = theme.methods.palette.color.value(color, 10, true, refs.color.current);

      styles.border.boxShadow = `inset 0 0 0 1px ${theme.methods.palette.color.value(color, 30, true, refs.color.current)}`;
    }

    // Filled
    if (version === 'filled') {
      styles.root.color = theme.methods.palette.color.value(color, 10, true, refs.color.current);

      styles.background.background = theme.methods.palette.color.value(color, 90, true, refs.color.current);
    }
  }

  if (size === 'small') styles.icon.fontSize = '16px';

  if (size === 'large') styles.icon.fontSize = '22px';

  let children_ = children;

  if (loading) {
    if (loadingLabel) children_ = loadingLabel;
    else if (loadingIconPosition === 'center') {
      children_ = React.cloneElement(loadingIcon, { style: styles.icon });

      styles.label.lineHeight = 0;
    }

    if (loadingIconPosition === 'start') startIcon = loadingIcon;
    else if (loadingIconPosition === 'end') endIcon = loadingIcon;
  }

  if (props.selected) InteractionProps.selected = props.selected;

  return (
    <Component
      ref={ref}

      className={classNames([
        classes.root,
        className,
        classes[size],
        classes[color],
        classes[version],
        tonal && classes.tonal,
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
        disabled && classes.disabled,
        newColor && 'amaui-color-new'
      ])}

      style={{
        ...(style || {}),

        ...styles.root
      }}

      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}

      disabled={disabled}

      {...other}
    >
      {['filled', 'tonal'].includes(version) && (
        <span
          className={classNames([
            classes.background,
            classes[version],
            tonal && classes.tonal,
            disabled && classes.disabled
          ])}

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
          className={classNames([
            classes.border,
            classes[version],
            tonal && classes.tonal,
            disabled && classes.disabled
          ])}

          style={styles.border}
        />
      )}

      {startIcon && (
        <span className={classNames([classes.icon, classes.start, classes[size]])}>
          {React.cloneElement(startIcon, { style: styles.icon })}
        </span>
      )}

      <span
        className={classNames([classes.label, classes[size]])}

        style={styles.label}
      >
        {children_}
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
