import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDaySharpFilled'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M3 21V19H21V21ZM3 17V7H21V17ZM3 5V3H21V5Z"/>
    </Icon>
  );
});

export default IconMaterialCalendarViewDaySharpFilled;
