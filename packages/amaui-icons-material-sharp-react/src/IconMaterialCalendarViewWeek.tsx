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
      <path d="M13 18h2.5V6H13Zm-4.5 0H11V6H8.5ZM4 18h2.5V6H4Zm13.5 0H20V6h-2.5ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeek.displayName = 'AmauiIconMaterialCalendarViewWeek';

export default IconMaterialCalendarViewWeek;
