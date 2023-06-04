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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 11.65h4.875V6H4.8q-.35 0-.575.225Q4 6.45 4 6.8Zm5.575 0h4.85V6h-4.85v5.65Zm5.55 0H20V6.8q0-.35-.225-.575Q19.55 6 19.2 6h-4.075v5.65ZM8.875 18v-5.65H4v4.85q0 .35.225.575Q4.45 18 4.8 18Zm.7 0h4.85v-5.65h-4.85V18Zm5.55 0H19.2q.35 0 .575-.225Q20 17.55 20 17.2v-4.85h-4.875V18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100.displayName = 'AmauiIconMaterialCalendarViewMonthW100';

export default IconMaterialCalendarViewMonthW100;
