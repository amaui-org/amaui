import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarFilled'

      short_name='PermContactCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.85q1.35-1.325 3.138-2.088Q9.925 16 12 16t3.863.762q1.787.763 3.137 2.088V6H5ZM12 14q-1.45 0-2.475-1.025Q8.5 11.95 8.5 10.5q0-1.45 1.025-2.475Q10.55 7 12 7q1.45 0 2.475 1.025Q15.5 9.05 15.5 10.5q0 1.45-1.025 2.475Q13.45 14 12 14Zm-7 8q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarFilled.displayName = 'AmauiIconMaterialPermContactCalendarFilled';

export default IconMaterialPermContactCalendarFilled;
