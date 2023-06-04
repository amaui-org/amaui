import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDay'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17q-.825 0-1.413-.587Q3 15.825 3 15V9q0-.825.587-1.413Q4.175 7 5 7h14q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Zm0-2h14V9H5v6ZM3.975 5q-.425 0-.7-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16.025q.425 0 .7.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm0 16q-.425 0-.7-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 21 20 21ZM5 9v6-6Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDay.displayName = 'AmauiIconMaterialCalendarViewDay';

export default IconMaterialCalendarViewDay;
