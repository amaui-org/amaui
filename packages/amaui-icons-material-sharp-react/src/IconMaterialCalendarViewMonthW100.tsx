import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11.65h4.875V6H4Zm5.575 0h4.85V6h-4.85Zm5.55 0H20V6h-4.875ZM4 18h4.875v-5.65H4Zm5.575 0h4.85v-5.65h-4.85Zm5.55 0H20v-5.65h-4.875ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100.displayName = 'AmauiIconMaterialCalendarViewMonthW100';

export default IconMaterialCalendarViewMonthW100;
