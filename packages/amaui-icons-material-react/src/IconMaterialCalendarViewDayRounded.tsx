import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayRounded'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M5 17Q4.175 17 3.587 16.413Q3 15.825 3 15V9Q3 8.175 3.587 7.587Q4.175 7 5 7H19Q19.825 7 20.413 7.587Q21 8.175 21 9V15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM5 15H19Q19 15 19 15Q19 15 19 15V9Q19 9 19 9Q19 9 19 9H5Q5 9 5 9Q5 9 5 9V15Q5 15 5 15Q5 15 5 15ZM3.975 5Q3.55 5 3.275 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20.025Q20.45 3 20.725 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5ZM3.975 21Q3.55 21 3.275 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20.025Q20.45 19 20.725 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM5 9Q5 9 5 9Q5 9 5 9V15Q5 15 5 15Q5 15 5 15Q5 15 5 15Q5 15 5 15V9Q5 9 5 9Q5 9 5 9Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayRounded.displayName = 'AmauiIconMaterialCalendarViewDayRounded';

export default IconMaterialCalendarViewDayRounded;
