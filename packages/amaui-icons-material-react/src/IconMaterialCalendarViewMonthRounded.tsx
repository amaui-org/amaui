import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthRounded'
      short_name='CalendarViewMonth'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 11Q4 11 4 11Q4 11 4 11H8Q8 11 8 11Q8 11 8 11V6Q8 6 8 6Q8 6 8 6H4Q4 6 4 6Q4 6 4 6ZM10 11H14Q14 11 14 11Q14 11 14 11V6Q14 6 14 6Q14 6 14 6H10Q10 6 10 6Q10 6 10 6V11Q10 11 10 11Q10 11 10 11ZM16 11H20Q20 11 20 11Q20 11 20 11V6Q20 6 20 6Q20 6 20 6H16Q16 6 16 6Q16 6 16 6V11Q16 11 16 11Q16 11 16 11ZM8 18Q8 18 8 18Q8 18 8 18V13Q8 13 8 13Q8 13 8 13H4Q4 13 4 13Q4 13 4 13V18Q4 18 4 18Q4 18 4 18ZM10 18H14Q14 18 14 18Q14 18 14 18V13Q14 13 14 13Q14 13 14 13H10Q10 13 10 13Q10 13 10 13V18Q10 18 10 18Q10 18 10 18ZM16 18H20Q20 18 20 18Q20 18 20 18V13Q20 13 20 13Q20 13 20 13H16Q16 13 16 13Q16 13 16 13V18Q16 18 16 18Q16 18 16 18Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthRounded.displayName = 'AmauiIconMaterialCalendarViewMonthRounded';

export default IconMaterialCalendarViewMonthRounded;
