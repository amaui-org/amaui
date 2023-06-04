import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayFilled'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 21q-.425 0-.7-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 21 20 21ZM5 17q-.825 0-1.413-.587Q3 15.825 3 15V9q0-.825.587-1.413Q4.175 7 5 7h14q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17ZM3.975 5q-.425 0-.7-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16.025q.425 0 .7.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayFilled.displayName = 'AmauiIconMaterialCalendarViewDayFilled';

export default IconMaterialCalendarViewDayFilled;
