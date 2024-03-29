import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditCalendarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarFilled'

      short_name='EditCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v6h-2v-2H5v10h7v2Zm17.125-5L20 14.875l.725-.725q.275-.275.7-.275.425 0 .7.275l.725.725q.275.275.275.7 0 .425-.275.7ZM14 22.5v-1.2q0-.2.075-.387.075-.188.225-.338l5-5 2.125 2.125-5 5q-.15.15-.337.225Q15.9 23 15.7 23h-1.2q-.2 0-.35-.15-.15-.15-.15-.35Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarFilled.displayName = 'AmauiIconMaterialEditCalendarFilled';

export default IconMaterialEditCalendarFilled;
