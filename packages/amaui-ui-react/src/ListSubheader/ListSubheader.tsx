import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';
import { IListItem } from '../ListItem/ListItem';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    top: '0',
    position: 'sticky',
    fontWeight: '500',
    zIndex: '1',
    userSelect: 'none'
  }
}), { name: 'AmauiListSubheader' });

export interface IListSubheader extends IListItem {

}

const ListSubheader = React.forwardRef((props_: IListSubheader, ref: any) => {
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
      ref={ref}

      secondary={children}

      className={classNames([
        staticClassName('ListSubheader', theme) && [
          'AmauiListSubheader-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ListSubheader.displayName = 'AmauiListSubheader';

export default ListSubheader;
