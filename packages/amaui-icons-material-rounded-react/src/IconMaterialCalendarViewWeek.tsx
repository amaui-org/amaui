import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeek'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm9-2h2.5V6H13v12Zm-4.5 0H11V6H8.5v12ZM4 18h2.5V6H4v12Zm13.5 0H20V6h-2.5v12Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeek.displayName = 'AmauiIconMaterialCalendarViewWeek';

export default IconMaterialCalendarViewWeek;
