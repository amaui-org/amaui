import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonth'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-9h4V6H4Zm6 0h4V6h-4v5Zm6 0h4V6h-4v5Zm-8 7v-5H4v5Zm2 0h4v-5h-4v5Zm6 0h4v-5h-4v5Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonth.displayName = 'AmauiIconMaterialCalendarViewMonth';

export default IconMaterialCalendarViewMonth;
