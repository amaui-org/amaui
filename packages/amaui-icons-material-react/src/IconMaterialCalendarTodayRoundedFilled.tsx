import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarTodayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayRoundedFilled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z"/>
    </Icon>
  );
});

IconMaterialCalendarTodayRoundedFilled.displayName = 'AmauiIconMaterialCalendarTodayRoundedFilled';

export default IconMaterialCalendarTodayRoundedFilled;
