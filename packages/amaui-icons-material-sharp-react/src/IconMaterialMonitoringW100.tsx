import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitoringW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringW100'

      short_name='Monitoring'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-1.075l.7-.7v1.775Zm4 0v-5.075l.7-.7v5.775Zm4 0v-5.775l.7.725v5.05Zm4 0V15.3l.7-.7v5.75Zm4 0v-9.075l.7-.7v9.775Zm-16-6.1v-.975L10 6.925l4 4 6.35-6.35v.975L14 11.9l-4-4Z"/>
    </Icon>
  );
});

IconMaterialMonitoringW100.displayName = 'AmauiIconMaterialMonitoringW100';

export default IconMaterialMonitoringW100;
