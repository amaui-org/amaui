import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import DateTimePicker from '../DateTimePicker';
import { IDateTimePicker } from '../DateTimePicker/DateTimePicker';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-DateTimeRangePicker' });

export interface IDateTimeRangePicker extends IDateTimePicker {

}

const DateTimeRangePicker: React.FC<IDateTimeRangePicker> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDateTimeRangePicker?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <DateTimePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('DateTimeRangePicker', theme) && [
          'amaui-DateTimeRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DateTimeRangePicker.displayName = 'amaui-DateTimeRangePicker';

export default DateTimeRangePicker;
