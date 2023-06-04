import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarMonthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonthW100'

      short_name='CalendarMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 14.2v-1.4h1.4v1.4Zm-4 0v-1.4h1.4v1.4Zm8 0v-1.4h1.4v1.4Zm-4 3.8v-1.4h1.4V18Zm-4 0v-1.4h1.4V18Zm8 0v-1.4h1.4V18Zm-11 2.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm0-9.9h14V6H5Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonthW100.displayName = 'AmauiIconMaterialCalendarMonthW100';

export default IconMaterialCalendarMonthW100;
