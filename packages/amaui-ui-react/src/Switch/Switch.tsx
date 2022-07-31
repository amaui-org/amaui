import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconButton from '../IconButton';
import Keyframes from '../Keyframes';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    borderRadius: theme.methods.space.value('lg')
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
  tonal_neutral: { color: theme.methods.palette.color.value('neutral', 60) },

  tonal_primary: { color: theme.methods.palette.color.value('primary', 60) },

  tonal_secondary: { color: theme.methods.palette.color.value('secondary', 60) },

  tonal_tertiary: { color: theme.methods.palette.color.value('tertiary', 60) },

  tonal_quaternary: { color: theme.methods.palette.color.value('quaternary', 60) },

  tonal_info: { color: theme.methods.palette.color.value('info', 60) },

  tonal_success: { color: theme.methods.palette.color.value('success', 60) },

  tonal_warning: { color: theme.methods.palette.color.value('warning', 60) },

  tonal_error: { color: theme.methods.palette.color.value('error', 60) },

  small: {
    height: theme.methods.space.value('md', 'px'),
    width: theme.methods.space.value('xxl', 'px', -4)
  },

  regular: {
    height: theme.methods.space.value('lg', 'px'),
    width: theme.methods.space.value('xxxl', 'px', -4)
  },

  large: {
    height: theme.methods.space.value('xl', 'px'),
    width: theme.methods.space.value('xxxl', 'px', 4)
  },

  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  },

  background: {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    borderRadius: theme.methods.space.value('lg'),
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'sm' })
  },

  background_disabled: {
    background: theme.palette.text.default.secondary
  },

  border: {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: `2px solid`,
    borderColor: theme.palette.text.default.secondary,
    borderRadius: theme.methods.space.value('lg'),
    transition: theme.methods.transitions.make(['opacity'], { duration: 'sm' })
  },

  // Tonal
  border_tonal_neutral: { borderColor: theme.palette.color['neutral'][theme.palette.light ? 40 : 20] },

  border_tonal_primary: { borderColor: theme.palette.color['primary'][theme.palette.light ? 40 : 20] },

  border_tonal_secondary: { borderColor: theme.palette.color['secondary'][theme.palette.light ? 40 : 20] },

  border_tonal_tertiary: { borderColor: theme.palette.color['tertiary'][theme.palette.light ? 40 : 20] },

  border_tonal_quaternary: { borderColor: theme.palette.color['quaternary'][theme.palette.light ? 40 : 20] },

  border_tonal_info: { borderColor: theme.palette.color['info'][theme.palette.light ? 40 : 20] },

  border_tonal_success: { borderColor: theme.palette.color['success'][theme.palette.light ? 40 : 20] },

  border_tonal_warning: { borderColor: theme.palette.color['warning'][theme.palette.light ? 40 : 20] },

  border_tonal_error: { borderColor: theme.palette.color['error'][theme.palette.light ? 40 : 20] },

  iconButton: {
    top: '50%'
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    background: 'currentColor',
    borderRadius: theme.methods.space.value('lg', 'px')
  }
}), { name: 'AmauiSwitch' });

const Icon = (props: any) => {
  const {
    size,

    style,

    children,

    ...other
  } = props;

  let fontSize = 24;

  if (size === 'very small') fontSize = 12;
  else if (size === 'small') fontSize = 18;
  else if (size === 'regular') fontSize = 24;
  else if (size === 'medium') fontSize = 30;
  else if (size === 'large') fontSize = 38;
  else if (size === 'very large') fontSize = 42;
  else if (size !== undefined) fontSize = size;

  return (
    <span
      style={{
        ...style,

        fontSize
      }}

      {...other}
    >
      {children && React.cloneElement(children, { size: fontSize / 1.5 })}
    </span>
  );
};

