import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekSharpW100'
      short_name='CalendarViewWeek'

      {...props}
    >
      <path d="M12.35 18H15.825V6H12.35ZM8.175 18H11.65V6H8.175ZM4 18H7.475V6H4ZM16.525 18H20V6H16.525ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekSharpW100.displayName = 'AmauiIconMaterialCalendarViewWeekSharpW100';

export default IconMaterialCalendarViewWeekSharpW100;
