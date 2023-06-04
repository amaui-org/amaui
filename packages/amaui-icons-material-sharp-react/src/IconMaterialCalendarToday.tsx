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
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialCalendarToday.displayName = 'AmauiIconMaterialCalendarToday';

export default IconMaterialCalendarToday;
