import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekRounded'
      short_name='CalendarViewWeek'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM13 18H15.5Q15.5 18 15.5 18Q15.5 18 15.5 18V6Q15.5 6 15.5 6Q15.5 6 15.5 6H13Q13 6 13 6Q13 6 13 6V18Q13 18 13 18Q13 18 13 18ZM8.5 18H11Q11 18 11 18Q11 18 11 18V6Q11 6 11 6Q11 6 11 6H8.5Q8.5 6 8.5 6Q8.5 6 8.5 6V18Q8.5 18 8.5 18Q8.5 18 8.5 18ZM4 18H6.5Q6.5 18 6.5 18Q6.5 18 6.5 18V6Q6.5 6 6.5 6Q6.5 6 6.5 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM17.5 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H17.5Q17.5 6 17.5 6Q17.5 6 17.5 6V18Q17.5 18 17.5 18Q17.5 18 17.5 18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekRounded.displayName = 'AmauiIconMaterialCalendarViewWeekRounded';

export default IconMaterialCalendarViewWeekRounded;
