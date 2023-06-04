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
      <path d="M4.3 18.9v-.7h15.4v.7Zm0-3.2V8.3h15.4v7.4ZM5 15h14V9H5Zm-.7-9.2v-.7h15.4v.7ZM5 15V9v6Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewDayW100.displayName = 'AmauiIconMaterialCalendarViewDayW100';

export default IconMaterialCalendarViewDayW100;
