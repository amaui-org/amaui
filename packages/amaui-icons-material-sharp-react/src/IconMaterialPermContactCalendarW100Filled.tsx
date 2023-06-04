import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100Filled'

      short_name='PermContactCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.35q1.35-1.325 3.138-2.088Q9.925 16.5 12 16.5t3.863.762q1.787.763 3.137 2.088V6H5Zm7-6q-1.2 0-2.025-.825T9.15 10.5q0-1.2.825-2.025T12 7.65q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T12 13.35ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100Filled.displayName = 'AmauiIconMaterialPermContactCalendarW100Filled';

export default IconMaterialPermContactCalendarW100Filled;
