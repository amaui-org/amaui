import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import DatePickerElement from '../DatePicker';
import { IDatePicker } from '../DatePicker/DatePicker';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-DateRangePicker' });

export interface IDateRangePicker extends IDatePicker {

}

const DateRangePicker: React.FC<IDateRangePicker> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDateRangePicker?.props?.default, ...props_ }), [props_]);

  const DatePicker = React.useMemo(() => theme?.elements?.DatePicker || DatePickerElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <DatePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('DateRangePicker', theme) && [
          'amaui-DateRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DateRangePicker.displayName = 'amaui-DateRangePicker';

export default DateRangePicker;
