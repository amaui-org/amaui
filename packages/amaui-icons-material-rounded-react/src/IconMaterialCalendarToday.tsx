import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarToday = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarToday'

      short_name='CalendarToday'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2.975q0-.425.287-.7Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V2.975q0-.425.288-.7Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialCalendarToday.displayName = 'AmauiIconMaterialCalendarToday';

export default IconMaterialCalendarToday;
