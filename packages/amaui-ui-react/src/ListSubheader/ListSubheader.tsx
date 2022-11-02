import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    top: 0,
    position: 'sticky',
    fontWeight: 500,
    zIndex: 1,
    userSelect: 'none'
  }
}), { name: 'AmauiListSubheader' });

const ListSubheader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiListSubheader?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <ListItem
      {...other}

      secondary={children}

      className={classNames([
        staticClassName('ListSubheader', theme) && [
          'AmauiListSubheader-root'
        ],

        className,
        classes.root
      ])}
    />
  );
});

ListSubheader.displayName = 'AmauiListSubheader';

export default ListSubheader;
