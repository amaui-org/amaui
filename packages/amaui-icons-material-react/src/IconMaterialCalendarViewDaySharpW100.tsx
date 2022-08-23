import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarViewDaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDaySharpW100'
      short_name='CalendarViewDay'

      {...props}
    >
      <path d="M4.3 18.9V18.2H19.7V18.9ZM4.3 15.7V8.3H19.7V15.7ZM5 15H19V9H5ZM4.3 5.8V5.1H19.7V5.8ZM5 15V9V15Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDaySharpW100.displayName = 'AmauiIconMaterialCalendarViewDaySharpW100';

export default IconMaterialCalendarViewDaySharpW100;
