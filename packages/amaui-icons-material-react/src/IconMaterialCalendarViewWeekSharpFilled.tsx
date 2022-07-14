import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekSharpFilled'
      short_name='CalendarViewWeek'

      {...props}
    >
      <path d="M12.75 19V5H16.125V19ZM7.875 19V5H11.25V19ZM3 19V5H6.375V19ZM17.625 19V5H21V19Z"/>
    </Icon>
  );
});

export default IconMaterialCalendarViewWeekSharpFilled;
