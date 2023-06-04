import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedW100'

      short_name='NotificationsPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 15.45h4.4v-.7h-3.5l3.5-4.5v-.7H9.8v.7h3.5l-3.5 4.5Zm-5.15 3.2v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q2 .35 3.25 1.887 1.25 1.538 1.25 3.413v7.65h2v.7ZM12 11.8Zm0 9.7q-.6 0-1.05-.425-.45-.425-.45-1.075h3q0 .65-.425 1.075-.425.425-1.075.425Zm-4.65-3.55h9.3V10.3q0-1.925-1.362-3.288Q13.925 5.65 12 5.65q-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedW100.displayName = 'AmauiIconMaterialNotificationsPausedW100';

export default IconMaterialNotificationsPausedW100;
