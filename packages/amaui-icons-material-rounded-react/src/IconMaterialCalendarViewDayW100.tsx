import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayW100'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 15.7q-.625 0-1.062-.438Q4.3 14.825 4.3 14.2V9.8q0-.625.438-1.063Q5.175 8.3 5.8 8.3h12.4q.625 0 1.063.437.437.438.437 1.063v4.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.35 0 .575-.225Q19 14.55 19 14.2V9.8q0-.35-.225-.575Q18.55 9 18.2 9H5.8q-.35 0-.575.225Q5 9.45 5 9.8v4.4q0 .35.225.575Q5.45 15 5.8 15ZM4.625 5.8q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0 13.1q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1ZM5 9h.8q-.35 0-.575.225Q5 9.45 5 9.8v4.4q0 .35.225.575Q5.45 15 5.8 15H5V9Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayW100.displayName = 'AmauiIconMaterialCalendarViewDayW100';

export default IconMaterialCalendarViewDayW100;
