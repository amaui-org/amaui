import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style } from '@amaui/style-react';

const other = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
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
      transform: 'translateX(83.67142%)',
    },
    '100%': {
      transform: 'translateX(200.611057%)'
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
      transform: 'translateX(37.651913%)'
    },
    '48.35%': {
      'animation-timing-function': 'cubic-bezier(0.4, 0.627035, 0.6, 0.902026)',
      transform: 'translateX(84.386165%)'
    },
    '100%': {
      transform: 'translateX(160.277782%)'
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
    transformOrigin: '0 0',

    // Reverse
    '&$reverse': {
      transformOrigin: '100% 0'
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
  },
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
    animation: '$bufferDots .3s infinite linear',

    // Reverse
    '&$reverse': {
      animation: '$bufferDotsInverse .3s infinite linear',
    }
  }
}), { name: 'AmauiLinearProgress' });

const LinearProgress = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle();

  const {
    className,
    color = 'primary',
    version = 'indeterminate',
    buffer,
    value,
    reverse,

    ...other
  } = props;

  const styles: any = {
    root: {},
    buffer: {},
    line: {}
  };

  if (!classes[color]) styles.root.color = color;

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
        classes.root,
        classes[color],
        reverse && classes.reverse,
        className
      ])}

      style={styles.root}

      {...other}
    >
      {withBuffer && (
        <div
          className={classNames([
            classes.bufferDots,
            reverse && classes.reverse
          ])}
        />
      )}

      <div
        className={classes.buffer}

        style={styles.buffer}
      />

      {version === 'indeterminate' ? (
        <>
          <div className={classes.lineIndeterminate}>
            <div className={classes.inner} />
          </div>

          <div className={classes.lineIndeterminate1}>
            <div className={classes.inner1} />
          </div>
        </>
      ) : (
        <div
          className={classes.line}

          style={styles.line}
        />
      )}
    </div>
  );
});

export default LinearProgress;
