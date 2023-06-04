import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCircleNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotificationsW100Filled'

      short_name='CircleNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q.45 0 .788-.313.337-.312.412-.787h-2.4q.075.475.413.787.337.313.787.313Zm-4-2.8h8v-1h-1v-2.75q0-1.2-.637-2.175Q13.725 8 12.6 7.75V6.2h-1.2v1.55q-1.125.25-1.763 1.2Q9 9.9 9 11.1v2.8H8Zm4 5.8q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-9.4Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsW100Filled.displayName = 'AmauiIconMaterialCircleNotificationsW100Filled';

export default IconMaterialCircleNotificationsW100Filled;
