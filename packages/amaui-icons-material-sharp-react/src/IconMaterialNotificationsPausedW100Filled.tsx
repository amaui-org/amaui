import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedW100Filled'

      short_name='NotificationsPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 15.45h4.4v-.7h-3.5l3.5-4.5v-.7H9.8v.7h3.5l-3.5 4.5Zm-5.15 3.2v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65h2v.7ZM12 21.5q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedW100Filled.displayName = 'AmauiIconMaterialNotificationsPausedW100Filled';

export default IconMaterialNotificationsPausedW100Filled;
