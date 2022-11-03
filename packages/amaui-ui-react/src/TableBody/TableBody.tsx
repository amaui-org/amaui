import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-row-group'
  }
}), { name: 'AmauiTableBody' });

export interface ITableBody extends ISurface {
  size?: TSize;
}

const TableBody = React.forwardRef((props_: ITableBody, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableBody?.props?.default }), [props_]);

  const {
    tonal,
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

      Component={Component}

      className={classNames([
        staticClassName('TableBody', theme) && [
          `AmauiTableBody-root`
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

TableBody.displayName = 'AmauiTableBody';

export default TableBody;
