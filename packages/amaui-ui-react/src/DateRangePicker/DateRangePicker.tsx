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

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDateRangePicker?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <DatePicker
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
