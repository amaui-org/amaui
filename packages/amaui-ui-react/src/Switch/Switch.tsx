import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Keyframes from '../Keyframes';
import IconButton from '../IconButton';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    cursor: 'pointer'
  },

  input: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'inherit',
    zIndex: 1
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
  tonal_color_neutral: { color: theme.methods.palette.color.value('neutral', 60) },

  tonal_color_primary: { color: theme.methods.palette.color.value('primary', 60) },

  tonal_color_secondary: { color: theme.methods.palette.color.value('secondary', 60) },

  tonal_color_tertiary: { color: theme.methods.palette.color.value('tertiary', 60) },

  tonal_color_quaternary: { color: theme.methods.palette.color.value('quaternary', 60) },

  tonal_color_info: { color: theme.methods.palette.color.value('info', 60) },

  tonal_color_success: { color: theme.methods.palette.color.value('success', 60) },

  tonal_color_warning: { color: theme.methods.palette.color.value('warning', 60) },

  tonal_color_error: { color: theme.methods.palette.color.value('error', 60) },

  size_small: {
    height: '24px',
    width: '44px',
    borderRadius: `${theme.shape.radius.unit * 1.5}px`
  },

  size_regular: {
    height: '32px',
    width: '52px',
    borderRadius: `${theme.shape.radius.unit * 2}px`
  },

  size_large: {
    height: '40px',
    width: '60px',
    borderRadius: `${theme.shape.radius.unit * 2.5}px`
  },

  background: {
    display: 'inline-flex',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'sm' })
  },

  border: {
    display: 'inline-flex',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: `2px solid`,
    borderColor: theme.palette.text.default.secondary,
    borderRadius: 'inherit',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'sm' })
  },

  // Tonal
  border_tonal_color_neutral: { borderColor: theme.palette.color['neutral'][theme.palette.light ? 40 : 20] },

  border_tonal_color_primary: { borderColor: theme.palette.color['primary'][theme.palette.light ? 40 : 20] },

  border_tonal_color_secondary: { borderColor: theme.palette.color['secondary'][theme.palette.light ? 40 : 20] },

  border_tonal_color_tertiary: { borderColor: theme.palette.color['tertiary'][theme.palette.light ? 40 : 20] },

  border_tonal_color_quaternary: { borderColor: theme.palette.color['quaternary'][theme.palette.light ? 40 : 20] },

  border_tonal_color_info: { borderColor: theme.palette.color['info'][theme.palette.light ? 40 : 20] },

  border_tonal_color_success: { borderColor: theme.palette.color['success'][theme.palette.light ? 40 : 20] },

  border_tonal_color_warning: { borderColor: theme.palette.color['warning'][theme.palette.light ? 40 : 20] },

  border_tonal_color_error: { borderColor: theme.palette.color['error'][theme.palette.light ? 40 : 20] },

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
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`
  },

  disabled: {
    cursor: 'default',
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.disabled : 1,
    pointerEvents: 'none'
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
    tonal: tonal_,
    color: color_ = 'primary',

    size = 'regular',

    valueDefault,
    value: value_,
    onChange,

    Component = 'span',

    OnIcon,
    OffIcon,

    disabled,

    inputRef,

    className,
    style,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<any>(),
    animation: React.useRef(false)
  };

  refs.value.current = value;

  const { classes } = useStyle(props);

  let color = color_;
  let tonal = tonal_;

  if (disabled) {
    color = 'neutral';
    tonal = true;
  }

  const styles: any = {
    root: {},
    border: {},
    background: {},
    iconButton: {}
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) {
      setValue(value_);

      refs.animation.current = true;
    }
  }, [value_]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !refs.animation.current) {
      // Inner controlled value
      if (!props.hasOwnProperty('value')) {
        setValue(event.target.checked);

        refs.animation.current = true;
      }

      if (is('function', onChange)) onChange(event.target.checked, event);
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

  const ltrSign = (item: string = '') => {
    if (theme.direction === 'ltr') return item;

    return !item ? '-' : '';
  };

  const sizes = (version, element): any => {
    if (element === 'iconButton') {
      switch (version) {
        case 'unchecked':
          if (size === 'small') return `translate(${ltrSign('-')}3px, -50%)`;

          if (size === 'large') return `translate(${ltrSign('-')}5px, -50%)`;

          return `translate(${ltrSign('-')}4px, -50%)`;

        case 'grow-start':
          if (size === 'small') return `translate(${ltrSign('-')}3px, -50%)`;

          if (size === 'large') return `translate(${ltrSign('-')}5px, -50%)`;

          return `translate(${ltrSign('-')}4px, -50%)`;

        case 'move-end':
          if (size === 'small') return `translate(${ltrSign()}11px, -50%)`;

          if (size === 'large') return `translate(${ltrSign()}11px, -50%)`;

          return `translate(${ltrSign()}11px, -50%)`;

        case 'grow-end':
          if (size === 'small') return `translate(${ltrSign()}17px, -50%)`;

          if (size === 'large') return `translate(${ltrSign()}16px, -50%)`;

          return `translate(${ltrSign()}16px, -50%)`;

        case 'move-start':
          if (size === 'small') return `translate(${ltrSign()}1px, -50%)`;

          if (size === 'large') return `translate(${ltrSign()}1px, -50%)`;

          return `translate(${ltrSign()}1px, -50%)`;

        case 'checked':
          if (size === 'small') return `translate(${ltrSign()}16px, -50%)`;

          if (size === 'large') return `translate(${ltrSign()}16px, -50%)`;

          return `translate(${ltrSign()}16px, -50%)`;

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

  const initial = () => {
    const dynamicBackgroundColor = tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 95 : 10] : theme.methods.palette.color.text(color === 'default' ? theme.palette.color.neutral.main : (palette || theme.palette.color[color]).main, true, 'light');

    return ({
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
          background: dynamicBackgroundColor,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light')
        },
        unchecked: {
          transform: sizes('unchecked', 'icon'),
          background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 90 : 0] : theme.palette.background.default.quaternary
        }
      }
    });
  };

  const styleKeyframes = () => {
    const dynamicBackgroundColor = tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 95 : 10] : theme.methods.palette.color.text(color === 'default' ? theme.palette.color.neutral.main : (palette || theme.palette.color[color]).main, true, 'light');

    return {
      background: {
        growEnd: {
          ...initial().background.checked,
        },
        waitEnd: {
          ...initial().background.checked,
        },
        moveStart: {
          ...initial().background.unchecked,
          transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 35, delay: 35 })
        },
        doneStart: {
          ...initial().background.unchecked,
        },
        growStart: {
          ...initial().background.unchecked,
        },
        waitStart: {
          ...initial().background.checked,
        },
        moveEnd: {
          ...initial().background.checked,
          transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 35, delay: 35 })
        },
        doneEnd: {
          ...initial().background.checked,
        }
      },

      border: {
        growEnd: {
          ...initial().border.checked,
        },
        waitEnd: {
          ...initial().border.checked,
        },
        moveStart: {
          ...initial().border.unchecked,
          transition: theme.methods.transitions.make(['opacity'], { duration: 35, delay: 35 })
        },
        doneStart: {
          ...initial().border.unchecked,
        },
        growStart: {
          ...initial().border.unchecked,
        },
        waitStart: {
          ...initial().border.checked,
        },
        moveEnd: {
          ...initial().border.checked,
          transition: theme.methods.transitions.make(['opacity'], { duration: 35, delay: 35 })
        },
        doneEnd: {
          ...initial().border.checked,
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
          ...initial().iconButton.checked,
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
          ...initial().iconButton.unchecked,
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
          ...initial().icon.checked,
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
          ...initial().icon.unchecked,
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        }
      }
    };
  };

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    switch (event.key) {
      case 'Enter':
        if (refs.input.current) refs.input.current.click();

        break;

      default:
        break;
    }
  };

  return (
    <Component
      ref={ref}

      {...other}

      className={classNames([
        staticClassName('Switch', theme) && [
          'AmauiSwitch-root',
          `AmauiSwitch-color-${!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiSwitch-size-${size}`,
          OnIcon && `AmauiSwitch-OnIcon`,
          OffIcon && `AmauiSwitch-OffIcon`,
          tonal && `AmauiSwitch-tonal`,
          disabled && `AmauiSwitch-disabled`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        classes[`size_${size}`],
        tonal && classes[`tonal_color_${color}`],
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      <input
        ref={item => {
          if (inputRef) inputRef.current = item;

          refs.input.current = item;
        }}

        tabIndex={-1}

        type='checkbox'

        checked={value}

        onChange={onUpdate}

        className={classNames([
          staticClassName('Checkbox', theme) && [
            'AmauiCheckbox-input'
          ],

          classes.input
        ])}

        disabled={disabled}
      />

      <Keyframes
        keyframes={keyframes[refs.value.current ? 'checked' : 'unchecked']}

        update={refs.value.current}

        appendStatusPost={!refs.value.current ? 'doneStart' : 'doneEnd'}

        append
      >
        {(status: any) => {
          if (
            (refs.value.current && status === 'doneEnd') ||
            (!refs.value.current && status === 'doneStart')
          ) refs.animation.current = false;

          return <>
            <span
              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-background'
                ],

                classes.background,
                disabled && classes.background_disabled
              ])}

              style={{
                ...styles.background,

                ...(status === 'appended' && initial().background[refs.value.current ? 'checked' : 'unchecked']),

                ...styleKeyframes().background[status]
              }}
            />

            <span
              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-border'
                ],

                classes.border,
                classes[`color_${color}`],
                tonal && classes[`border_tonal_color_${color}`]
              ])}

              style={{
                ...styles.border,

                ...(status === 'appended' && initial().border[refs.value.current ? 'checked' : 'unchecked']),

                ...styleKeyframes().border[status]
              }}
            />

            <IconButton
              tabIndex={disabled ? -1 : undefined}

              size={size}

              onKeyDown={onKeyDown}

              className={classNames([
                staticClassName('Switch', theme) && [
                  'AmauiSwitch-iconButton'
                ],

                classes.iconButton
              ])}

              style={{
                ...styles.iconButton,

                ...(status === 'appended' && initial().iconButton[refs.value.current ? 'checked' : 'unchecked']),

                ...styleKeyframes().iconButton[status]
              }}
            >
              <Icon
                className={classNames([
                  staticClassName('Switch', theme) && [
                    'AmauiSwitch-icon'
                  ],

                  classes.icon
                ])}

                style={{
                  ...(status === 'appended' && initial().icon[refs.value.current ? 'checked' : 'unchecked']),

                  ...styleKeyframes().icon[status]
                }}
              >
                {
                  (((status === 'appended' && refs.value.current) || ['growEnd', 'doneEnd'].includes(status)) && OnIcon) ||
                  (((status === 'appended' && !refs.value.current) || ['growStart', 'doneStart'].includes(status)) && OffIcon)
                }
              </Icon>
            </IconButton>
          </>;
        }}
      </Keyframes>

    </Component>
  );
});

Switch.displayName = 'AmauiSwitch';

export default Switch;
