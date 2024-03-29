import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnFilled'

      short_name='CalendarAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.075 19H5q-.825 0-1.413-.587Q3 17.825 3 17V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588Q19 5.175 19 6v6.075q-.25-.05-.487-.063Q18.275 12 18 12t-.512.012q-.238.013-.488.063V9H5v8h7.075q-.05.25-.063.488Q12 17.725 12 18t.012.512q.013.238.063.488ZM17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnFilled.displayName = 'AmauiIconMaterialCalendarAddOnFilled';

export default IconMaterialCalendarAddOnFilled;
