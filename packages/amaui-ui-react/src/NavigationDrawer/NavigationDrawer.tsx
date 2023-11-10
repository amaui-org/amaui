import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Modal from '../Modal';
import Slide from '../Slide';
import useSwipe from '../useSwipe';
import { IOptionsUseSwipe, IResponseUseSwipe } from '../useSwipe/useSwipe';
import { IModal } from '../Modal/Modal';

import { staticClassName, TMethodTransition, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-Modal-surface': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0',
      maxHeight: 'unset',
      maxWidth: 'unset',
      minWidth: 'unset',
      flex: '1 0 auto',
      padding: '0'
    }
  },

  version_modal: {
    '& .amaui-Modal-surface': {
      position: 'fixed'
    }
  },

  version_standard: {
    // '&.amaui-Modal-root': {
    //   position: 'unset',
    //   inset: 'unset'
    // },

    '& .amaui-Modal-surface': {
      position: 'relative'
    }
  },

  direction_top: {
    '& .amaui-Modal-surface': {
      top: '0',
      width: '100%',
      borderRadius: '0 0 16px 16px'
    }
  },

  direction_left: {
    '& .amaui-Modal-surface': {
      left: '0',
      height: '100%',
      borderRadius: '0 16px 16px 0'
    }
  },

  direction_right: {
    '& .amaui-Modal-surface': {
      right: '0',
      height: '100%',
      borderRadius: '16px 0 0 16px'
    }
  },

  direction_bottom: {
    '& .amaui-Modal-surface': {
      bottom: '0',
      width: '100%',
      borderRadius: '16px 16px 0 0'
    }
  }
}), { name: 'amaui-NavigationDrawer' });

export interface INavigationDrawer extends IModal {
  version?: 'modal' | 'standard';
  direction?: 'top' | 'left' | 'bottom' | 'right';
  swipe?: boolean;
  swipeTouchAnywhere?: boolean;
  swipeBackgroundFollow?: boolean;
  min?: number;
  removeOnExited?: TMethodTransition;

  TransitionComponentProps?: TPropsAny;
}

const NavigationDrawer = React.forwardRef((props_: INavigationDrawer, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiNavigationDrawer?.props?.default, ...props_ }), [props_]);

  const {
    tonal = false,
    color = [undefined, 'modal'].includes(props.version) ? 'themed' : 'default',
    version = 'modal',

    open: open_,
    openDefault,

    direction: direction_ = 'left',
    swipe = true,
    swipeTouchAnywhere = true,
    swipeBackgroundFollow = true,
    min,
    removeOnExited,
    onClose: onClose_,

    TransitionComponentProps = {},

    Component = 'nav',

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
      open,
      min,
      direction,
      touchAnywhere: swipeTouchAnywhere
    };

    swipeValue = useSwipe(refs.modal.current, swipeOptions);
  }

  React.useEffect(() => {
    if (open_ !== open) setOpen(open_);
  }, [open_]);

  React.useEffect(() => {
    if (swipeValue && version === 'modal') {
      const valueSwipe = swipeValue.value;
      const valuePercentageSwipe = clamp(swipeValue.valuePercentage, 0, 100);
      const position = swipeValue.position;

      if (position !== undefined) {
        let value_: any;

        if (direction === 'top') value_ = `translateY(${valueSwipe}px)`;

        if (direction === 'left') value_ = `translateX(${valueSwipe}px)`;

        if (direction === 'right') value_ = `translateX(${valueSwipe}px)`;

        if (direction === 'bottom') value_ = `translateY(${valueSwipe}px)`;

        // Add transitions
        if (refs.modal.current) {
          refs.modal.current.style.transition = theme.methods.transitions.make('transform', { duration: 'xs' });

          refs.modal.current.style.transform = value_;
        }

        if (refs.background.current) {
          refs.background.current.style.transition = theme.methods.transitions.make('opacity', { duration: 'xs' });
        }

        if (position === 'min') {
          if (refs.background.current) {
            refs.background.current.style.opacity = '0';
          }

          if (refs.modal.current) setTimeout(() => {
            onClose();
          }, theme.transitions.duration.xs + 14);
        }

        if (position === 'max') {
          if (refs.background.current) {
            refs.background.current.style.opacity = '1';
          }
        }
      }
      else {
        let value_ = '';

        if (refs.modal.current) {
          if (direction === 'top') value_ = `translateY(${valueSwipe}px)`;

          if (direction === 'left') value_ = `translateX(${valueSwipe}px)`;

          if (direction === 'right') value_ = `translateX(${valueSwipe}px)`;

          if (direction === 'bottom') value_ = `translateY(${valueSwipe}px)`;

          // No transition
          refs.modal.current.style.transition = 'none';

          refs.modal.current.style.transform = value_;
        }

        if (swipeBackgroundFollow && refs.background.current) {
          // No transition
          refs.background.current.style.transition = 'none';

          refs.background.current.style.opacity = `${valuePercentageSwipe / 100}`;
        }
        else {
          // Add transition
          refs.background.current.style.transition = theme.methods.transitions.make('opacity', { duration: 'xs' });
        }
      }
    }
  }, [version, swipeValue?.value, swipeValue?.position]);

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

    TransitionComponentProps.min = TransitionComponentProps.min !== undefined ? TransitionComponentProps.min : min;
  }

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

        enterOnAdd: false,

        ...TransitionComponentProps
      }}

      TransitionComponent={Slide}

      Component={Component}

      className={classNames([
        staticClassName('NavigationDrawer', theme) && [
          'amaui-NavigationDrawer-root'
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

NavigationDrawer.displayName = 'amaui-NavigationDrawer';

export default NavigationDrawer;
