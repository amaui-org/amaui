import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { ISize } from '../types';
import { staticClassName } from '../utils';

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
}), { name: 'amaui-TableHeader' });

export interface ITableHeader extends ISurface {
  size?: ISize;
}

const TableHeader: React.FC<ITableHeader> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableHeader?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Component
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Surface as any}

      className={classNames([
        staticClassName('TableHeader', theme) && [
          `amaui-TableHeader-root`,
          `amaui-TableHeader-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {children}
    </Component>
  );
});

TableHeader.displayName = 'amaui-TableHeader';

export default TableHeader;
