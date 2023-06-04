import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100Filled'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7v-6.35h4.475l1.9 3.8q.05.1.137.15.088.05.188.05t.188-.05q.087-.05.137-.15L14 8.8l1.675 3.35q.05.1.137.15.088.05.188.05h4.7v6.35Zm6.7-3.5-1.675-3.35q-.05-.1-.125-.15-.075-.05-.2-.05H3.3V5.3h17.4v6.35h-4.475l-1.9-3.8q-.05-.075-.125-.113-.075-.037-.175-.037-.125 0-.213.037-.087.038-.137.113Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100Filled.displayName = 'AmauiIconMaterialMonitorHeartW100Filled';

export default IconMaterialMonitorHeartW100Filled;
