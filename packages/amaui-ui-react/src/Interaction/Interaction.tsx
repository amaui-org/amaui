import React from 'react';

import { debounce } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { Transition } from '../Transition';
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

  waves: {

  }
}));

// Versions: simple (ie youtube), wave, pulse

export default function Interaction(props: any) {
  const [interactions, setInteractions] = React.useState([]);
  const [border, setBorder] = React.useState(false);
  const theme = useAmauiTheme();
  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const { classes } = useStyle();

  React.useEffect(() => {
    const parent = refs.root.current.parentNode;

    const onMouseIn = () => add('mouse-in');
    const onMouseOut = () => remove('mouse-in');
    const onMouseDown = () => add('mouse-down');

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

  const add = value => setInteractions(items => {
    const newItems = [...items];

    if (newItems.indexOf(value) === -1) newItems.push(value);

    return newItems;
  });

  const remove = value => setInteractions(items => items.filter(item => item !== value));

  const has = value => interactions.indexOf(value) > -1;
  console.log(1, interactions);
  return (
    <span
      ref={refs.root}

      className={classes.root}
    >
      <span
        className={classNames([classes.background, has('mouse-in') && classes.active]) as string}
      />

      <Transition in={border}>
        {(status: TTransitionStatus) => (
          <span
            className={classes.border}

            style={{
              opacity: status.indexOf('enter') > -1 ? theme.palette.visual_contrast.default.opacity.quaternary : 0,

              transition: status.indexOf('exit') > -1 ? theme.methods.transitions.make('opacity', { duration: 'regular', timing_function: 'standard' }) : undefined
            }}
          />
        )}
      </Transition>
    </span>
  );
}

