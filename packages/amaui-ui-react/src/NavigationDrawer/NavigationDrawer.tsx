import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Modal from '../Modal';
import Slide from '../Slide';

import { staticClassName } from '../utils';
import useSwipe from '../useSwipe';
import { IOptionsUseSwipe, IResponseUseSwipe } from '../useSwipe/useSwipe';
import { clamp, is } from '@amaui/utils';

const useStyle = style(theme => ({
  root: {
    '& .AmauiModal-surface': {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      maxHeight: 'unset',
      maxWidth: 'unset',
      minWidth: 'unset',
      flex: '1 0 auto',
      padding: 0
    }
  },

  version_modal: {
    '& .AmauiModal-surface': {
      position: 'fixed'
    }
  },

  version_standard: {
    '&.AmauiModal-root': {
      position: 'unset',
      inset: 'unset'
    },

    '& .AmauiModal-surface': {
      position: 'relative'
    }
  },

  direction_top: {
    '& .AmauiModal-surface': {
      top: 0,
      left: 0,
      width: '100%',
      borderRadius: '0 0 16px 16px'
    }
  },

  direction_left: {
    '& .AmauiModal-surface': {
      top: 0,
      left: 0,
      height: '100%',
      borderRadius: '0 16px 16px 0'
    }
  },

  direction_right: {
    '& .AmauiModal-surface': {
      top: 0,
      right: 0,
      height: '100%',
      borderRadius: '16px 0 0 16px'
    }
  },

  direction_bottom: {
    '& .AmauiModal-surface': {
      bottom: 0,
      left: 0,
      width: '100%',
      borderRadius: '16px 16px 0 0'
    }
  }
}), { name: 'AmauiNavigationDrawer' });

const NavigationDrawer = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationDrawer?.props?.default }), [props_]);

  const {
    tonal = false,
    color = props.version === 'modal' ? 'themed' : 'default',
    version = 'modal',
    direction: direction_ = 'left',
    removeOnExited,
    swipe = true,
    min,
    open: open_,
    openDefault,
    onClose: onClose_,

    TransitionComponentProps = {},

    className,

    children,

    ...other
  } = props;

  const [entered, setEntered] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const refs = {
    modal: React.useRef<HTMLElement>(),
    background: React.useRef<HTMLElement>()
  };

  const { classes } = useStyle(props);

  let direction = direction_;

  if (theme.direction === 'rtl') {
    if (direction === 'left') direction = 'right';
    else if (direction === 'right') direction = 'left';
  }

  let swipeValue: IResponseUseSwipe;

  if (swipe) {
    const swipeOptions: IOptionsUseSwipe = {
      direction
    };

    if (direction === 'top') {
      swipeOptions.min = min !== undefined ? min : 'top';
      swipeOptions.max = 'bottom';
    }

    if (direction === 'left') {
      swipeOptions.min = min !== undefined ? min : 'left';
      swipeOptions.max = 'right';
    }

    if (direction === 'right') {
      swipeOptions.min = min !== undefined ? min : 'right';
      swipeOptions.max = 'left';
    }

    if (direction === 'bottom') {
      swipeOptions.min = min !== undefined ? min : 'bottom';
      swipeOptions.max = 'top';
    }

    swipeValue = useSwipe(refs.modal.current, swipeOptions);
  }

  React.useEffect(() => {
    if (open_ !== open) setOpen(open_);
  }, [open_]);

  React.useEffect(() => {
    const valueSwipe = clamp(swipeValue.value, 0, 100);
    const position = swipeValue.position;

    if (position !== undefined) {
      if (position === 'min') {
        if (refs.modal.current) onClose();

        if (refs.background.current) {
          // Add transition
          refs.background.current.style.transition = theme.methods.transitions.make('transform', { duration: 'xs' });

          refs.background.current.style.opacity = `${1 - (valueSwipe / 100)}`;
        }
      }

      if (position === 'max') {
        if (refs.modal.current) {
          // Add transition
          refs.modal.current.style.transition = theme.methods.transitions.make('transform', { duration: 'xs' });

          refs.modal.current.style.transform = 'translate(0, 0)';
        }

        if (refs.background.current) {
          // Add transition
          refs.background.current.style.transition = theme.methods.transitions.make('opacity', { duration: 'xs' });

          refs.background.current.style.opacity = '1';
        }
      }
    }
    else {
      let value_ = '';

      if (refs.modal.current) {
        if (direction === 'top') value_ = `translateY(-${valueSwipe}%)`;
        if (direction === 'left') value_ = `translateX(-${valueSwipe}%)`;
        if (direction === 'right') value_ = `translateX(${valueSwipe}%)`;
        if (direction === 'bottom') value_ = `translateY(${valueSwipe}%)`;

        // No transition
        refs.modal.current.style.transition = 'none';

        refs.modal.current.style.transform = value_;
      }

      if (refs.background.current) {
        // No transition
        refs.background.current.style.transition = 'none';

        refs.background.current.style.opacity = `${1 - (valueSwipe / 100)}`;
      }
    }
  }, [swipeValue?.value, swipeValue?.position]);

  const onClose = React.useCallback(() => {
    if (is('function', onClose_)) onClose_();
  }, []);

  if (version === 'standard') {
    other.portal = other.portal !== undefined ? other.portal : false;
    other.freezeScroll = other.freezeScroll !== undefined ? other.freezeScroll : false;
    other.background = other.background !== undefined ? other.background : false;
    other.focus = other.focus !== undefined ? other.focus : false;
    other.disableKeyboardClose = other.disableKeyboardClose !== undefined ? other.disableKeyboardClose : true;
  }

  TransitionComponentProps.direction = TransitionComponentProps.direction !== undefined ? TransitionComponentProps.direction : direction;
  TransitionComponentProps.removeOnExited = TransitionComponentProps.removeOnExited !== undefined ? TransitionComponentProps.removeOnExited : min === undefined;

  if (min !== undefined) {
    other.freezeScroll = other.freezeScroll !== undefined ? other.freezeScroll : false;
    other.openDefault = false;

    TransitionComponentProps.add = TransitionComponentProps.add !== undefined ? TransitionComponentProps.add : true;
    TransitionComponentProps.exitOnAdd = TransitionComponentProps.exitOnAdd !== undefined ? TransitionComponentProps.exitOnAdd : true;
    TransitionComponentProps.min = TransitionComponentProps.min !== undefined ? TransitionComponentProps.min : min;
  }
  console.log(0, swipeValue);
  return (
    <Modal
      ref={ref}

      open={open}

      mainRef={refs.modal}

      backgroundRef={refs.background}

      partialyOpened={min !== undefined}

      tonal={tonal}

      color={color}

      onClose={onClose}

      TransitionComponentProps={{
        onAdded: () => setEntered(true),

        onEntered: () => setEntered(true),

        onExited: () => setEntered(false),

        ...TransitionComponentProps
      }}

      TransitionComponent={Slide}

      className={classNames([
        staticClassName('Modal', theme) && [
          'AmauiNavigationDrawer-root',
          `AmauiNavigationDrawer-version-${version}`,
          `AmauiNavigationDrawer-direction-${direction}`
        ],

        className,
        classes.root,
        classes[`direction_${direction}`],
        classes[`version_${version}`]
      ])}

      {...other}
    >
      {children}
    </Modal>
  );
});

NavigationDrawer.displayName = 'AmauiNavigationDrawer';

export default NavigationDrawer;
