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
      <path d="M2 20v-7h5.375L9.1 16.45q.125.275.375.413.25.137.525.137t.525-.137q.25-.138.375-.413l3.1-6.2 1.1 2.2q.125.275.375.413.25.137.525.137h6v7Zm8-6.25-1.1-2.2q-.125-.275-.375-.413Q8.275 11 8 11H2V4h20v7h-5.375L14.9 7.55q-.125-.275-.375-.388-.25-.112-.525-.112t-.525.112q-.25.113-.375.388Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartFilled.displayName = 'AmauiIconMaterialMonitorHeartFilled';

export default IconMaterialMonitorHeartFilled;
