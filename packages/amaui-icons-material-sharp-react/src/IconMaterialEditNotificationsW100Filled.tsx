import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100Filled'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 12.65v-1.225l5.1-5.1L19.25 7.55l-5.1 5.1Zm7.025-5.8-1.225-1.225.975-.975 1.225 1.225ZM12 21.5q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm-7.35-2.85v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q.55.1 1.25.375t1.275.775l-4.45 4.45v4.05h4.05l2.375-2.375v5.675h2v.7Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100Filled.displayName = 'AmauiIconMaterialEditNotificationsW100Filled';

export default IconMaterialEditNotificationsW100Filled;
