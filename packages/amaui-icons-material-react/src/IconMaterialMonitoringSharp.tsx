import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitoringSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringSharp'
      short_name='Monitoring'

      {...props}
    >
      <path d="M3 15.825V13L10 6L14 10L21 3V5.825L14 12.825L10 8.825ZM19 21V11L21 9V21ZM7 21V15L9 13V21ZM11 21V13L13 15.025V21ZM15 21V15.025L17 13.025V21ZM3 21V19L5 17V21Z"/>
    </Icon>
  );
});

IconMaterialMonitoringSharp.displayName = 'AmauiIconMaterialMonitoringSharp';

export default IconMaterialMonitoringSharp;
