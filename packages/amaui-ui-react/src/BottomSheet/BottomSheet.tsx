import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import NavigationDrawer from '../NavigationDrawer';
import { INavigationDrawer } from '../NavigationDrawer/NavigationDrawer';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.AmauiModal-root .AmauiModal-surface': {
      paddingTop: '50px',
      maxWidth: '640px',

      '&:before': {
        content: "''",
        position: 'absolute',
        background: 'currentColor',
        height: '4px',
        width: '32px',
        top: '23px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '5px',
        opacity: '0.4'
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

export interface IBottomSheet extends INavigationDrawer {

}

const BottomSheet = React.forwardRef((props_: IBottomSheet, ref: any) => {
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
