import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthSharpFilled'
      short_name='CalendarViewMonth'

      {...props}
    >
      <path d="M3 11.5V5H8.325V11.5ZM9.325 11.5V5H14.675V11.5ZM15.675 11.5V5H21V11.5ZM3 19V12.5H8.325V19ZM9.325 19V12.5H14.675V19ZM15.675 19V12.5H21V19Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthSharpFilled.displayName = 'AmauiIconMaterialCalendarViewMonthSharpFilled';

export default IconMaterialCalendarViewMonthSharpFilled;
