import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    padding: '24px'
  }
}), { name: 'AmauiTableFooter' });

const TableFooter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableFooter?.props?.default }), [props_]);

  const {
    tonal,
    color = 'themed',

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
        classes.root
      ])}

      {...other}
    >
      {children}
    </Surface>
  );
});

TableFooter.displayName = 'AmauiTableFooter';

export default TableFooter;
