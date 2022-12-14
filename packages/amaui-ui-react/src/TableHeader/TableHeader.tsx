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
}), { name: 'AmauiTableHeader' });

export interface ITableHeader extends ISurface {
  size?: TSize;
}

const TableHeader = React.forwardRef((props_: ITableHeader, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiTableHeader?.props?.default, ...props_ }), [props_]);

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
        staticClassName('TableHeader', theme) && [
          `AmauiTableHeader-root`
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

TableHeader.displayName = 'AmauiTableHeader';

export default TableHeader;
