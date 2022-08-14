import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import ListItem from '../ListItem';

const useStyle = style(theme => ({
  root: {
    top: 0,
    position: 'sticky',
    fontWeight: 500,
    zIndex: 1
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
