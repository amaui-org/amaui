import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDay'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4V7h18v10Zm2-2h14V9H5ZM3 5V3h18v2Zm2 10V9v6Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDay.displayName = 'AmauiIconMaterialCalendarViewDay';

export default IconMaterialCalendarViewDay;
