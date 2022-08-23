import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekRoundedFilled'
      short_name='CalendarViewWeek'

      {...props}
    >
      <path d="M13.75 19Q13.325 19 13.038 18.712Q12.75 18.425 12.75 18V6Q12.75 5.575 13.038 5.287Q13.325 5 13.75 5H15.125Q15.55 5 15.838 5.287Q16.125 5.575 16.125 6V18Q16.125 18.425 15.838 18.712Q15.55 19 15.125 19ZM8.875 19Q8.45 19 8.163 18.712Q7.875 18.425 7.875 18V6Q7.875 5.575 8.163 5.287Q8.45 5 8.875 5H10.25Q10.675 5 10.963 5.287Q11.25 5.575 11.25 6V18Q11.25 18.425 10.963 18.712Q10.675 19 10.25 19ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V6Q3 5.575 3.288 5.287Q3.575 5 4 5H5.375Q5.8 5 6.088 5.287Q6.375 5.575 6.375 6V18Q6.375 18.425 6.088 18.712Q5.8 19 5.375 19ZM18.625 19Q18.2 19 17.913 18.712Q17.625 18.425 17.625 18V6Q17.625 5.575 17.913 5.287Q18.2 5 18.625 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6V18Q21 18.425 20.712 18.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekRoundedFilled.displayName = 'AmauiIconMaterialCalendarViewWeekRoundedFilled';

export default IconMaterialCalendarViewWeekRoundedFilled;
