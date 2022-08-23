import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorSharpW100Filled'
      short_name='Monitor'

      {...props}
    >
      <path d="M8.3 19.7V18.55L10.15 16.7H3.3V4.3H20.7V16.7H13.85L15.7 18.55V19.7Z"/>
    </Icon>
  );
});

IconMaterialMonitorSharpW100Filled.displayName = 'AmauiIconMaterialMonitorSharpW100Filled';

export default IconMaterialMonitorSharpW100Filled;
