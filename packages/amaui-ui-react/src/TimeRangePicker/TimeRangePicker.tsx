import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TimePickerElement from '../TimePicker';
import { ITimePicker } from '../TimePicker/TimePicker';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-TimeRangePicker' });

export interface ITimeRangePicker extends ITimePicker {

}

const TimeRangePicker: React.FC<ITimeRangePicker> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimeRangePicker?.props?.default, ...props_ }), [props_]);

  const TimePicker = React.useMemo(() => theme?.elements?.TimePicker || TimePickerElement, [theme]);

  const {
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <TimePicker
      ref={ref}

      range

      className={classNames([
        staticClassName('TimeRangePicker', theme) && [
          'amaui-TimeRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

TimeRangePicker.displayName = 'amaui-TimeRangePicker';

export default TimeRangePicker;
