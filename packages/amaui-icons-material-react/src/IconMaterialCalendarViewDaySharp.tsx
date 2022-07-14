import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDaySharp'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M3 21V19H21V21ZM3 17V7H21V17ZM5 15H19V9H5ZM3 5V3H21V5ZM5 15V9V15Z"/>
    </Icon>
  );
});

export default IconMaterialCalendarViewDaySharp;
