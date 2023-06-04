import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsW100Filled'

      short_name='Notifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.65v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65h2v.7ZM12 21.5q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationsW100Filled.displayName = 'AmauiIconMaterialNotificationsW100Filled';

export default IconMaterialNotificationsW100Filled;
