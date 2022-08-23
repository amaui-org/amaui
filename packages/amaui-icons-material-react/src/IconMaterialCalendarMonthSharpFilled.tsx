import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarMonthSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonthSharpFilled'
      short_name='CalendarMonth'

      {...props}
    >
      <path d="M11 14V12H13V14ZM7 14V12H9V14ZM15 14V12H17V14ZM11 18V16H13V18ZM7 18V16H9V18ZM15 18V16H17V18ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonthSharpFilled.displayName = 'AmauiIconMaterialCalendarMonthSharpFilled';

export default IconMaterialCalendarMonthSharpFilled;
