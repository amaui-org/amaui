import React from 'react';

import { getID, debounce } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { Transition, Transitions } from '../Transition';
import { TTransitionStatus } from '../Transition/Transition';

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
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.77)'
    },
    '50%': {
      transform: 'scale(0.7)'
    },
    '100%': {
      transform: 'scale(0.77)'
    }
  },

  root: {
    ...other,
    overflow: 'hidden',
  },

  background: {
    ...other,
    opacity: theme.palette.visual_contrast.default.opacity.hover,
    transition: theme.methods.transitions.make('background', { duration: 'regular', timing_function: 'standard' }),

    '&$active': {
      backgroundColor: 'currentcolor'
    }
  },

  border: {
    ...other,
    opacity: '0',
    boxShadow: 'inset 0 0 0 2px currentColor'
  },

  wave: {
    ...other,
    opacity: '0',
    transform: 'scale(0)',
    backgroundColor: 'currentcolor',
    transition: theme.methods.transitions.make(['opacity', 'transform'], { duration: 'complex', timing_function: 'decelerated' }),
    borderRadius: '50%',

    '&.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&$pulse.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.77)',
    },

    '&.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&$pulse.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.77)',
      animation: `$pulse 2400ms ${theme.transitions.timing_function.emphasized} 240ms infinite`,
    },

    '&.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(1)',
    },

    '&$pulse.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
      transform: 'scale(0.7)'
    },

    '&.exiting': {
      opacity: 0,
      transform: 'scale(1)',
    },

    '&$pulse.exiting': {
      opacity: 0,
      transform: 'scale(0.7)'
    },

    '&.exited': {
      opacity: 0,
      transform: 'scale(1)',
    },

    '&$pulse.exited': {
      opacity: 0,
      transform: 'scale(0.7)'
    },
  },

  waveSimple: {
    ...other,
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'complex', timing_function: 'decelerated' }),

    '&.entering': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
    },

    '&.entered': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary,
    },

    '&.exit': {
      opacity: theme.palette.visual_contrast.default.opacity.quaternary
    },

    '&.exiting': {
      opacity: 0,
    },

    '&.exited': {
      opacity: 0,
    }
  }
}));

