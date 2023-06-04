import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekW100Filled'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 18V6h3.475v12Zm-4.175 0V6h3.475v12ZM4 18V6h3.475v12Zm12.525 0V6H20v12Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100Filled.displayName = 'AmauiIconMaterialCalendarViewWeekW100Filled';

export default IconMaterialCalendarViewWeekW100Filled;
