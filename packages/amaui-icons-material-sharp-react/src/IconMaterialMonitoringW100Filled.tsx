import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitoringW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringW100Filled'

      short_name='Monitoring'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3 20.35-.225-.225 1.575-1.55v1.775Zm4.65 0v-5.075l.7-.7v5.775Zm4 0v-5.775l.7.725v5.05Zm4 0V15.3l.7-.7v5.75Zm4 0v-9.075l.7-.7v9.775Zm-16-6.1v-.975L10 6.925l4 4 6.35-6.35v.975L14 11.9l-4-4Z"/>
    </Icon>
  );
});

IconMaterialMonitoringW100Filled.displayName = 'AmauiIconMaterialMonitoringW100Filled';

export default IconMaterialMonitoringW100Filled;
