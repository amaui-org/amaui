import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDaySharpW100Filled'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M4.3 18.9V18.2H19.7V18.9ZM4.3 15.7V8.3H19.7V15.7ZM4.3 5.8V5.1H19.7V5.8Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarViewDaySharpW100Filled;
