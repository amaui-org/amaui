import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayRoundedW100Filled'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M4.625 18.9Q4.5 18.9 4.4 18.8Q4.3 18.7 4.3 18.55Q4.3 18.4 4.4 18.3Q4.5 18.2 4.65 18.2H19.375Q19.5 18.2 19.6 18.3Q19.7 18.4 19.7 18.55Q19.7 18.7 19.6 18.8Q19.5 18.9 19.35 18.9ZM5.8 15.7Q5.175 15.7 4.738 15.262Q4.3 14.825 4.3 14.2V9.8Q4.3 9.175 4.738 8.737Q5.175 8.3 5.8 8.3H18.2Q18.825 8.3 19.263 8.737Q19.7 9.175 19.7 9.8V14.2Q19.7 14.825 19.263 15.262Q18.825 15.7 18.2 15.7ZM4.625 5.8Q4.5 5.8 4.4 5.7Q4.3 5.6 4.3 5.45Q4.3 5.3 4.4 5.2Q4.5 5.1 4.65 5.1H19.375Q19.5 5.1 19.6 5.2Q19.7 5.3 19.7 5.45Q19.7 5.6 19.6 5.7Q19.5 5.8 19.35 5.8Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayRoundedW100Filled.displayName = 'AmauiIconMaterialCalendarViewDayRoundedW100Filled';

export default IconMaterialCalendarViewDayRoundedW100Filled;
