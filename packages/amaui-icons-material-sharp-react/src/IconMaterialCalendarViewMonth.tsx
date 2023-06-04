import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonth'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11h4V6H4Zm6 0h4V6h-4Zm6 0h4V6h-4ZM4 18h4v-5H4Zm6 0h4v-5h-4Zm6 0h4v-5h-4ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonth.displayName = 'AmauiIconMaterialCalendarViewMonth';

export default IconMaterialCalendarViewMonth;
