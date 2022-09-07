import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'table-header-group'
  },

  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 1
  }
}), { name: 'AmauiTableHead' });

const TableHead = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableHead?.props?.default }), [props_]);

  const {
    tonal,
    color = 'themed',
    sticky,
    Component = 'thead',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('TableHead', theme) && [
          `AmauiTableHead-root`,
          sticky && `AmauiTableHead-sticky`
        ],

        className,
        classes.root,
        sticky && classes.sticky
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          position: 'head'
        })
      ))}
    </Surface>
  );
});

TableHead.displayName = 'AmauiTableHead';

export default TableHead;
