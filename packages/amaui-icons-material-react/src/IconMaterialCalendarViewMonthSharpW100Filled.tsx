import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthSharpW100Filled'
      short_name='CalendarViewMonth'

      {...props}
    >
      <path d="M4 11.65V6H8.875V11.65ZM9.575 11.65V6H14.425V11.65ZM15.125 11.65V6H20V11.65ZM4 18V12.35H8.875V18ZM9.575 18V12.35H14.425V18ZM15.125 18V12.35H20V18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthSharpW100Filled.displayName = 'AmauiIconMaterialCalendarViewMonthSharpW100Filled';

export default IconMaterialCalendarViewMonthSharpW100Filled;
