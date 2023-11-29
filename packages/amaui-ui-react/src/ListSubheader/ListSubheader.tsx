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
}), { name: 'amaui-ListSubheader' });

export interface IListSubheader extends IListItem {

}

const ListSubheader: React.FC<IListSubheader> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiListSubheader?.props?.default, ...props_ }), [props_]);

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
          'amaui-ListSubheader-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ListSubheader.displayName = 'amaui-ListSubheader';

export default ListSubheader;
