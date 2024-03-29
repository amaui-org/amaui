import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockFilled'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V8q0-.825.587-1.412Q4.175 6 5 6h1V3q0-.825.588-1.413Q7.175 1 8 1h8q.825 0 1.413.587Q18 2.175 18 3v3h1q.825 0 1.413.588Q21 7.175 21 8v12q0 .825-.587 1.413Q19.825 22 19 22ZM8 6h8V3H8Zm4 12.2q1.725 0 2.963-1.238Q16.2 15.725 16.2 14t-1.237-2.963Q13.725 9.8 12 9.8t-2.962 1.237Q7.8 12.275 7.8 14t1.238 2.962Q10.275 18.2 12 18.2Zm.8-2.7-1.15-1.15q-.05-.05-.15-.35v-2q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35v1.8l1 1q.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15Z"/>
    </Icon>
  );
});

IconMaterialPunchClockFilled.displayName = 'AmauiIconMaterialPunchClockFilled';

export default IconMaterialPunchClockFilled;
