import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarClockFilled'

      short_name='CalendarClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/>
    </Icon>
  );
});

IconMaterialCalendarClockFilled.displayName = 'AmauiIconMaterialCalendarClockFilled';

export default IconMaterialCalendarClockFilled;
