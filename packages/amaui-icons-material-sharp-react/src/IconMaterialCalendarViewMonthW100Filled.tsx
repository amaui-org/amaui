import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100Filled'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11.65V6h4.875v5.65Zm5.575 0V6h4.85v5.65Zm5.55 0V6H20v5.65ZM4 18v-5.65h4.875V18Zm5.575 0v-5.65h4.85V18Zm5.55 0v-5.65H20V18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100Filled.displayName = 'AmauiIconMaterialCalendarViewMonthW100Filled';

export default IconMaterialCalendarViewMonthW100Filled;
