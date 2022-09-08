import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiPagination' });

const Pagination = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPagination?.props?.default }), [props_]);

  const {
    total,
    value: value_,
    valueDefault,
    onChange: onChange_,
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const { classes } = useStyle(props);

  const onChange = (value__: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(value__);

    if (is('function', onChange)) onChange(value__);
  };

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Pagination', theme) && [
          `AmauiPagination-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Component>
  );
});

Pagination.displayName = 'AmauiPagination';

export default Pagination;
