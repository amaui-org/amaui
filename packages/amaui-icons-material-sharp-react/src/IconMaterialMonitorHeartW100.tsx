import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 9.65V5.3h17.4v4.35H20V6H4v3.65Zm0 9.05v-4.35H4V18h16v-3.65h.7v4.35Zm6.7-2.35q.1 0 .188-.05.087-.05.137-.15L14 8.8l1.675 3.35q.05.1.137.15.088.05.188.05h4.7v-.7h-4.475l-1.9-3.8Q14.25 7.7 14 7.7t-.325.15L10 15.2l-1.675-3.35q-.05-.1-.137-.15-.088-.05-.188-.05H3.3v.7h4.475l1.9 3.8q.05.1.137.15.088.05.188.05ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100.displayName = 'AmauiIconMaterialMonitorHeartW100';

export default IconMaterialMonitorHeartW100;
