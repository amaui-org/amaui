import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthFilled'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11.5V5h5.325v6.5Zm6.325 0V5h5.35v6.5Zm6.35 0V5H21v6.5ZM3 19v-6.5h5.325V19Zm6.325 0v-6.5h5.35V19Zm6.35 0v-6.5H21V19Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthFilled.displayName = 'AmauiIconMaterialCalendarViewMonthFilled';

export default IconMaterialCalendarViewMonthFilled;
