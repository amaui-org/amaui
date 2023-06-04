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
      <path d="M5 18.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 2.85q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationsW100Filled.displayName = 'AmauiIconMaterialNotificationsW100Filled';

export default IconMaterialNotificationsW100Filled;
