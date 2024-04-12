import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    padding: theme.methods.space.value(2, 'px')
  },

  size_regular: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_large: {
    padding: `${theme.methods.space.value(4, 'px')} ${theme.methods.space.value(3, 'px')}`
  }
}), { name: 'amaui-TableFooter' });

export interface ITableFooter extends ISurface {
  size?: ISize;
}

const TableFooter: React.FC<ITableFooter> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableFooter?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('TableFooter', theme) && [
          `amaui-TableFooter-root`
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

TableFooter.displayName = 'amaui-TableFooter';

export default TableFooter;
