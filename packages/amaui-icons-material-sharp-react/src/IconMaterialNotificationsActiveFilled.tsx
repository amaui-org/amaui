import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveFilled'

      short_name='NotificationsActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 10q0-2.2.888-4.162.887-1.963 2.537-3.388l1.425 1.4Q5.5 5.025 4.75 6.612 4 8.2 4 10Zm18 0q0-1.8-.75-3.388-.75-1.587-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388Q22 7.8 22 10ZM4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2V2h3v2.2q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveFilled.displayName = 'AmauiIconMaterialNotificationsActiveFilled';

export default IconMaterialNotificationsActiveFilled;
