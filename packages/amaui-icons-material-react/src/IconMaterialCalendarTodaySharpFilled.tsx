import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarTodaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodaySharpFilled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5Z"/>
    </Icon>
  );
});

export default IconMaterialCalendarTodaySharpFilled;
