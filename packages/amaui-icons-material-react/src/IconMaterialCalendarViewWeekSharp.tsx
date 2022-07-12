import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekSharp'
      short_name='CalendarViewWeek'

      {...props}
    >
      <path d="M13 18H15.5V6H13ZM8.5 18H11V6H8.5ZM4 18H6.5V6H4ZM17.5 18H20V6H17.5ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarViewWeekSharp;
