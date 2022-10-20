import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiDatePicker' });

const DatePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDatePicker?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    Component = 'div',

    className,

    ...other
  } = props;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDatePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >

    </Component>
  );
});

DatePicker.displayName = 'AmauiDatePicker';

export default DatePicker;
