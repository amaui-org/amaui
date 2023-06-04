import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewDayW100Filled'

      short_name='CalendarViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 18.9q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1ZM5.8 15.7q-.625 0-1.062-.438Q4.3 14.825 4.3 14.2V9.8q0-.625.438-1.063Q5.175 8.3 5.8 8.3h12.4q.625 0 1.063.437.437.438.437 1.063v4.4q0 .625-.437 1.062-.438.438-1.063.438ZM4.625 5.8q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayW100Filled.displayName = 'AmauiIconMaterialCalendarViewDayW100Filled';

export default IconMaterialCalendarViewDayW100Filled;
