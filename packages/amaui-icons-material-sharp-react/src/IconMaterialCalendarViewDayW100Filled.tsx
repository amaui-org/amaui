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
      <path d="M4.3 18.9v-.7h15.4v.7Zm0-3.2V8.3h15.4v7.4Zm0-9.9v-.7h15.4v.7Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayW100Filled.displayName = 'AmauiIconMaterialCalendarViewDayW100Filled';

export default IconMaterialCalendarViewDayW100Filled;
