import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeart'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 9V4h20v5h-2V6H4v3Zm0 11v-5h2v3h16v-3h2v5Zm8-3q.275 0 .525-.137.25-.138.375-.413l3.1-6.2 1.1 2.2q.125.275.375.413.25.137.525.137h6v-2h-5.375L14.9 7.55q-.275-.5-.9-.5t-.9.5l-3.1 6.2-1.1-2.2q-.125-.275-.375-.413Q8.275 11 8 11H2v2h5.375L9.1 16.45q.125.275.375.413.25.137.525.137Zm2-5Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeart.displayName = 'AmauiIconMaterialMonitorHeart';

export default IconMaterialMonitorHeart;
