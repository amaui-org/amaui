import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedFilled'

      short_name='NotificationsPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 16h5.5v-1.8H12l2.75-3.4V9h-5.5v1.8H12l-2.75 3.4ZM4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2V2h3v2.2q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedFilled.displayName = 'AmauiIconMaterialNotificationsPausedFilled';

export default IconMaterialNotificationsPausedFilled;
