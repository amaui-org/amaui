import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthSharp'
      short_name='CalendarViewMonth'

      {...props}
    >
      <path d="M4 11H8V6H4ZM10 11H14V6H10ZM16 11H20V6H16ZM4 18H8V13H4ZM10 18H14V13H10ZM16 18H20V13H16ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthSharp.displayName = 'AmauiIconMaterialCalendarViewMonthSharp';

export default IconMaterialCalendarViewMonthSharp;
