import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarTodayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayFilled'

      short_name='CalendarToday'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayFilled.displayName = 'AmauiIconMaterialCalendarTodayFilled';

export default IconMaterialCalendarTodayFilled;