const Switch = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSwitch?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    size = 'regular',
    valueDefault,
    value,
    onChange,
    Component = 'span',
    disabled,
    OnIcon,
    OffIcon,

    className,
    style,

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);
  const animation = React.useRef(false);

  const { classes } = useStyle(props);

  const styles: any = {
    root: {},
    background: {},
    border: {},
    iconButton: {}
  };

  React.useEffect(() => {
    if (value !== undefined && checked !== value) {
      setChecked(value);

      animation.current = true;
    }
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !animation.current) {
      if (is('function', onChange)) onChange(!checked, event);

      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) {
        setChecked(!checked);

        animation.current = true;
      }
    }
  };

  let palette: any;

  if (!theme.palette.color[color]) {
    palette = theme.methods.color(color);

    styles.root.color = color;
  }

  const keyframes = {
    checked: [
      { name: 'growStart', timeout: 240 },
      { name: 'waitStart', timeout: 0 },
      { name: 'moveEnd', timeout: 70 },
      { name: 'doneEnd', timeout: 100 }
    ],
    unchecked: [
      { name: 'growEnd', timeout: 240 },
      { name: 'waitEnd', timeout: 0 },
      { name: 'moveStart', timeout: 70 },
      { name: 'doneStart', timeout: 100 }
    ]
  };

  const sizes = (version, element): any => {
    if (element === 'iconButton') {
      switch (version) {
        case 'unchecked':
          if (size === 'small') return 'translate(-3px, -50%)';

          if (size === 'large') return 'translate(-5px, -50%)';

          return 'translate(-4px, -50%)';

        case 'grow-start':
          if (size === 'small') return 'translate(-3px, -50%)';

          if (size === 'large') return 'translate(-5px, -50%)';

          return 'translate(-4px, -50%)';

        case 'move-end':
          if (size === 'small') return 'translate(11px, -50%)';

          if (size === 'large') return 'translate(11px, -50%)';

          return 'translate(11px, -50%)';

        case 'grow-end':
          if (size === 'small') return 'translate(17px, -50%)';

          if (size === 'large') return 'translate(16px, -50%)';

          return 'translate(16px, -50%)';

        case 'move-start':
          if (size === 'small') return 'translate(1px, -50%)';

          if (size === 'large') return 'translate(1px, -50%)';

          return 'translate(1px, -50%)';

        case 'checked':
          if (size === 'small') return 'translate(16px, -50%)';

          if (size === 'large') return 'translate(16px, -50%)';;

          return 'translate(16px, -50%)';

        default:
          break;
      }
    }
    else {
      switch (version) {
        case 'unchecked':
          if (OffIcon) {
            if (size === 'small') return 'scale(1)';

            if (size === 'large') return 'scale(1)';

            return 'scale(1)';
          }

          if (size === 'small') return 'scale(0.6665)';

          if (size === 'large') return 'scale(0.6665)';

          return 'scale(0.6665)';

        case 'grow-start':
          if (size === 'small') return 'scale(1.116)';

          if (size === 'large') return 'scale(1.2)';

          return 'scale(1.1665)';

        case 'move-end':
          if (size === 'small') return {
            transform: 'scale(1)',
            width: 24
          };

          if (size === 'large') return {
            transform: 'scale(1)',
            width: 41
          };

          return {
            transform: 'scale(1)',
            width: 33
          };

        case 'grow-end':
          if (size === 'small') return 'scale(1.116)';

          if (size === 'large') return 'scale(1.2)';

          return 'scale(1.1665)';

        case 'move-start':
          if (OffIcon) {
            if (size === 'small') return {
              transform: 'scale(1)',
              width: 24
            };

            if (size === 'large') return {
              transform: 'scale(1)',
              width: 41
            };

            return {
              transform: 'scale(1)',
              width: 33
            };
          }

          if (size === 'small') return {
            transform: 'scale(0.6665)',
            width: 24
          };

          if (size === 'large') return {
            transform: 'scale(0.6665)',
            width: 41
          };

          return {
            transform: 'scale(0.6665)',
            width: 33
          };

        case 'checked':
          if (size === 'small') return 'scale(1)';

          if (size === 'large') return 'scale(1)';

          return 'scale(1)';

        default:
          break;
      }
    }
  };

  const initial = {
    background: {
      checked: {
        opacity: 1,
        background: 'currentColor'
      },
      unchecked: {
        opacity: theme.palette.visual_contrast.default.opacity.hover,
        background: tonal ? 'currentColor' : theme.palette.text.default.primary
      }
    },

    border: {
      checked: {
        opacity: 0
      },
      unchecked: {
        opacity: 1
      }
    },

    iconButton: {
      checked: {
        transform: sizes('checked', 'iconButton'),
        color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? (theme.palette.color[color] || palette).main : 'currentColor'
      },
      unchecked: {
        transform: sizes('unchecked', 'iconButton'),
        color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20]
      }
    },

    icon: {
      checked: {
        transform: sizes('checked', 'icon'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary
      },
      unchecked: {
        transform: sizes('unchecked', 'icon'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary
      }
    }
  };

  const styleKeyframes = () => {
    const dynamicBackgroundColor = tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 95 : 10] : theme.methods.palette.color.text(color === 'default' ? theme.palette.color.neutral.main : (palette || theme.palette.color[color]).main, true, 'light');

    return {
      background: {
        growEnd: {
          ...initial.background.checked,
        },
        waitEnd: {
          ...initial.background.checked,
        },
        moveStart: {
          ...initial.background.unchecked,
          transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 35, delay: 35 })
        },
        doneStart: {
          ...initial.background.unchecked,
        },
        growStart: {
          ...initial.background.unchecked,
        },
        waitStart: {
          ...initial.background.checked,
        },
        moveEnd: {
          ...initial.background.checked,
          transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 35, delay: 35 })
        },
        doneEnd: {
          ...initial.background.checked,
        }
      },

      border: {
        growEnd: {
          ...initial.border.checked,
        },
        waitEnd: {
          ...initial.border.checked,
        },
        moveStart: {
          ...initial.border.unchecked,
          transition: theme.methods.transitions.make(['opacity'], { duration: 35, delay: 35 })
        },
        doneStart: {
          ...initial.border.unchecked,
        },
        growStart: {
          ...initial.border.unchecked,
        },
        waitStart: {
          ...initial.border.checked,
        },
        moveEnd: {
          ...initial.border.checked,
          transition: theme.methods.transitions.make(['opacity'], { duration: 35, delay: 35 })
        },
        doneEnd: {
          ...initial.border.checked,
        }
      },

      iconButton: {
        growStart: {
          transform: sizes('grow-start', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20],
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitStart: {
          transform: sizes('grow-start', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20]
        },
        moveEnd: {
          transform: sizes('move-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? (theme.palette.color[color] || palette).main : 'currentColor',
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneEnd: {
          ...initial.iconButton.checked,
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? (theme.palette.color[color] || palette).main : 'currentColor',
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        },
        growEnd: {
          transform: sizes('grow-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? (theme.palette.color[color] || palette).main : 'currentColor',
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitEnd: {
          transform: sizes('grow-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? (theme.palette.color[color] || palette).main : 'currentColor'
        },
        moveStart: {
          transform: sizes('move-start', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20],
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneStart: {
          ...initial.iconButton.unchecked,
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20],
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        }
      },

      icon: {
        growStart: {
          transform: sizes('grow-start', 'icon'),
          background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 90 : 10] : theme.palette.background.default.quaternary,
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitStart: {
          transform: sizes('grow-start', 'icon'),
          background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 90 : 10] : theme.palette.background.default.quaternary
        },
        moveEnd: {
          ...sizes('move-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneEnd: {
          ...initial.icon.checked,
          background: dynamicBackgroundColor,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        },
        growEnd: {
          transform: sizes('grow-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitEnd: {
          transform: sizes('grow-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
        },
        moveStart: {
          ...sizes('move-start', 'icon'),
          background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 90 : 0] : theme.palette.background.default.quaternary,
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneStart: {
          ...initial.icon.unchecked,
          background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 90 : 0] : theme.palette.background.default.quaternary,
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        }
      }
    };
  };

  return (
    <Component
      ref={ref}

      onClick={onUpdate}

      className={classNames([
        staticClassName('Switch', theme) && [
          'AmauiSwitch-root',
          `AmauiSwitch-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiSwitch-size-${size}`,
          tonal && `AmauiSwitch-tonal`,
          disabled && `AmauiSwitch-disabled`
        ],

        className,
        classes.root,
        classes[color],
        classes[size],
        tonal && classes[`tonal_${color}`],
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      <Keyframes
        keyframes={keyframes[checked ? 'checked' : 'unchecked']}

        update={checked}

        appendStatusPost={!checked ? 'doneStart' : 'doneEnd'}

        append
      >
        {(status: any) => {
          if (
            (checked && status === 'doneEnd') ||
            (!checked && status === 'doneStart')
          ) animation.current = false;

          return <>
            <span
              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-background',
                  disabled && `AmauiSwitch-disabled`
                ],

                classes.background,
                disabled && classes.background_disabled
              ])}

              style={{
                ...styles.background,

                ...(status === 'appended' && initial.background[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().background[status]
              }}
            />

            <span
              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-border',
                  `AmauiSwitch-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
                  tonal && `AmauiSwitch-tonal`
                ],

                classes.border,
                classes[color],
                tonal && classes[`border_tonal_${color}`]
              ])}

              style={{
                ...styles.border,

                ...(status === 'appended' && initial.border[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().border[status]
              }}
            />

            <IconButton
              size={size}

              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-iconButton'
                ],

                classes.iconButton
              ])}

              style={{
                ...styles.iconButton,

                ...(status === 'appended' && initial.iconButton[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().iconButton[status]
              }}

              disabled={disabled}
            >
              <Icon
                className={classNames([
                  staticClassName('Switch', theme) && [
                    'AmauiSwitch-icon'
                  ],

                  classes.icon
                ])}

                style={{
                  ...(status === 'appended' && initial.icon[checked ? 'checked' : 'unchecked']),

                  ...styleKeyframes().icon[status]
                }}
              >
                {
                  (['growEnd', 'doneEnd'].includes(status) && OnIcon) ||
                  (['growStart', 'doneStart'].includes(status) && OffIcon)
                }
              </Icon>
            </IconButton>
          </>;
        }}
      </Keyframes>

    </Component>
  );
});

export default Switch;
