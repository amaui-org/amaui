import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const other = {
  position: 'absolute',
  inset: 0,
  height: '100%',
  transformOrigin: 'inherit'
};

// @keyframes's for line, line1, inner and inner1 source: https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/_keyframes.scss
const useStyle = style(theme => ({
  '@keyframes line': {
    '0%': {
      transform: 'translateX(0)'
    },
    '20%': {
      'animation-timing-function': 'cubic-bezier(0.5, 0, 0.701732, 0.495819)',
      transform: 'translateX(0)',
    },
    '59.15%': {
      'animation-timing-function': 'cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)',
      transform: `translateX(83.67142%)`,
    },
    '100%': {
      transform: `translateX(200.611057%)`
    }
  },

  '@keyframes line_reverse': {
    '0%': {
      transform: 'translateX(0)'
    },
    '20%': {
      'animation-timing-function': 'cubic-bezier(0.5, 0, 0.701732, 0.495819)',
      transform: 'translateX(0)',
    },
    '59.15%': {
      'animation-timing-function': 'cubic-bezier(0.302435, 0.381352, 0.55, 0.956352)',
      transform: `translateX(-83.67142%)`,
    },
    '100%': {
      transform: `translateX(-200.611057%)`
    }
  },

  '@keyframes inner': {
    '0%': {
      transform: 'scaleX(0.08)'
    },
    '36.65%': {
      'animation-timing-function': 'cubic-bezier(0.334731, 0.12482, 0.785844, 1)',
      transform: 'scaleX(0.08)'
    },
    '69.15%': {
      'animation-timing-function': 'cubic-bezier(0.06, 0.11, 0.6, 1)',
      transform: 'scaleX(0.661479)',
    },
    '100%': {
      transform: 'scaleX(0.08)',
    }
  },

  '@keyframes line1': {
    '0%': {
      'animation-timing-function': 'cubic-bezier(0.15, 0, 0.515058, 0.409685)',
      transform: 'translateX(0)'
    },
    '25%': {
      'animation-timing-function': 'cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)',
      transform: `translateX(37.651913%)`
    },
    '48.35%': {
      'animation-timing-function': 'cubic-bezier(0.4, 0.627035, 0.6, 0.902026)',
      transform: `translateX(84.386165%)`
    },
    '100%': {
      transform: `translateX(160.277782%)`
    }
  },

  '@keyframes line1_reverse': {
    '0%': {
      'animation-timing-function': 'cubic-bezier(0.15, 0, 0.515058, 0.409685)',
      transform: 'translateX(0)'
    },
    '25%': {
      'animation-timing-function': 'cubic-bezier(0.31033, 0.284058, 0.8, 0.733712)',
      transform: `translateX(-37.651913%)`
    },
    '48.35%': {
      'animation-timing-function': 'cubic-bezier(0.4, 0.627035, 0.6, 0.902026)',
      transform: `translateX(-84.386165%)`
    },
    '100%': {
      transform: `translateX(-160.277782%)`
    }
  },

  '@keyframes inner1': {
    '0%': {
      'animation-timing-function': 'cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)',
      transform: 'scaleX(0.08)'
    },
    '19.15%': {
      'animation-timing-function': 'cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315)',
      transform: 'scaleX(0.457104)'
    },
    '44.15%': {
      'animation-timing-function': 'cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)',
      transform: 'scaleX(0.72796)'
    },
    '100%': {
      transform: 'scaleX(0.08)'
    }
  },

  '@keyframes bufferDots': {
    '100%': {
      backgroundPosition: '-10px 0'
    }
  },

  '@keyframes bufferDotsInverse': {
    '100%': {
      backgroundPosition: '10px 0'
    }
  },

  root: {
    width: '100%',
    height: '4px',
    position: 'relative',
    overflow: 'hidden',
    transformOrigin: '0 0'
  },

  // Reverse
  reverse: {
    transformOrigin: '100% 0'
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

  tonal_neutral: { color: theme.methods.palette.color.value('neutral', 70) },

  tonal_primary: { color: theme.methods.palette.color.value('primary', 70) },

  tonal_secondary: { color: theme.methods.palette.color.value('secondary', 70) },

  tonal_tertiary: { color: theme.methods.palette.color.value('tertiary', 70) },

  tonal_quaternary: { color: theme.methods.palette.color.value('quaternary', 70) },

  tonal_info: { color: theme.methods.palette.color.value('info', 70) },

  tonal_success: { color: theme.methods.palette.color.value('success', 70) },

  tonal_warning: { color: theme.methods.palette.color.value('warning', 70) },

  tonal_error: { color: theme.methods.palette.color.value('error', 70) },

  line: {
    ...other,
    transition: theme.methods.transitions.make('transform'),
    background: 'currentColor'
  },

  lineIndeterminate: {
    ...other,
    width: '100%',
    left: '-145.166611%',
    transformOrigin: 'initial',
    animation: '$line 2s infinite linear'
  },

  lineIndeterminate_reverse: {
    ...other,
    width: '100%',
    right: '-145.166611%',
    transformOrigin: 'initial',
    animation: '$line_reverse 2s infinite linear'
  },

  inner: {
    ...other,
    width: '100%',
    background: 'currentColor',
    animation: '$inner 2s infinite linear'
  },

  lineIndeterminate1: {
    ...other,
    width: '100%',
    left: '-54.888891%',
    transformOrigin: 'initial',
    animation: '$line1 2s infinite linear'
  },

  lineIndeterminate1_reverse: {
    ...other,
    width: '100%',
    right: '-54.888891%',
    transformOrigin: 'initial',
    animation: '$line1_reverse 2s infinite linear'
  },

  inner1: {
    ...other,
    width: '100%',
    background: 'currentColor',
    animation: '$inner1 2s infinite linear'
  },

  buffer: {
    ...other,
    background: theme.palette.color.neutral[theme.palette.light ? 90 : 20],
    transition: theme.methods.transitions.make('transform')
  },

  bufferDots: {
    ...other,
    backgroundImage: `radial-gradient(2px 2px at center, ${theme.palette.color.neutral[theme.palette.light ? 90 : 20]} 4px, transparent 4px)`,
    backgroundSize: '10px 4px',
    animation: '$bufferDots .3s infinite linear'
  },

  // Reverse
  bufferDots_reverse: {
    animation: '$bufferDotsInverse .3s infinite linear',
  }
}), { name: 'AmauiLinearProgress' });

const LinearProgress = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLinearProgress?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,
    tonal,
    color = 'primary',
    version = 'indeterminate',
    buffer,
    value,
    reverse: reverse_,

    ...other
  } = props;

  let reverse = version === 'indeterminate' ? false : reverse_;

  if (theme.direction === 'rtl' && version === 'indeterminate') reverse = !reverse;

  const styles: any = {
    root: {},
    buffer: {},
    line: {}
  };

  if (!classes[color]) {
    styles.root.color = color;

    if (tonal) {
      const palette = theme.methods.color(color);

      styles.root.color = theme.methods.palette.color.value(undefined, 70, true, palette);
    }
  }

  const withBuffer = version === 'determinate' && buffer;

  if (version === 'determinate') {
    const values = { buffer: !buffer ? 100 : 0, line: 0 };

    if (is('object', value)) {
      if (buffer) values.buffer = value?.buffer;

      values.line = value?.progress;
    }
    else {
      if (buffer) values.buffer = value;

      values.line = value;
    }

    styles.buffer.transform = `scaleX(${values.buffer / 100})`;
    styles.line.transform = `scaleX(${values.line / 100})`;
  }

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('LinearProgress', theme) && [
          'AmauiLinearProgress-root',
          `AmauiLinearProgress-version-${version}`,
          `AmauiLinearProgress-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          tonal && `AmauiLinearProgress-tonal`,
          reverse && `AmauiLinearProgress-reverse`
        ],

        classes.root,
        classes[color],
        tonal && classes[`tonal_${color}`],
        reverse && classes.reverse,
        className
      ])}

      style={styles.root}

      {...other}
    >
      {withBuffer && (
        <div
          className={classNames([
            staticClassName('LinearProgress', theme) && [
              'AmauiLinearProgress-bufferDots',
              reverse && `AmauiLinearProgress-reverse`
            ],

            classes.bufferDots,
            reverse && classes.bufferDots_reverse
          ])}
        />
      )}

      <div
        className={classNames([
          staticClassName('LinearProgress', theme) && [
            'AmauiLinearProgress-buffer'
          ],

          classes.buffer
        ])}

        style={styles.buffer}
      />

      {version === 'indeterminate' ? (
        <>
          <div
            className={classNames([
              staticClassName('LinearProgress', theme) && [
                'AmauiLinearProgress-lineIndeterminate'
              ],

              classes[!reverse ? 'lineIndeterminate' : 'lineIndeterminate_reverse']
            ])}
          >
            <div
              className={classNames([
                staticClassName('LinearProgress', theme) && [
                  'AmauiLinearProgress-inner'
                ],

                classes.inner
              ])}
            />
          </div>

          <div
            className={classNames([
              staticClassName('LinearProgress', theme) && [
                'AmauiLinearProgress-lineIndeterminate1'
              ],

              classes[!reverse ? 'lineIndeterminate1' : 'lineIndeterminate1_reverse']
            ])}
          >
            <div
              className={classNames([
                staticClassName('LinearProgress', theme) && [
                  'AmauiLinearProgress-inner1'
                ],

                classes.inner1
              ])}
            />
          </div>
        </>
      ) : (
        <div
          className={classNames([
            staticClassName('LinearProgress', theme) && [
              'AmauiLinearProgress-line'
            ],

            classes.line
          ])}

          style={styles.line}
        />
      )}
    </div>
  );
});

LinearProgress.displayName = 'AmauiLinearProgress';

export default LinearProgress;
