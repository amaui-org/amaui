import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';
import RoundProgress from '../RoundProgress';
import Type from '../Type';

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
      padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`,

      '&$chip': {
        padding: `${theme.methods.space.value('sm', 'px', -4)} ${theme.methods.space.value('sm', 'px', 4)}`,
        borderRadius: theme.methods.space.value('sm', 'px', -2)
      }
    },

    '&$regular': {
      padding: `${theme.methods.space.value('sm', 'px', 3)} ${theme.methods.space.value('md', 'px')}`,

      '&$chip': {
        padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`,
        borderRadius: theme.methods.space.value('sm', 'px')
      }
    },

    '&$large': {
      padding: `${theme.methods.space.value('rg', 'px')} ${theme.methods.space.value('lg', 'px')}`,

      '&$chip': {
        padding: `${theme.methods.space.value('sm', 'px', 1)} ${theme.methods.space.value('rg', 'px', 4)}`,
        borderRadius: theme.methods.space.value('sm', 'px', 2)
      }
    },

    // fab
    '&$fab': {
      '&$small': {
        height: `${theme.space.unit * 5}px`,
        minWidth: `${theme.space.unit * 8}px`,
        borderRadius: theme.methods.shape.radius.value('rg', 'px', -4),
        padding: theme.methods.shape.radius.value('sm', 'px', 4),
      },

      '&$regular': {
        height: `${theme.space.unit * 7}px`,
        minWidth: `${theme.space.unit * 10}px`,
        borderRadius: theme.methods.shape.radius.value('rg'),
        padding: theme.methods.space.value('rg', 'px')
      },

      '&$large': {
        height: `${theme.space.unit * 9}px`,
        minWidth: `${theme.space.unit * 12}px`,
        borderRadius: theme.methods.shape.radius.value('rg', 'px', 4),
        padding: theme.methods.space.value('md', 'px')
      },
    },

    // icon
    '&$icon': {
      borderRadius: '50%',
      padding: '0',

      '&$small': {
        width: theme.methods.space.value('lg', 'px', -2),
        height: theme.methods.space.value('lg', 'px', -2)
      },

      '&$regular': {
        width: theme.methods.space.value('xl', 'px'),
        height: theme.methods.space.value('xl', 'px')
      },

      '&$large': {
        width: theme.methods.space.value('xxxl', 'px', 4),
        height: theme.methods.space.value('xxxl', 'px', 4)
      },
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

    // Icons
    '&$startIcon': {
      paddingLeft: [0, '!important']
    },

    '&$endIcon': {
      paddingRight: [0, '!important']
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
    display: 'inline-flex',
    position: 'relative',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    gap: theme.methods.space.value('sm', 'px'),

    // Size
    '&$small': {
      gap: theme.methods.space.value('sm', 'px', -2),
      lineHeight: [1.455, '!important']
    },

    '&$regular': {
      gap: theme.methods.space.value('sm', 'px')
    },

    '&$large': {
      gap: theme.methods.space.value('sm', 'px', 2)
    }
  },

  // icon
  iconRoot: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0
  },

  // Icon element
  Icon: {
    position: 'relative',
    lineHeight: 0,

    '&$start': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('sm', 'px', -3)} 0 ${theme.methods.space.value('sm', 'px', 3)}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px', -2)}`,
        }
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('sm', 'px')} 0 ${theme.methods.space.value('rg', 'px')}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px')}`,
        }
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('sm', 'px', 2)} 0 ${theme.methods.space.value('md', 'px', -2)}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px', 2)}`,
        }
      }
    },

    '&$end': {
      '&$small': {
        padding: `0 ${theme.methods.space.value('sm', 'px', 3)} 0 ${theme.methods.space.value('sm', 'px', -3)}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px', -2)}`,
        }
      },

      '&$regular': {
        padding: `0 ${theme.methods.space.value('rg', 'px')} 0 ${theme.methods.space.value('sm', 'px')}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px')}`,
        }
      },

      '&$large': {
        padding: `0 ${theme.methods.space.value('md', 'px', -2)} 0 ${theme.methods.space.value('sm', 'px', 2)}`,

        '&$chip': {
          padding: `0 ${theme.methods.space.value('sm', 'px', 2)}`,
        }
      }
    },
  }
}), { name: 'AmauiButton' });

