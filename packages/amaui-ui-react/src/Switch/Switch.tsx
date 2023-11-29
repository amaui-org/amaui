import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Keyframes from '../Keyframes';
import IconButton from '../IconButton';

import { IBaseElement, staticClassName, TColor, TElementReference, TRef, TSize, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    cursor: 'pointer',
    transition: theme.methods.transitions.make('box-shadow'),

    '&:focus-visible': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
    }
  },

  input: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'inherit',
    zIndex: '1'
  },

  // Color
  color_default: { color: theme.palette.text.default.primary },

  color_themed: { color: theme.palette.text.default.primary },

  color_inverted: { color: theme.palette.background.default.primary },

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
    inset: '0',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'sm' })
  },

  border: {
    display: 'inline-flex',
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    border: `2px solid`,
    borderColor: theme.palette.text.default.secondary,
    boxSizing: 'border-box',
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
    position: 'absolute',
    top: '50%'
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    background: 'currentColor',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`,
    transition: theme.methods.transitions.make('background')
  },

  disabled: {
    cursor: 'default',
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.disabled : '1',
    pointerEvents: 'none'
  }
}), { name: 'amaui-Switch' });

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

export interface ISwitch extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  size?: TSize;

  inputRef?: TRef;

  valueDefault?: boolean;
  checked?: boolean;
  onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;

  OnIcon?: TElementReference;
  OffIcon?: TElementReference;

  disabled?: boolean;
}

const Switch: React.FC<ISwitch> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSwitch?.props?.default, ...props_ }), [props_]);

  const {
    tonal: tonal_ = true,
    color: color_ = 'primary',
    size = 'regular',

    inputRef,

    valueDefault,
    checked,
    onChange,

    OnIcon,
    OffIcon,

    disabled,

    Component = 'span',

    className,
    style,

    children,

    // Other
    version: version_,
    colorUnchecked,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : checked) || false);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<any>(),
    animation: React.useRef<any>()
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
    root: {

    },
    border: {},
    background: {},
    iconButton: {}
  };

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) {
      setValue(checked);

      refs.animation.current = true;
    }
  }, [checked]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !refs.animation.current) {
      // Inner controlled value
      if (!props.hasOwnProperty('checked')) {
        setValue(event.target.checked);

        refs.animation.current = true;
      }

      if (is('function', onChange)) onChange(event.target.checked, event);
    }
  };

  let palette: any;

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
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

  const ltrSign = (item = '') => {
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
    const paletteColor = theme.palette.color[color] || palette || theme.palette.color.neutral;

    const dynamicBackgroundColor = tonal ? paletteColor[theme.palette.light ? 95 : 10] : theme.methods.palette.color.text(color === 'default' ? theme.palette.color.neutral.main : (palette || theme.palette.color[color]).main, true, 'light');

    return ({
      background: {
        checked: {
          opacity: 1,
          background: 'currentColor'
        },
        unchecked: {
          background: theme.methods.palette.color.value(color as any, 95, true, paletteColor)
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
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? paletteColor.main : 'currentColor'
        },
        unchecked: {
          transform: sizes('unchecked', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : paletteColor[theme.palette.light ? 40 : 20]
        }
      },

      icon: {
        checked: {
          transform: sizes('checked', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? paletteColor[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light')
        },
        unchecked: {
          transform: sizes('unchecked', 'icon'),
          background: (['default', 'themed', 'inherit'].includes(color) && !theme.palette.light) ? theme.palette.text.default.secondary : (tonal ? paletteColor[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary),
          color: tonal ? paletteColor[theme.palette.light ? 90 : 0] : theme.palette.background.default.quaternary
        }
      }
    });
  };

  const styleKeyframes = () => {
    const paletteColor = theme.palette.color[color] || palette || theme.palette.color.neutral;

    const dynamicBackgroundColor = tonal ? paletteColor[theme.palette.light ? 95 : 10] : theme.methods.palette.color.text(color === 'default' ? theme.palette.color.neutral.main : (palette || theme.palette.color[color]).main, true, 'light');

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
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : paletteColor[theme.palette.light ? 40 : 20],
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitStart: {
          transform: sizes('grow-start', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : paletteColor[theme.palette.light ? 40 : 20]
        },
        moveEnd: {
          transform: sizes('move-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? paletteColor.main : 'currentColor',
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneEnd: {
          ...initial().iconButton.checked,
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        },
        growEnd: {
          transform: sizes('grow-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? paletteColor.main : 'currentColor',
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitEnd: {
          transform: sizes('grow-end', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? paletteColor.main : 'currentColor'
        },
        moveStart: {
          transform: sizes('move-start', 'iconButton'),
          color: color === 'default' ? theme.palette.color.neutral.main : !tonal ? theme.palette.text.default.secondary : paletteColor[theme.palette.light ? 40 : 20],
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
          background: (['default', 'themed', 'inherit'].includes(color) && !theme.palette.light) ? theme.palette.text.default.secondary : tonal ? paletteColor[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? paletteColor[theme.palette.light ? 90 : 10] : theme.palette.background.default.quaternary,
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitStart: {
          transform: sizes('grow-start', 'icon'),
          background: (['default', 'themed', 'inherit'].includes(color) && !theme.palette.light) ? theme.palette.text.default.secondary : tonal ? paletteColor[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? paletteColor[theme.palette.light ? 90 : 10] : theme.palette.background.default.quaternary
        },
        moveEnd: {
          ...sizes('move-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? paletteColor[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
          transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
        },
        doneEnd: {
          ...initial().icon.checked,
          transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
        },
        growEnd: {
          transform: sizes('grow-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? paletteColor[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
          transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
        },
        waitEnd: {
          transform: sizes('grow-end', 'icon'),
          background: dynamicBackgroundColor,
          color: tonal ? paletteColor[theme.palette.light ? 30 : 80] : theme.methods.palette.color.text(dynamicBackgroundColor, true, 'light'),
        },
        moveStart: {
          ...sizes('move-start', 'icon'),
          background: tonal ? paletteColor[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
          color: tonal ? paletteColor[theme.palette.light ? 90 : 0] : theme.palette.background.default.quaternary,
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

      tabIndex={disabled ? -1 : 0}

      role='switch'

      aria-checked={value}

      aria-disabled={disabled}

      onKeyDown={onKeyDown}

      className={classNames([
        staticClassName('Switch', theme) && [
          'amaui-Switch-root',
          value && `amaui-Switch-checked`,
          disabled && `amaui-Switch-disabled`
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

      {...other}
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
          staticClassName('Switch', theme) && [
            'amaui-Switch-input'
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
                  'amaui-Switch-background'
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
                  'amaui-Switch-border'
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
              tabIndex='-1'

              size={size}

              className={classNames([
                staticClassName('Switch', theme) && [
                  'amaui-Switch-icon-button'
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
                    'amaui-Switch-icon'
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

Switch.displayName = 'amaui-Switch';

export default Switch;
