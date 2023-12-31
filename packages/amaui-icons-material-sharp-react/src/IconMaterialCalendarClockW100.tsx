import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarClockW100'

      short_name='CalendarClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-556h560v-164H200v164Zm0 0v-164 164Zm-28 424v-616h140v-92h32v92h276v-92h28v92h140v265q-7-2-14-2.5t-14-1.5v-41H200v368h305q2 8 5.5 14.5T517-132H172Zm568 40q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T740-92Zm66-62 20-20-72-72.193V-354h-28v120l80 80Z"/>
    </Icon>
  );
});

IconMaterialCalendarClockW100.displayName = 'AmauiIconMaterialCalendarClockW100';

export default IconMaterialCalendarClockW100;
