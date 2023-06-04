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
      <path d="M12 17.7q.45 0 .788-.313.337-.312.412-.787h-2.4q.075.475.413.787.337.313.787.313Zm-3.5-2.8h7.025q.2 0 .338-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137H15v-2.75q0-1.2-.637-2.175Q13.725 8 12.6 7.75v-.9q0-.275-.162-.463Q12.275 6.2 12 6.2t-.438.187q-.162.188-.162.463v.9q-1.125.25-1.763 1.2Q9 9.9 9 11.1v2.8h-.525q-.2 0-.338.137Q8 14.175 8 14.4q0 .2.15.35.15.15.35.15Zm3.5 5.8q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-9.4Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsW100Filled.displayName = 'AmauiIconMaterialCircleNotificationsW100Filled';

export default IconMaterialCircleNotificationsW100Filled;
