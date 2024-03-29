import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-row-group',
    background: 'inherit',

    '& .amaui-TableRow-root:last-child hr': {
      display: 'none'
    }
  }
}), { name: 'amaui-TableBody' });

export interface ITableBody extends ISurface {
  size?: ISize;
}

const TableBody: React.FC<ITableBody> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableBody?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = 'tbody',

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

      role='rowgroup'

      Component={Component}

      className={classNames([
        staticClassName('TableBody', theme) && [
          `amaui-TableBody-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'body'
        })
      ))}
    </Surface>
  );
});

TableBody.displayName = 'amaui-TableBody';

export default TableBody;
