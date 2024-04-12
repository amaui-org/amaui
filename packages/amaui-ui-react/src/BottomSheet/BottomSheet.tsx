import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import NavigationDrawerElement from '../NavigationDrawer';
import { INavigationDrawer } from '../NavigationDrawer/NavigationDrawer';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Modal-root .amaui-Modal-surface': {
      paddingTop: theme.methods.space.value(6.25, 'px'),
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
        borderRadius: theme.methods.shape.radius.value(0.5, 'px'),
        opacity: '0.4'
      }
    },

    '@media only screen and (min-width: 640px)': {
      '&.amaui-Modal-root .amaui-Modal-surface': {
        marginTop: '72px',
        marginInline: '56px'
      }
    }
  },
}), { name: 'amaui-BottomSheet' });

export interface IBottomSheet extends INavigationDrawer {

}

const BottomSheet: React.FC<IBottomSheet> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBottomSheet?.props?.default, ...props_ }), [props_]);

  const NavigationDrawer = React.useMemo(() => theme?.elements?.NavigationDrawer || NavigationDrawerElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <NavigationDrawer
      ref={ref}

      direction='bottom'

      className={classNames([
        staticClassName('BottomSheet', theme) && [
          'amaui-BottomSheet-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

BottomSheet.displayName = 'amaui-BottomSheet';

export default BottomSheet;
