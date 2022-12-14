import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    padding: '16px'
  },

  size_regular: {
    padding: '24px 16px'
  },

  size_large: {
    padding: '32px 24px'
  }
}), { name: 'AmauiTableFooter' });

export interface ITableFooter extends ISurface {
  size?: TSize;
}

const TableFooter = React.forwardRef((props_: ITableFooter, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiTableFooter?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = 'div',

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
        staticClassName('TableFooter', theme) && [
          `AmauiTableFooter-root`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {children}
    </Surface>
  );
});

TableFooter.displayName = 'AmauiTableFooter';

export default TableFooter;
