import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-header-group'
  },

  sticky: {
    position: 'sticky',
    top: '0',
    zIndex: '11'
  }
}), { name: 'AmauiTableHead' });

export interface ITableHead extends ISurface {
  size?: TSize;

  sticky?: boolean;
}

const TableHead = React.forwardRef((props_: ITableHead, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableHead?.props?.default }), [props_]);

  const {
    tonal,
    color = 'themed',
    size = 'regular',

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

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'head'
        })
      ))}
    </Surface>
  );
});

TableHead.displayName = 'AmauiTableHead';

export default TableHead;
