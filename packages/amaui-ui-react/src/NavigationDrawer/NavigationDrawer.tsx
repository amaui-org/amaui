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

  direction_up: {
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

  direction_down: {
    '& .AmauiModal-surface': {
      bottom: 0,
      left: 0,
      width: '100%',
      borderRadius: '16px 16px 0 0'
    }
  },
}), { name: 'AmauiNavigationDrawer' });

// swipe

// drag
// move < 50 and touchEnd close, if move >= 50 and touchEnd open update to full position

const NavigationDrawer = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationDrawer?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    version = 'modal',
    tonal = false,
    color = props.version === 'modal' ? 'themed' : 'default',
    direction: direction_ = 'left',

    className,

    children,

    ...other
  } = props;

  if (version === 'standard') {
    other.portal = other.portal !== undefined ? other.portal : false;
    other.freezeScroll = other.freezeScroll !== undefined ? other.freezeScroll : false;
    other.background = other.background !== undefined ? other.background : false;
    other.focus = other.focus !== undefined ? other.focus : false;
    other.disableKeyboardClose = other.disableKeyboardClose !== undefined ? other.disableKeyboardClose : true;
  }

  let direction = direction_;

  if (theme.direction === 'rtl') {
    if (direction === 'left') direction = 'right';
    else if (direction === 'right') direction = 'left';
  }

  return (
    <Modal
      ref={ref}

      tonal={tonal}

      color={color}

      ModalProps={{
        direction
      }}

      ModalComponent={Slide}

      className={classNames([
        staticClassName('Modal', theme) && [
          'AmauiNavigationDrawer-root',
          `AmauiNavigationDrawer-direction-${direction}`,
          `AmauiNavigationDrawer-version-${version}`
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
