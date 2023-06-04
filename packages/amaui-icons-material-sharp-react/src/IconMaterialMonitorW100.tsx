import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorW100'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7v-1.15l1.85-1.85H3.3V4.3h17.4v12.4h-6.85l1.85 1.85v1.15ZM4 16h16V5H4Zm0 0V5v11Z"/>
    </Icon>
  );
});

IconMaterialMonitorW100.displayName = 'AmauiIconMaterialMonitorW100';

export default IconMaterialMonitorW100;
