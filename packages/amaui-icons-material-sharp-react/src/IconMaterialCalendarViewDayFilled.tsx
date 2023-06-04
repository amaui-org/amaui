import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayFilled'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4V7h18v10ZM3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayFilled.displayName = 'AmauiIconMaterialCalendarViewDayFilled';

export default IconMaterialCalendarViewDayFilled;
