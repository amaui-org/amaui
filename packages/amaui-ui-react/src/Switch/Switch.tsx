import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import Keyframes from '../Keyframes';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
    borderRadius: theme.methods.space.value('lg'),

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
      '&$neutral': { color: theme.methods.palette.color.value('neutral', 60) },

      '&$primary': { color: theme.methods.palette.color.value('primary', 60) },

      '&$secondary': { color: theme.methods.palette.color.value('secondary', 60) },

      '&$tertiary': { color: theme.methods.palette.color.value('tertiary', 60) },

      '&$quaternary': { color: theme.methods.palette.color.value('quaternary', 60) },

      '&$info': { color: theme.methods.palette.color.value('info', 60) },

      '&$success': { color: theme.methods.palette.color.value('success', 60) },

      '&$warning': { color: theme.methods.palette.color.value('warning', 60) },

      '&$error': { color: theme.methods.palette.color.value('error', 60) }
    },

    '&$small': {
      height: theme.methods.space.value('md', 'px'),
      width: theme.methods.space.value('xxl', 'px', -4)
    },

    '&$regular': {
      height: theme.methods.space.value('lg', 'px'),
      width: theme.methods.space.value('xxxl', 'px', -4)
    },

    '&$large': {
      height: theme.methods.space.value('xl', 'px'),
      width: theme.methods.space.value('xxxl', 'px', 4)
    },

    '&$disabled': {
      opacity: theme.palette.visual_contrast.default.opacity.disabled,
      cursor: 'default'
    }
  },

  background: {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    borderRadius: theme.methods.space.value('lg'),
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'sm' }),

    '&$disabled': {
      background: theme.palette.text.default.secondary
    }
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
    transition: theme.methods.transitions.make(['opacity'], { duration: 'sm' }),

    '&$tonal': {
      '&$neutral': { borderColor: theme.palette.color['neutral'][theme.palette.light ? 40 : 20] },

      '&$primary': { borderColor: theme.palette.color['primary'][theme.palette.light ? 40 : 20] },

      '&$secondary': { borderColor: theme.palette.color['secondary'][theme.palette.light ? 40 : 20] },

      '&$tertiary': { borderColor: theme.palette.color['tertiary'][theme.palette.light ? 40 : 20] },

      '&$quaternary': { borderColor: theme.palette.color['quaternary'][theme.palette.light ? 40 : 20] },

      '&$info': { borderColor: theme.palette.color['info'][theme.palette.light ? 40 : 20] },

      '&$success': { borderColor: theme.palette.color['success'][theme.palette.light ? 40 : 20] },

      '&$warning': { borderColor: theme.palette.color['warning'][theme.palette.light ? 40 : 20] },

      '&$error': { borderColor: theme.palette.color['error'][theme.palette.light ? 40 : 20] }
    }
  },

  dot: {
    display: 'inline-flex',
    position: 'relative',
    borderRadius: theme.methods.space.value('lg', 'px'),
    transition: theme.methods.transitions.make('transform', { duration: 'sm' }),

    '&$small': {
      width: theme.methods.space.value('rg', 'px', -4),
      height: theme.methods.space.value('rg', 'px', -4)
    },

    '&$regular': {
      width: theme.methods.space.value('rg', 'px'),
      height: theme.methods.space.value('rg', 'px')
    },

    '&$large': {
      width: theme.methods.space.value('rg', 'px', 4),
      height: theme.methods.space.value('rg', 'px', 4)
    },
  }
}), { name: 'AmauiSwitch' });

