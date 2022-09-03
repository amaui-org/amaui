import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import NavigationDrawer from '../NavigationDrawer';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    '&.AmauiModal-root .AmauiModal-surface': {
      paddingTop: '40px',
      maxWidth: '640px',

      '&:before': {
        content: "''",
        position: 'absolute',
        background: 'currentColor',
        height: '5px',
        width: '30px',
        top: '18.5px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '5px',
        opacity: 0.24
      }
    },

    '@media only screen and (min-width: 640px)': {
      '&.AmauiModal-root .AmauiModal-surface': {
        marginTop: '72px',
        marginInline: '56px'
      }
    }
  },
}), { name: 'AmauiBottomSheet' });

const BottomSheet = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBottomSheet?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <NavigationDrawer
      ref={ref}

      direction='bottom'

      className={classNames([
        staticClassName('BottomSheet', theme) && [
          'AmauiBottomSheet-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

BottomSheet.displayName = 'AmauiBottomSheet';

export default BottomSheet;
