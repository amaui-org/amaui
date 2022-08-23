import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitoringSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringSharpW100'
      short_name='Monitoring'

      {...props}
    >
      <path d="M3.65 14.25V13.275L10 6.925L14 10.925L20.35 4.575V5.55L14 11.9L10 7.9ZM19.65 20.35V11.275L20.35 10.575V20.35ZM7.65 20.35V15.275L8.35 14.575V20.35ZM11.65 20.35V14.575L12.35 15.3V20.35ZM15.65 20.35V15.3L16.35 14.6V20.35ZM3.65 20.35V19.275L4.35 18.575V20.35Z"/>
    </Icon>
  );
});

IconMaterialMonitoringSharpW100.displayName = 'AmauiIconMaterialMonitoringSharpW100';

export default IconMaterialMonitoringSharpW100;