const Switch = React.forwardRef((props: any, ref: any) => {
  const {
    tonal,
    color = 'primary',
    size = 'regular',
    valueDefault,
    value,
    onChange,
    Component = 'span',
    disabled,

    className,
    style,

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);
  const animation = React.useRef(false);

  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const styles: any = {
    root: {},
    background: {},
    border: {},
    dot: {}
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

  if (props.tonal) {
    if (palette) {
      styles.dot.background = styles.border.borderColor = palette[theme.palette.light ? 40 : 20];
    }
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

  const sizes = (version): any => {
    switch (version) {
      case 'unchecked':
        if (size === 'small') return 'translate(6px, 5.5px) scale(1)';

        if (size === 'large') return 'translate(10px, 10px) scale(1)';

        return 'translate(8px, 8px) scale(1)';

      case 'grow-start':
        if (size === 'small') return 'translate(6px, 5.5px) scale(1.674)';

        if (size === 'large') return 'translate(10px, 10px) scale(1.802)';

        return 'translate(8px, 8px) scale(1.753)';

      case 'move-end':
        if (size === 'small') return {
          transform: 'translate(21px, 5.5px) scale(1.5)',
          width: 16
        };

        if (size === 'large') return {
          transform: 'translate(21px, 10px) scale(1.5)',
          width: 28
        };

        return {
          transform: 'translate(21px, 8px) scale(1.5)',
          width: 22
        };

      case 'grow-end':
        if (size === 'small') return 'translate(26px, 5.5px) scale(1.674)';

        if (size === 'large') return 'translate(30px, 10px) scale(1.802)';

        return 'translate(28px, 8px) scale(1.753)';

      case 'move-start':
        if (size === 'small') return {
          transform: 'translate(6px, 5.5px) scale(1)',
          width: 16
        };

        if (size === 'large') return {
          transform: 'translate(8px, 8px) scale(1)',
          width: 28
        };

        return {
          transform: 'translate(10px, 10px) scale(1)',
          width: 22
        };

      case 'checked':
        if (size === 'small') return 'translate(26.5px, 5.5px) scale(1.5)';

        if (size === 'large') return 'translate(32px, 10px) scale(1.5)';

        return 'translate(29px, 8px) scale(1.5)';

      case 'done':
        if (size === 'small') return 12;

        if (size === 'large') return 20;

        return 16;

      default:
        break;
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
    dot: {
      checked: {
        transform: sizes('checked'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary
      },
      unchecked: {
        transform: sizes('unchecked'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary
      }
    }
  };

  const styleKeyframes = () => ({
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
    dot: {
      growStart: {
        transform: sizes('grow-start'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary,
        transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
      },
      waitStart: {
        transform: sizes('grow-start'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 40 : 20] : theme.palette.text.default.secondary
      },
      moveEnd: {
        ...sizes('move-end'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary,
        transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
      },
      doneEnd: {
        ...initial.dot.checked,
        width: sizes('done'),
        transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
      },
      growEnd: {
        transform: sizes('grow-end'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary,
        transition: theme.methods.transitions.make('transform', { duration: 240, timing_function: 'decelerated' })
      },
      waitEnd: {
        transform: sizes('grow-end'),
        background: tonal ? (theme.palette.color[color] || palette)[theme.palette.light ? 99 : 10] : theme.palette.background.default.primary
      },
      moveStart: {
        ...sizes('move-start'),
        transition: `${theme.methods.transitions.make('width', { duration: 70 })}, ${theme.methods.transitions.make('transform', { duration: 70 })}, ${theme.methods.transitions.make('background', { duration: 35, delay: 35 })}`
      },
      doneStart: {
        ...initial.dot.unchecked,
        width: sizes('done'),
        transition: `${theme.methods.transitions.make('width', { duration: 100 })}, , ${theme.methods.transitions.make('transform', { duration: 100 })}`
      }
    }
  });

  return (
    <Component
      ref={ref}

      onClick={onUpdate}

      className={classNames([
        className,
        classes.root,
        classes[color],
        classes[size],
        tonal && classes.tonal,
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
                classes.background,
                tonal && classes.tonal,
                disabled && classes.disabled
              ])}

              style={{
                ...styles.background,

                ...(status === 'appended' && initial.background[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().background[status]
              }}
            />

            <span
              className={classNames([
                classes.border,
                classes[color],
                tonal && classes.tonal
              ])}

              style={{
                ...styles.border,

                ...(status === 'appended' && initial.border[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().border[status]
              }}
            />

            <span
              className={classNames([
                classes.dot,
                classes[size],
                classes[color],
                tonal && classes.tonal
              ])}

              style={{
                ...(status === 'appended' && initial.dot[checked ? 'checked' : 'unchecked']),

                ...styleKeyframes().dot[status]
              }}
            />
          </>;
        }}
      </Keyframes>

    </Component>
  );
});

export default Switch;
