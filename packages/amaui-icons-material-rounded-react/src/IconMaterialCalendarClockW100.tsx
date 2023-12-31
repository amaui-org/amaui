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
      <path d="M200-556h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Zm32 424q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v205q-7-2-14-2.5t-14-1.5v-41H200v336q0 12 10 22t22 10h273q2 8 5.5 14.5T517-132H232Zm508 40q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T740-92Zm14-154v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T816-164q5-5 5-10t-5-10l-62-62Z"/>
    </Icon>
  );
});

IconMaterialCalendarClockW100.displayName = 'AmauiIconMaterialCalendarClockW100';

export default IconMaterialCalendarClockW100;
