import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarTodaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodaySharpW100'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5ZM5 10.1H19V6H5ZM5 10.1V6V10.1Z"/>
    </Icon>
  );
});

export default IconMaterialCalendarTodaySharpW100;