const Interaction = (props: any) => {
  const [interactions, setInteractions] = React.useState([]);
  const [border, setBorder] = React.useState(false);
  const [waves, setWaves] = React.useState([]);
  const [disabled, setDisabled] = React.useState(props.disabled);
  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const theme = useAmauiTheme();

  const { classes } = useStyle();

  React.useEffect(() => {
    const parent = refs.root.current.parentNode;

    const onMouseIn = () => {
      add('mouse-in');

      removeWaves();
    };

    const onMouseOut = () => {
      remove('mouse-in');

      removeWaves();
    };

    const onMouseDown = (event: MouseEvent) => {
      add('mouse-down');

      addWave(event);
    };

    const updateBorder = debounce(() => setBorder(false), theme.transitions.duration.small);

    const onMouseUp = () => {
      setInteractions(items => {
        if (items.indexOf('mouse-down') > -1) {
          // Border
          setBorder(true);

          updateBorder();
        }

        return items;
      });

      remove('mouse-down');

      removeWaves();
    };

    if (parent) {
      parent.addEventListener('mousedown', onMouseDown);
      parent.addEventListener('touchstart', onMouseDown, { passive: true });
      parent.addEventListener('mouseup', onMouseUp);
      window.document.addEventListener('mouseup', onMouseUp);
      parent.addEventListener('touchend', onMouseUp, { passive: true });
      window.document.addEventListener('touchend', onMouseUp, { passive: true });
      parent.addEventListener('mouseenter', onMouseIn);
      parent.addEventListener('touchstart', onMouseIn, { passive: true });
      parent.addEventListener('mouseleave', onMouseOut);
      parent.addEventListener('touchend', onMouseOut, { passive: true });
    }

    return () => {
      if (parent) {
        parent.removeEventListener('mousedown', onMouseDown);
        parent.removeEventListener('touchstart', onMouseDown);
        parent.removeEventListener('mouseup', onMouseUp);
        window.document.removeEventListener('mouseup', onMouseUp);
        parent.removeEventListener('touchend', onMouseUp);
        window.document.removeEventListener('touchend', onMouseUp);
        parent.removeEventListener('mouseenter', onMouseIn);
        parent.removeEventListener('touchstart', onMouseIn);
        parent.removeEventListener('mouseleave', onMouseOut);
        parent.removeEventListener('touchend', onMouseOut);
      }
    }
  }, []);

  React.useEffect(() => {
    if (props.pulse) setTimeout(() => addWavePulse());
  }, [props.pulse]);

  React.useEffect(() => {
    if (props.disabled !== disabled) setDisabled(props.disabled);
  }, [props.disabled]);

  const addWave = (event: MouseEvent) => {
    if (props.wave && !disabled) {
      let top = 0;
      let left = 0;
      let width: any = '100%';

      if (props.wave_version !== 'simple') {
        const root = ((event?.currentTarget || refs.root.current.parentNode) as any).getBoundingClientRect() as DOMRect;
        const w = root.width;
        const h = root.height;
        const x = (props.origin === 'center' || !event) ? w / 2 : event?.offsetX;
        const y = (props.origin === 'center' || !event) ? h / 2 : event?.offsetY;

        width = Math.round(
          Math.sqrt(
            // Largest sub rectangle in value
            Math.max(
              x ** 2 + y ** 2,
              Math.abs(w - x) ** 2 + y ** 2,
              x ** 2 + Math.abs(h - y) ** 2,
              Math.abs(w - x) ** 2 + Math.abs(h - y) ** 2
            )
          )
          * 2
        );

        top = y - width / 2;
        left = x - width / 2;
      }

      setWaves(items => [
        ...items,
        (
          <Transition
            key={getID()}

            enterOnAdd
            className
          >
            <span
              className={props.wave_version === 'simple' ? classes.waveSimple : classes.wave}

              style={{
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${width}px`
              }}
            />
          </Transition>
        )
      ]
      );
    }
  };

  const addWavePulse = () => {
    if (props.pulse && !disabled) {
      // Remove previous wave
      // if there is one
      if (!!waves.length) removeWaves();

      const root = (refs.root.current.parentNode as any).getBoundingClientRect() as DOMRect;
      const w = root.width;
      const h = root.height;
      const x = w / 2;
      const y = h / 2;

      const width = Math.round(
        Math.sqrt(
          x ** 2 + y ** 2
        )
        * 2
      );

      const top = y - width / 2;
      const left = x - width / 2;

      setWaves(items => [
        ...items,
        (
          <Transition
            key={getID()}

            enterOnAdd
            className
          >
            <span
              className={classNames([classes.wave, classes.pulse]) as string}

              style={{
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${width}px`
              }}
            />
          </Transition>
        )
      ]
      );
    }
  };

  const removeWaves = () => setWaves([]);

  const add = value => {
    if (!disabled) {
      setInteractions(items => {
        const newItems = [...items];

        if (newItems.indexOf(value) === -1) newItems.push(value);

        return newItems;
      });
    }
  };

  const has = value => interactions.indexOf(value) > -1;

  const remove = value => setInteractions(items => items.filter(item => item !== value));

  return (
    <span
      ref={refs.root}

      className={classes.root}
    >
      {/* Background */}
      {props.background && (
        <span
          className={classNames([classes.background, has('mouse-in') && classes.active]) as string}
        />
      )}

      {/* Waves */}
      <Transitions
        TransitionProps={{
          noAbruption: true
        }}
      >
        {waves}
      </Transitions>

      {/* Border */}
      {props.border && (
        <Transition in={border}>
          {(status: TTransitionStatus) => (
            <span
              className={classes.border}

              style={{
                opacity: status.indexOf('enter') > -1 ? theme.palette.visual_contrast.default.opacity.quaternary : 0,

                transition: status.indexOf('exit') > -1 ? theme.methods.transitions.make('opacity', { duration: 'complex', timing_function: 'standard' }) : undefined
              }}
            />
          )}
        </Transition>
      )}
    </span>
  );
}

// Default props
Interaction.defaultProps = {
  wave: true,
  background: true,
  border: true
};

export default Interaction;
