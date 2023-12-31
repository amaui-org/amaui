import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarClockW100Filled'

      short_name='CalendarClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v205q-7-2-14-2.5t-14-1.5v-41H200v336q0 12 10 22t22 10h273q2 8 5.5 14.5T517-132H232Zm508 40q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T740-92Zm66-62 20-20-72-72v-108h-28v120l80 80Z"/>
    </Icon>
  );
});

IconMaterialCalendarClockW100Filled.displayName = 'AmauiIconMaterialCalendarClockW100Filled';

export default IconMaterialCalendarClockW100Filled;
