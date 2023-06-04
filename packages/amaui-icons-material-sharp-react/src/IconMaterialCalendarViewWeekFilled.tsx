import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekFilled'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 19V5h3.375v14Zm-4.875 0V5h3.375v14ZM3 19V5h3.375v14Zm14.625 0V5H21v14Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekFilled.displayName = 'AmauiIconMaterialCalendarViewWeekFilled';

export default IconMaterialCalendarViewWeekFilled;
