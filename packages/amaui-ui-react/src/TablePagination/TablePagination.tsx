import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiTablePagination' });

const TablePagination = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTablePagination?.props?.default }), [props_]);

  const {
    total,
    page = 0,
    rowsPerPage,
    rowsPerPageOptions = props.total < 4 ? [props.total] : [props.total * 0.05, props.total * 0.1, props.total * 0.25, props.total * 0.5, props.total],

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Component
      ref={ref}

      Component={Component}

      className={classNames([
        staticClassName('TablePagination', theme) && [
          `AmauiTablePagination-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Component>
  );
});

TablePagination.displayName = 'AmauiTablePagination';

export default TablePagination;
