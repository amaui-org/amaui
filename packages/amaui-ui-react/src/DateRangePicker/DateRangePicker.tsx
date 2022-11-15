import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import DatePicker from '../DatePicker';
import { IDatePicker } from '../DatePicker/DatePicker';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'AmauiDateRangePicker' });

export interface IDateRangePicker extends IDatePicker {

}

const DateRangePicker = React.forwardRef((props_: IDateRangePicker, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiDateRangePicker?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <DatePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('DateRangePicker', theme) && [
          'AmauiDateRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DateRangePicker.displayName = 'AmauiDateRangePicker';

export default DateRangePicker;
