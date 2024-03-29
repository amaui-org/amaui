import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartFilled'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-5h5.375L9.1 16.45q.125.275.375.413.25.137.525.137t.525-.137q.25-.138.375-.413l3.1-6.2 1.1 2.2q.125.275.375.413.25.137.525.137h6v5q0 .825-.587 1.413Q20.825 20 20 20Zm6-6.25-1.1-2.2q-.125-.275-.375-.413Q8.275 11 8 11H2V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v5h-5.375L14.9 7.55q-.125-.275-.375-.388-.25-.112-.525-.112t-.525.112q-.25.113-.375.388Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartFilled.displayName = 'AmauiIconMaterialMonitorHeartFilled';

export default IconMaterialMonitorHeartFilled;
