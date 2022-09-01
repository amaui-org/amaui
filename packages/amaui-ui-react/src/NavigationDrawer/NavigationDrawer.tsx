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
      borderRadius: 0,
      maxHeight: 'unset',
      maxWidth: 'unset',
      minWidth: 'unset',
      position: 'fixed',
      flex: '1 0 auto',
      padding: 0
    }
  },

  direction_up: {
    '& .AmauiModal-surface': {
      top: 0,
      left: 0,
      width: '100%'
    }
  },

  direction_left: {
    '& .AmauiModal-surface': {
      top: 0,
      left: 0,
      height: '100%'
    }
  },

  direction_right: {
    '& .AmauiModal-surface': {
      top: 0,
      right: 0,
      height: '100%'
    }
  },

  direction_down: {
    '& .AmauiModal-surface': {
      bottom: 0,
      left: 0,
      width: '100%'
    }
  },
}), { name: 'AmauiNavigationDrawer' });

const NavigationDrawer = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationDrawer?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    color = 'themed',
    direction: direction_ = 'left',

    className,

    children,

    ...other
  } = props;

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
          `AmauiNavigationDrawer-direction-${direction}`
        ],

        className,
        classes.root,
        classes[`direction_${direction}`]
      ])}

      {...other}
    >
      {children}
    </Modal>
  );
});

NavigationDrawer.displayName = 'AmauiNavigationDrawer';

export default NavigationDrawer;
