import React from 'react';

import getID from '@amaui/utils/getID';
import debounce from '@amaui/utils/debounce';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { Transition, Transitions, TTransitionStatus } from '..';

import { staticClassName } from '../utils';

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
    transition: theme.methods.transitions.make(['opacity', 'background'], { duration: 'rg', timing_function: 'standard' }),

    '&$hovered': {
      background: 'currentcolor'
    },

    '&$selected': {
      opacity: theme.palette.visual_contrast.default.opacity.selected,
      background: 'currentcolor'
    }
  },

  border: {
    ...other,
    opacity: '0',
    boxShadow: 'inset 0 0 0 2px currentColor'
  },

  wave: {
    ...other,
    opacity: 0.1,
    transform: 'scale(0)',
    backgroundColor: 'currentcolor',
    transition: theme.methods.transitions.make(['opacity', 'transform'], { duration: 'complex', timing_function: 'standard' }),
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
    opacity: 0.1,
    backgroundColor: 'currentcolor',
    transition: theme.methods.transitions.make(['opacity'], { duration: 'complex', timing_function: 'standard' }),

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
}), { name: 'AmauiInteraction' });

const Interaction = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiInteraction?.props?.default }), [props_]);

  const {
    wave = true,
    background = true,
    border: border_ = true,
    pulse,
    origin,
    selected,
    wave_version,
    disabled: disabled_,

    className
  } = props;

  const [interactions, setInteractions] = React.useState([]);
  const [border, setBorder] = React.useState(false);
  const [waves, setWaves] = React.useState([]);
  const [disabled, setDisabled] = React.useState(disabled_);
  const refs = {
    root: React.useRef<HTMLElement>(),
    mouse: React.useRef({ down: 0, up: 0, press: 0 })
  };

  const { classes } = useStyle(props);

  React.useEffect(() => {
    const parent = refs.root.current.parentNode;

    const onMouseIn = () => {
      add('mouse-in');

      removeWaves();
    };

    const onMouseOut = () => {
      refs.mouse.current.up = new Date().getTime();
      refs.mouse.current.press = refs.mouse.current.down ? Math.round(refs.mouse.current.up - refs.mouse.current.down) : 0;

      remove('mouse-in');

      removeWaves();
    };

    const onMouseDown = (event: MouseEvent) => {
      refs.mouse.current.down = new Date().getTime();
      refs.mouse.current.up = 0;
      refs.mouse.current.press = 0;

      add('mouse-down');

      addWave(event);
    };

    const updateBorder = debounce(() => setBorder(false), theme.transitions.duration.sm);

    const onMouseUp = () => {
      refs.mouse.current.up = new Date().getTime();
      refs.mouse.current.press = refs.mouse.current.down ? Math.round(refs.mouse.current.up - refs.mouse.current.down) : 0;

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
    if (pulse) addWavePulse();
    else removeWaves();
  }, [pulse]);

  React.useEffect(() => {
    if (disabled_ !== disabled) setDisabled(disabled_);
  }, [disabled_]);

  const addWave = (event: MouseEvent) => {
    if (wave && !disabled) {
      let top = 0;
      let left = 0;
      let width: any = '100%';

      if (wave_version !== 'simple') {
        const rect = (event.currentTarget as any)?.getBoundingClientRect();
        const root = ((event?.currentTarget || refs.root.current.parentNode) as any).getBoundingClientRect() as DOMRect;
        const w = root.width;
        const h = root.height;
        const x = (origin === 'center' || !event) ? w / 2 : rect ? event.x - rect.left : event.offsetX;
        const y = (origin === 'center' || !event) ? h / 2 : rect ? event.y - rect.top : event.offsetY;

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

            timeout='complex'

            enterOnAdd
            className
          >
            <span
              className={wave_version === 'simple' ? classes.waveSimple : classes.wave}

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
    if (pulse && !disabled) {
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

            timeout='complex'

            enterOnAdd
            className
          >
            <span
              className={classNames([classes.wave, classes.pulse])}

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
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Interaction', theme) && [
          'AmauiInteraction-root'
        ],

        className,
        classes.root
      ])}
    >
      {/* Background */}
      {background && (
        <span
          className={classNames([
            staticClassName('Interaction', theme) && [
              'AmauiInteraction-background'
            ],

            classes.background,
            has('mouse-in') && classes.hovered,
            selected && classes.selected
          ])}
        />
      )}

      {/* Waves */}
      <Transitions
        TransitionProps={{
          noAbruption: true,

          timeout: {
            enter: 'complex',
            exit: refs.mouse.current.press < 500 ? 350 : 500
          },

          style: {
            transitionDuration: refs.mouse.current.press < 500 ? 340 : 500
          }
        }}
      >
        {waves}
      </Transitions>

      {/* Border */}
      {border_ && (
        <Transition in={border}>
          {(status: TTransitionStatus) => (
            <span
              className={classNames([
                staticClassName('Interaction', theme) && [
                  'AmauiInteraction-border'
                ],

                classes.border
              ])}

              style={{
                opacity: status?.indexOf('enter') > -1 ? theme.palette.visual_contrast.default.opacity.quaternary : 0,

                transition: status?.indexOf('exit') > -1 ? theme.methods.transitions.make('opacity', { duration: 'complex', timing_function: 'standard' }) : undefined
              }}
            />
          )}
        </Transition>
      )}
    </span>
  );
});

export default Interaction;
