import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayTwoTone'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/><path d="M5 12h14v1H5z" opacity=".3"/>
    </Icon>
  )
});

export default IconMaterialCalendarViewDayTwoTone;
