import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TimePicker from '../TimePicker';
import { ITimePicker } from '../TimePicker/TimePicker';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-TimeRangePicker' });

export interface ITimeRangePicker extends ITimePicker {

}

const TimeRangePicker = React.forwardRef((props_: ITimeRangePicker, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimeRangePicker?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

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
