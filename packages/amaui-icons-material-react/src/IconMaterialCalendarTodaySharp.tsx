import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarTodaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodaySharp'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarTodaySharp;
