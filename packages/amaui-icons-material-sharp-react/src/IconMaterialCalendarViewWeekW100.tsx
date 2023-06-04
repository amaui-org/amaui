import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekW100'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 18h3.475V6H12.35Zm-4.175 0h3.475V6H8.175ZM4 18h3.475V6H4Zm12.525 0H20V6h-3.475ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekW100.displayName = 'AmauiIconMaterialCalendarViewWeekW100';

export default IconMaterialCalendarViewWeekW100;
