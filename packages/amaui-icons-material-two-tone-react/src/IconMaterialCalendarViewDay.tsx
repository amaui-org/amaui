import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDay'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/><path d="M5 12h14v1H5z" opacity=".3"/>
    </Icon>
  );
});

IconMaterialCalendarViewDay.displayName = 'AmauiIconMaterialCalendarViewDay';

export default IconMaterialCalendarViewDay;
