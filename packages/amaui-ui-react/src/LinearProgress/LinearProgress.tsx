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

const useStyle = style(theme => ({
  '@keyframes line': {
    '0%': {
      transform: 'translateX(-100%) scaleX(1)'
    },
    '40%': {
      transform: 'translateX(15%) scaleX(0.7)'
    },
    '70%': {
      transform: 'translateX(100%) scaleX(0.07)',
      animationTimingFunction: 'cubic-bezier(.5,0,.701732,.495819)'
    },
    '100%': {
      transform: 'translateX(200%) scaleX(0.07)'
    }
  },

  '@keyframes line1': {
    '0%': {
      transform: 'translateX(-100%) scaleX(0.7)'
    },
    '30%': {
      transform: 'translateX(0%) scaleX(0.07)'
    },
    '70%': {
      transform: 'translateX(70%) scaleX(0.07)'
    },
    '100%': {
      transform: 'translateX(200%) scaleX(0.07)'
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
    transformOrigin: 'right',
    background: 'currentColor',
    transform: 'translateX(-100%)',
    animation: '$line 2s infinite linear'
  },
  lineIndeterminate1: {
    ...other,
    transformOrigin: 'right',
    background: 'currentColor',
    transform: 'translateX(-100%)',
    animation: '$line1 2s infinite linear 1.15s'
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
    color = 'neutral',
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
          <div className={classes.lineIndeterminate} />

          <div className={classes.lineIndeterminate1} />
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
