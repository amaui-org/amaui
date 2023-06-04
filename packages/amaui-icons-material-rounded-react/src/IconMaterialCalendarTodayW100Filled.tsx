import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarTodayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayW100Filled'

      short_name='CalendarToday'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.375q0-.15.113-.263Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.325q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-8.4H5v8.4q0 .35.225.575Q5.45 20 5.8 20Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayW100Filled.displayName = 'AmauiIconMaterialCalendarTodayW100Filled';

export default IconMaterialCalendarTodayW100Filled;
