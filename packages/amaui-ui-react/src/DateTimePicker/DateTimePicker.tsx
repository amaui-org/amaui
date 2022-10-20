import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiDateTimePicker' });

const DateTimePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDateTimePicker?.props?.default }), [props_]);

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
        staticClassName('DateTimePicker', theme) && [
          'AmauiDateTimePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >

    </Component>
  );
});

DateTimePicker.displayName = 'AmauiDateTimePicker';

export default DateTimePicker;
