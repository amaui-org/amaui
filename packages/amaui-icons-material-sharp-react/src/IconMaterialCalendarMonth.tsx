import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarMonth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonth'

      short_name='CalendarMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14v-2h2v2Zm-4 0v-2h2v2Zm8 0v-2h2v2Zm-4 4v-2h2v2Zm-4 0v-2h2v2Zm8 0v-2h2v2ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonth.displayName = 'AmauiIconMaterialCalendarMonth';

export default IconMaterialCalendarMonth;
