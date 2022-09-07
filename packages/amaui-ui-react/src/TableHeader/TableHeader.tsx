import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    padding: '24px'
  }
}), { name: 'AmauiTableHeader' });

const TableHeader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableHeader?.props?.default }), [props_]);

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
        staticClassName('TableHeader', theme) && [
          `AmauiTableHeader-root`
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

TableHeader.displayName = 'AmauiTableHeader';

export default TableHeader;
