import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100Filled'

      short_name='NotificationsActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 10q0-1.925.813-3.65.812-1.725 2.237-3l.5.5Q5.5 5.025 4.75 6.612 4 8.2 4 10ZM20 10q0-1.8-.75-3.388-.75-1.587-2.1-2.762l.5-.5q1.425 1.275 2.238 3Q20.7 8.075 20.7 10ZM4.65 18.65v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65h2v.7ZM12 21.5q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100Filled.displayName = 'AmauiIconMaterialNotificationsActiveW100Filled';

export default IconMaterialNotificationsActiveW100Filled;
