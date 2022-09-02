import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Modal from '../Modal';
import Slide from '../Slide';

import { staticClassName } from '../utils';

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

// swipe

// vertical
// horizontal

// and for both have min, max and checkpoints to move between
// - touch move goes through checkpoints, within min, max (width, height)
// - swipe, or touchEnd move from checkpoint to checkpoint only if >50% of checkpoints difference previous, otherwise go to next

// transition duration is 300 regular, or less depending on swiper acceleration

const NavigationDrawer = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationDrawer?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    color = props.version === 'modal' ? 'themed' : 'default',
    version = 'modal',
    direction: direction_ = 'left',
    removeOnExited,
    min,

    TransitionComponentProps = {},

    className,

    children,

    ...other
  } = props;

  let direction = direction_;

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

  if (theme.direction === 'rtl') {
    if (direction === 'left') direction = 'right';
    else if (direction === 'right') direction = 'left';
  }

  return (
    <Modal
      ref={ref}

      partialyOpened={min !== undefined}

      tonal={tonal}

      color={color}

      TransitionComponentProps={{
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
