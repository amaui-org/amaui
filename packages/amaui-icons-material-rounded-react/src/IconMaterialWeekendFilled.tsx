import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendFilled'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-1.25 0-2.125-.875T1 17v-5q0-.825.588-1.413Q2.175 10 3 10t1.412.587Q5 11.175 5 12v4h14v-4q0-.825.587-1.413Q20.175 10 21 10q.825 0 1.413.587Q23 11.175 23 12v5q0 1.25-.875 2.125T20 20Zm3-6v-2q0-1.325-.862-2.325Q5.275 8.675 4 8.3V7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v1.3q-1.325.275-2.163 1.312Q17 10.65 17 12v2Z"/>
    </Icon>
  );
});

IconMaterialWeekendFilled.displayName = 'AmauiIconMaterialWeekendFilled';

export default IconMaterialWeekendFilled;