const Button = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle();
  const [focus, setFocus] = React.useState(false);
  const refs = {
    color: React.useRef<any>()
  };

  const theme = useAmauiTheme();

  const {
    className,

    version = 'outlined',
    size = 'regular',
    color: color_ = 'primary',
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

    fab,
    chip,
    icon,

    children,

    ...other
  } = props;

  let color = color_;
  let startIcon = startIcon_;
  let endIcon = endIcon_;
  let disabled = disabled_ || loading;
  let TypeProps = { version: 'l2' };

  if (disabled) color = 'default';

  React.useEffect(() => {
    if (classes[color] === undefined && is('string', color)) {
      refs.color.current = theme.methods.color(color);
    }
  }, [color]);

  const styles: any = {
    root: {},
    background: {},
    border: {},
    icon: {},
    label: { margin: 0 },
    Icon: { fontSize: '17px' }
  };

  let newColor: any;

  // color
  if (classes[color] === undefined && is('string', color)) {
    if (!refs.color.current) refs.color.current = theme.methods.color(color);

    newColor = true;

    styles.root.color = color;
  }

  if (version === 'filled') {
    styles.background.background = color === 'default' ? theme.palette.text.default.primary : theme.palette.color[color] ? (theme.palette.color[color] as any).main : color;

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

  // size
  if (size === 'small') {
    styles.Icon.fontSize = '16px';

    TypeProps.version = 'l3';
  }

  if (size === 'large') {
    styles.Icon.fontSize = '22px';

    TypeProps.version = 'l1';
  }

  let children_ = children;

  // icon
  if (icon) {
    if (!['small', 'regular', 'large'].includes(size)) {
      children_ = is('array', children_) ?
        children_.filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, { key: index }) :
            React.cloneElement(item, { key: index, size: (item.props as any).size !== undefined ? (item.props as any).size : size * 0.6 } as any)

        ) :
        React.cloneElement(children_, { size: children_.props?.size !== undefined ? children_.props.size : size * 0.6 });

      styles.icon.width = size;
      styles.icon.height = size;
    }
    else children_ = is('array', children_) ?
      children_.filter(Boolean).map(
        (item: any, index, number) => is('string', item.type) ?
          React.cloneElement(item, { key: index }) :
          React.cloneElement(item, { key: index, size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) } as any)
      ) :
      React.cloneElement(children_, { size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) });
  }

  // fab
  if (fab) {
    if (React.Children.count(children_) === 1 && !is('string', children_) && size !== 'large') styles.root.minWidth = 'initial';

    if (size === 'small') styles.Icon.fontSize = 18;
    if (size === 'regular') styles.Icon.fontSize = 24;
    if (size === 'large') styles.Icon.fontSize = 30;

    children_ = React.Children.toArray(children_).map(item => React.isValidElement(item) ? React.cloneElement(item, { style: styles.Icon }) : item);
  }

  // loading
  if (loading) {
    const iconLoading = React.cloneElement(loadingIcon, { color: 'inherit', style: styles.Icon });

    if (loadingLabel) children_ = loadingLabel;
    else if (loadingIconPosition === 'center') {
      children_ = icon ? React.cloneElement(loadingIcon, { color: 'inherit', size: size === 'small' ? 18 : size === 'regular' ? 24 : 36 }) : iconLoading;

      styles.label.lineHeight = 0;
    }

    if (loadingIconPosition === 'start') startIcon = iconLoading;
    else if (loadingIconPosition === 'end') endIcon = iconLoading;
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
        icon && classes.icon,
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
        disabled && classes.disabled,
        fab && classes.fab,
        chip && classes.chip,
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

      {startIcon && (
        <span className={classNames([
          classes.Icon,
          classes.start,
          classes[size],
          chip && classes.chip
        ])}>
          {React.cloneElement(startIcon, { style: styles.Icon })}
        </span>
      )}

      {icon ? (
        <span
          className={classes.iconRoot}

          style={styles.icon}
        >
          {children_}
        </span>
      ) : (
        <Type
          className={classNames([
            classes.label,
            classes[size],
            chip && classes.chip
          ])}

          Component='span'

          style={styles.label}

          {...TypeProps}
        >
          {children_}
        </Type>
      )}

      {endIcon && (
        <span className={classNames([
          classes.Icon,
          classes.end,
          classes[size],
          chip && classes.chip
        ])}>
          {React.cloneElement(endIcon, { style: styles.Icon })}
        </span>
      )}

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
    </Component>
  );
});

export default Button;
