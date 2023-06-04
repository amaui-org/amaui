import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarTodayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayW100Filled'

      short_name='CalendarToday'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayW100Filled.displayName = 'AmauiIconMaterialCalendarTodayW100Filled';

export default IconMaterialCalendarTodayW100Filled;
